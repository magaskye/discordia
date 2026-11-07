# Discórdia — site e domínio

**Domínio oficial planejado (EU.org):** `discordia.eu.org` — solicitação registrada, aguardando aprovação do EU.org.  
**Site canônico em produção:** https://discordia-ari.pages.dev/ (Cloudflare Pages).  
**Versão atual no canal Testers:** [Discórdia Desktop v1.0.3-rc.23](https://github.com/magaskye/discordia/releases/tag/v1.0.3-rc.23).  
**Hospedagem:** Cloudflare Pages, publicada automaticamente a partir da branch `main`.  

A RC23 reúne VeloSinc Automático e atividade recente com ícones e tempo de sessão, e continua candidata até testes reais de transmissão e jogos em computadores diferentes. Os downloads permanecem no GitHub Releases. A documentação RC11 abaixo é mantida como registro histórico, não como versão atual.

---

## Site único e redirecionamento legado

O Cloudflare Pages é a única vitrine canônica de páginas do Discórdia. O GitHub mantém o código-fonte, releases e manifestos históricos de atualização; a Cloudflare publica o site a partir da branch `main`.

As páginas HTML antigas em `https://magaskye.github.io/discordia/` utilizam **redirecionamento via JavaScript** para seus caminhos correspondentes em `https://discordia-ari.pages.dev/`, preservando os parâmetros da URL. Esse encaminhamento não é um HTTP 301 e depende de JavaScript; quem o desabilitar poderá ver a versão legada, mas as páginas têm tag canônica para a Cloudflare.

Manter **sem redirecionamento** `https://magaskye.github.io/discordia/android/updates/rc.json`: aplicativos Android antigos usam esse feed, e seu link ainda é atualizado a partir do repositório. O portal Firebase de contas e os downloads de arquivos grandes no GitHub Releases continuam serviços independentes.

Quando `discordia.eu.org` for aprovado e o HTTPS validado, atualizar a URL canônica e o destino do script de compatibilidade.

---

## Plataformas no site oficial

- **Windows:** [RC23 para Windows](https://discordia-ari.pages.dev/#downloads), com os executáveis no GitHub Releases.
- **Android:** [página oficial de versões Android](https://discordia-ari.pages.dev/android/), com download do APK Android RC20.2 assinado e publicado no GitHub Releases.
- **Web:** [página da versão Web](https://discordia-ari.pages.dev/web/), que descreve o desenvolvimento. O cliente React/Vite ainda não foi liberado em domínio público nem teve a autenticação Web homologada.

**Observação:** `discordia.eu.org` continua pendente de aprovação no EU.org. A Cloudflare Pages permanece como hospedagem pública provisória.

---

## Registro histórico (RC11)

# Discórdia Desktop — RC11 publicada (31/10/2026)

**Versão disponível neste site: [Discórdia Desktop v1.0.3-rc.11 — Versão candidata](https://github.com/magaskye/discordia/releases/tag/v1.0.3-rc.11).** É uma pré-release para Testers no Windows 10/11 x64, não uma versão Estável.

## Downloads RC11
- [Instalador x64](https://github.com/magaskye/discordia/releases/download/v1.0.3-rc.11/Discordia-1.0.3-rc.11-Instalador-x64.exe)
- [Portátil x64](https://github.com/magaskye/discordia/releases/download/v1.0.3-rc.11/Discordia-1.0.3-rc.11-Portatil-x64.exe)
- [Manifesto Testers rc.yml](https://github.com/magaskye/discordia/releases/download/v1.0.3-rc.11/rc.yml)
- [Hashes SHA256](https://github.com/magaskye/discordia/releases/download/v1.0.3-rc.11/SHA256SUMS.txt)

## Correções e melhorias
- Corrigida a falha `Headphones is not defined` que impedia a abertura da interface.
- Corrigida a atualização indevida de `1.0.3-rc.11` para a Estável `1.0.3`; canais Testers e Estável não migram silenciosamente.
- Barra superior com `v1.0.3-rc.11 · Versão candidata`, com a edição após o número.
- Painel de voz e cronômetro reorganizados para não sobrepor controles.
- Detecção ampliada de jogos de Steam, Epic, Riot, Xbox, outras lojas e jogos portáteis identificáveis; suporte a ícones de emuladores (PCSX2, Dolphin, DuckStation etc.) com nome do jogo no perfil.
- Melhorias de login, presença, Palco, compartilhamento e interface.
- Voz P2P/TURN, SFU com áudio da tela, VeloSinc, reconexão e exclusão de Servir a dor **ainda exigem homologação real** antes de serem considerados integralmente aprovados.

## Próxima Estável 1.1
A próxima **Discórdia 1.1 Estável** será disponibilizada após os testes e a homologação da RC11. Não há data confirmada.

A Estável antiga `v1.0.3` foi retirada do GitHub por falhas de compatibilidade e atualização. As demais releases históricas podem permanecer no repositório para histórico, mas **não são oferecidas nos downloads do site**. Este site oferece apenas a RC11.

**Importante:** quem instalou uma RC11 privada anterior com a mesma numeração precisa reinstalar manualmente a nova edição, pois o autoatualizador não troca binários entre versões de número idêntico.

**Site publicado durante o registro:** https://discordia-ari.pages.dev/  
**Endereço anterior (mantido):** https://magaskye.github.io/discordia/  
**Release:** https://github.com/magaskye/discordia/releases/tag/v1.0.3-rc.11

Desenvolvido por Carlos Eduardo Lopes, com o apoio da comunidade e dos testers.
