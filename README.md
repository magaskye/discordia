# Site oficial — Discórdia Desktop

Este repositório é **público** e hospeda somente o site estático do Discórdia Desktop pelo GitHub Pages. O código-fonte do aplicativo Windows e a configuração privada de CI permanecem em outro repositório, sem arquivos secretos aqui.

## Estrutura
- `index.html` — apresentação e canais de download, com situação de desenvolvimento clara.
- `site.css` — estilos responsivos.
- `site.js` — consulta pública de GitHub Releases com validação dos links oficiais.
- `logo.png` — logo original do Discórdia, preservado.
- `privacidade.html` — informações preliminares, a serem revisadas antes do lançamento estável.
- `.github/ISSUE_TEMPLATE` — modelos públicos de bugs e sugestões, sem formulário privado ainda.

## Hotfix RC6.2 de economia TURN — 20/10/2026

- **Última Release pública RC/Testers:** [v1.0.0-rc.6.2](https://github.com/magaskye/discordia/releases/tag/v1.0.0-rc.6.2), validada e compilada pelo GitHub Actions privado (workflow 39381979631), com instalador, portátil, `rc.yml` e hash SHA256.
- Economia de dados opcional **somente quando o vídeo WebRTC está comprovadamente usando TURN**: jogo até 1,8 Mbps/45 FPS/900p, janela/tela até 1,25 Mbps/30 FPS/720p. Há uma opção para desativar, priorizando a qualidade máxima.
- **Não modifica o TURN hospedado na Cloudflare**, nem ICE/P2P direto ou áudio de chamadas. A economia real exige testes com a mesma audiência e tempo, observando `egressBytes` no analytics TURN.
- **SFU ainda não homologado** em quadros de vídeo entre vários clientes Windows; estágio experimental continua com fallback P2P/TURN.
- Release RC6.1 segue no histórico; a 1.0 estável não foi lançada.
- Atualização automática apenas para clientes com feed configurado e opção RC/Testers ativa. Portátil informa download manual.

## Situação do projeto — 20/10/2026

- **Discórdia Desktop 1.0.0-rc.6.1:** hotfix **publicado como pré-lançamento RC/Testers** em https://github.com/magaskye/discordia/releases/tag/v1.0.0-rc.6.1, contendo instalador e versão portátil Windows. O workflow privado de validação/empacotamento concluiu com sucesso. **Ainda falta homologação com usuários reais no Windows**.
- **P2P e TURN:** fluxos de áudio/vídeo e relay testados; o TURN permanece homologado para seu escopo.
- **SFU:** staging/autorizações implementadas e verificadas; recepção real de quadros por múltiplos computadores ainda **não homologada**.
- **Palco V2, SmartStream V2 e presença:** compilados no hotfix RC6.1; precisam de testes de fluidez/FPS, tela preta, reconexão e remoção de participantes fantasma em vários computadores.
- **Aviso de atualização:** RC6 com feed GitHub ativo e participação no canal RC/Testers pode detectar o hotfix ao iniciar e nas verificações periódicas/manuais. Canal Estável não recebe RC automaticamente; portátil apenas aponta o download. **Publicar uma Release não envia um push universal**.
- **Hotfix privado futuro:** cliente com receptor de avisos autenticados preparado, porém o backend privado ainda não está implantado/homologado e o recurso está desativado.
- **Estável 1.0:** ainda não lançada. Versões RC públicas são experimentais.

O aplicativo Windows e o piloto Cloudflare permanecem separados deste repositório público. Não publicar detalhes de contas de teste, credenciais, configuração privada de CI ou materiais internos.

## Regras de lançamento
1. Os botões nunca apontam para artefatos do repositório privado ou para endereços fictícios.
2. Releases **estáveis** e **RC/Testers** são separadas pela informação oficial de `prerelease`.
3. Somente arquivos publicados em `magaskye/discordia/releases/download/` e com nome oficial de instalador ou portátil habilitam o download.
4. Não divulgar SFU como transmissão homologada antes dos testes de vídeo.
5. Nunca publicar `.env`, credenciais Firebase, App Secret SFU, Cloudflare TURN/SFU, certificados privados ou o repositório de código do Desktop.

## Próximos passos do site
- Substituir a arte conceitual por capturas reais **aprovadas**, sem nomes/identificadores de usuários.
- Preparar formulário privado de bugs/sugestões para e-mail do responsável, usando backend com antispam e política de privacidade. **Nunca** colocar credenciais de e-mail no JavaScript.
- Concluir política de privacidade do aplicativo e páginas de suporte antes da 1.0 estável.
- Atualizar o progresso sempre que um marco for validado.

## Deploy
A branch `main` publica o site conforme a configuração existente do GitHub Pages; o site não dispara builds do Discórdia Windows nem cria Releases do aplicativo.
