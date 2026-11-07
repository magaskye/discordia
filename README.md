# Discórdia — site e domínio

**Domínio oficial planejado (EU.org):** `discordia.eu.org` — aguardando solicitação e aprovação do registro.  
**Site publicado provisoriamente:** https://discordia-ari.pages.dev/  
**Versão atual no canal Testers:** [Discórdia Desktop v1.0.3-rc.20](https://github.com/magaskye/discordia/releases/tag/v1.0.3-rc.20).  
**Hospedagem:** Cloudflare Pages, publicada automaticamente a partir da branch `main`.  

A RC20 continua candidata e depende dos testes reais para homologação. Os downloads permanecem no GitHub Releases. A documentação RC11 abaixo é mantida como registro histórico, não como versão atual.

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
