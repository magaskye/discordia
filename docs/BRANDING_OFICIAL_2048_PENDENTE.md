# Identidade oficial Discórdia — migração de 30/10/2026

O proprietário enviou o logo real PNG **2048 × 2048 px** (fundo transparente),
SHA-256 `fb32ba33a0282f152061572ce71886aaf6afd34843c912928de8483cb6b3eee8`.
Está preservado na Biblioteca privada `/Discordia/Branding/Discordia Logo Oficial.png`.

Esta branch **não contém a nova imagem binária** e não altera o site público
GitHub Pages. `index.html` e o favicon já referenciam `./logo.png`;
portanto, a migração correta consiste em substituir esse PNG pelos bytes oficiais,
sem trocar URLs nem criar desenho alternativo.

O pacote `Discordia_Identidade_Oficial_2048.zip` inclui:
`assets/discordia-logo-oficial-2048.png` e um script seguro em
`scripts/branding/sync-official-logo-2048.ps1`.

No PowerShell, use `-Target Site` e informe o clone Git e a pasta `assets`
do ZIP extraído. Por padrão apenas verifica caminhos; `-Apply` cria branch
local isolada e copia a imagem; `-Commit` é opcional. Não executa push,
GitHub Pages, lançamento, build ou atualização do Discordia Desktop.

O Admin Netlify e o Desktop possuem branches independentes para essa migração.
Compilação e publicação exigem autorização explícita.
