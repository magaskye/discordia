# Site oficial — Discórdia Desktop

Este repositório é **público** e hospeda somente o site estático do Discórdia Desktop pelo GitHub Pages. O código-fonte do aplicativo Windows e a configuração privada de CI permanecem em outro repositório, sem arquivos secretos aqui.

## Estrutura
- `index.html` — apresentação e canais de download, com situação de desenvolvimento clara.
- `site.css` — estilos responsivos.
- `site.js` — consulta pública de GitHub Releases com validação dos links oficiais.
- `logo.png` — logo original do Discórdia, preservado.
- `privacidade.html` — informações preliminares, a serem revisadas antes do lançamento estável.
- `.github/ISSUE_TEMPLATE` — modelos públicos de bugs e sugestões, sem formulário privado ainda.

## Situação do projeto — 20/10/2026

- **Discórdia Desktop RC6 (1.0.0-rc.6):** compilação Windows privada de instalador e portátil concluída, mas sem homologação final em máquinas dos testers ou Release pública.
- **P2P e TURN:** fluxos de áudio/vídeo com relay e reinício ICE verificados em testes de conectividade. O TURN permanece homologado para esse escopo.
- **SFU:** ambiente experimental isolado e autorização de sala validados; publicação, assinatura e decodificação de quadros de vídeo entre usuários reais ainda aguardam comprovação.
- **Palco V2 e SmartStream V2:** alterações preparadas em branch experimental, com testes automatizados aprovados. Layout compacto, vídeo principal em destaque e adaptação de qualidade de aproximadamente 1,6 segundo; solicitação de até 60 FPS conforme capacidade de captura. **Não compilados nem homologados no Windows na versão V2.**
- **Próxima etapa:** integrar e validar as melhorias, observar falhas de 0 FPS/tela preta, qualidade e recuperação das transmissões, testar com vários espectadores e preparar a próxima distribuição de testes.
- **Estável 1.0:** ainda não lançada. O site somente oferece botões ativos quando a Release pública possui executáveis oficiais verificados.

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
