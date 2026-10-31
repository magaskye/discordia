# PowerShell: safely copy the owner's verified 2048px logo without network/build/deploy.
# Extract the official ZIP first. Runs in read-only preview unless -Apply.
[CmdletBinding()]
param(
 [Parameter(Mandatory=$true)][string]$ProjectRoot,
 [Parameter(Mandatory=$true)][string]$PackageAssets,
 [Parameter(Mandatory=$true)][ValidateSet('Admin','Site','Desktop')][string]$Target,
 [switch]$Apply,
 [switch]$Commit,
 [string]$Branch='work/branding-logo-2048-20261030'
)
$ErrorActionPreference='Stop'
Set-StrictMode -Version Latest
if($Commit -and -not $Apply){throw '-Commit requires -Apply'}
$repo=(Resolve-Path -LiteralPath $ProjectRoot -ErrorAction Stop).Path
if(-not (Test-Path -LiteralPath (Join-Path $repo '.git'))){throw 'Target must be a Git worktree'}
$assets=(Resolve-Path -LiteralPath $PackageAssets -ErrorAction Stop).Path
$logo=Join-Path $assets 'discordia-logo-oficial-2048.png'
$iconPng=Join-Path $assets 'discordia-icon-512.png'
$iconIco=Join-Path $assets 'discordia-icon-windows.ico'
$sha='fb32ba33a0282f152061572ce71886aaf6afd34843c912928de8483cb6b3eee8'
if(-not (Test-Path -LiteralPath $logo)){throw 'Missing original logo image in extracted package'}
if((Get-FileHash -LiteralPath $logo -Algorithm SHA256).Hash.ToLowerInvariant() -ne $sha){throw 'Logo SHA-256 does not match owner-supplied official art'}
$bytes=[IO.File]::ReadAllBytes($logo)
if($bytes.Length -ne 3364561 -or $bytes[0] -ne 137 -or $bytes[1] -ne 80 -or $bytes[2] -ne 78 -or $bytes[3] -ne 71){throw 'Invalid PNG original'}
$side=([int]$bytes[16]*16777216)+([int]$bytes[17]*65536)+([int]$bytes[18]*256)+[int]$bytes[19]
if($side -ne 2048){throw 'Expected 2048px width'}
if($Target -eq 'Admin'){
 $destinations=@(@('admin-center/public/logo.png',$logo),@('admin-center/netlify/preview-public/logo.png',$logo))
}elseif($Target -eq 'Site'){
 $destinations=@(@('logo.png',$logo))
}elseif($Target -eq 'Desktop'){
 if(-not (Test-Path -LiteralPath $iconPng) -or -not (Test-Path -LiteralPath $iconIco)){throw 'Missing derived icon PNG or ICO'}
 $destinations=@(@('src/assets/discordia-orbit.png',$logo),@('build/icon.png',$iconPng),@('build/icon.ico',$iconIco))
}
foreach($entry in $destinations){
 $target=Join-Path $repo $entry[0]
 if(-not (Test-Path -LiteralPath $target)){throw "Expected destination missing: $($entry[0])"}
 Write-Host "BRANDING_TARGET: $($entry[0])"
}
if(-not $Apply){Write-Host 'VERIFICATION_ONLY; no files changed';exit 0}
$dirty=(& git -C $repo status --porcelain)
if($LASTEXITCODE -ne 0 -or ($dirty -join '')){throw 'Git tree is not clean'}
$current=(& git -C $repo branch --show-current).Trim()
if($LASTEXITCODE -ne 0 -or -not $current){throw 'Unable to confirm branch'}
if($current -eq 'main' -and $Target -eq 'Admin'){throw 'Admin must start from its private work/admin branch'}
if($current -ne $Branch){
 & git -C $repo switch -c $Branch
 if($LASTEXITCODE -ne 0){throw 'Branch creation failed; nothing copied'}
}
foreach($entry in $destinations){
 $target=Join-Path $repo $entry[0]
 Copy-Item -LiteralPath $entry[1] -Destination $target -Force
 if($entry[1] -eq $logo -and (Get-FileHash -LiteralPath $target -Algorithm SHA256).Hash.ToLowerInvariant() -ne $sha){throw "Postcopy hash mismatch $target"}
}
if($Commit){
 foreach($entry in $destinations){& git -C $repo add -- $entry[0];if($LASTEXITCODE -ne 0){throw 'git add failed'}}
 & git -C $repo commit -m 'assets(discordia): adopt owner official 2048px logo [skip ci]'
 if($LASTEXITCODE -ne 0){throw 'git commit failed'}
}
Write-Host 'Source-only assets replaced locally; no push, build, release or deployment.' -ForegroundColor Green
