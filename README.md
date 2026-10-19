# Site oficial — Discórdia Desktop

Este repositório é **público** e hospeda somente o site estático do Discórdia Desktop pelo GitHub Pages. O código-fonte do aplicativo Windows e a configuração privada de CI permanecem em outro repositório, sem arquivos secretos aqui.

## Estrutura
- `index.html` — apresentação e canais de download, com situação de desenvolvimento clara.
- `site.css` — estilos responsivos.
- `site.js` — consulta pública de GitHub Releases com validação dos links oficiais.
- `logo.png` — logo original do Discórdia, preservado.
- `privacidade.html` — informações preliminares, a serem revisadas antes do lançamento estável.
- `.github/ISSUE_TEMPLATE` — modelos públicos de bugs e sugestões, sem formulário privado ainda.

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
