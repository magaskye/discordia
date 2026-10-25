# Discórdia Desktop — site oficial

O **Discórdia Desktop** é um aplicativo de comunicação para Windows que reúne amigos, mensagens, chamadas por voz e vídeo, salas de comunidade e compartilhamento de tela. O projeto oferece personalização visual e experiências voltadas à convivência e aos jogos.

## Redesign oficial do site — 24/10/2026

A página inicial foi reconstruída para apresentar o Discórdia a novos usuários, com hierarquia visual clara, design responsivo, componentes acessíveis e seis áreas em destaque: voz, compartilhamento, comunidades, temas, amizades e Snake global.

**Identidade e ativos:**

- `discordia-orbit-app.png` é uma cópia **do emblema realmente utilizado no aplicativo** (`src/assets/discordia-orbit.png`, obtido do repositório privado apenas como imagem de marca);
- `discordia-identity-2026.webp` é a **arte cinematográfica** aprovada anteriormente para a capa, não uma captura real do executável;
- `ui-discordia-v2-preview.svg` é uma **prévia ilustrativa identificada como tal**, e não uma captura de tela autenticada;
- a palavra **VeloSinc** recebe tratamento tipográfico em CSS (`vs-wordmark`) inspirado na identidade visual aprovada. **Não foi encontrado um arquivo independente de logo VeloSinc** no conjunto de assets do aplicativo consultado. Não declarar a composição CSS como arquivo original da marca.

**Infraestrutura preservada:** o script `site.js` mantém a verificação de Releases pela API GitHub, com instalador, portátil, manifesto e SHA-256. Apenas o texto informativo da versão estável foi atualizado, sem alterar lógica ou downloads. `network-film.js` e `velosinc-preview.js` continuam sendo demonstrações ilustrativas sem backend e não registram telemetria.

**Publicação do vídeo:** o filme institucional VeloSinc permanece privado até a aprovação final do sistema. Nenhum vídeo foi adicionado ao site por esta mudança. Os recursos VeloSinc exibidos como próximos aprimoramentos não equivalem a funcionalidades já presentes na versão estável pública.


**Site:** https://magaskye.github.io/discordia/  
**Downloads oficiais:** https://github.com/magaskye/discordia/releases  
**Plataforma:** Windows x64  
**Versão oficial em 23/10/2026: Discórdia 1.0.0 estável publicada.** Release [v1.0.0](https://github.com/magaskye/discordia/releases/tag/v1.0.0) disponível no GitHub, com instalador, versão portátil, `latest.yml` e SHA-256. Compilação no GitLab privado (job `17429566006`), com **88/88 testes Windows aprovados**. O site identifica automaticamente a versão estável com base nos quatro arquivos oficiais.

## Recursos

| Área | Recursos |
| --- | --- |
| Social | Lista de amigos, cartões de perfil, mensagens diretas, presença e convites |
| Comunidades | Servidores, canais de texto, salas de voz e Palco |
| Comunicação | Voz, câmera, vídeo e compartilhamento de janelas, jogos e monitores |
| SmartStream | Perfis de qualidade de imagem e opções de áudio, conforme dispositivo e contexto |
| Conexão | Caminhos P2P, retransmissão TURN e distribuição de vídeo SFU quando aplicável |
| Personalização | Interface organizada, painéis ajustáveis e Estúdio de Temas independente |

O desempenho e a qualidade podem variar conforme o hardware, a conexão e o conteúdo da transmissão.

## 1.0.0 — transparência sobre a primeira versão estável

- A RC22 foi homologada como referência de funcionalidades e qualidade.
- A versão 1.0.0 consolidada foi compilada no GitLab (commit `33d71ce65280aa70a5430ec4d857b3d32c18b816`), **sem publicar código-fonte privado**.
- A exclusão definitiva de servidores está desativada até a verificação da integração Google–Cloudflare/Firebase; o cliente não deve oferecer exclusão sem backend autorizado.
- O build disponibiliza login por e-mail; OAuth Google nativo ainda não foi provisionado.
- Os downloads públicos foram publicados com `latest.yml` e `SHA256SUMS.txt`, gerados a partir **dos executáveis reais**, em substituição aos arquivos antigos do rascunho.

## Download e instalação

O site identifica as versões por meio da **API oficial do GitHub Releases** e só habilita os botões após encontrar instalador, portátil, manifesto de atualização e arquivo de somas SHA-256. Quando existe uma edição estável verificável, ela substitui a RC no painel de downloads, sem apagar o histórico das melhorias. Nenhum instalador é armazenado diretamente no site.

1. Acesse [Downloads](https://magaskye.github.io/discordia/#downloads).
2. Escolha o **instalador** ou a **versão portátil** para Windows x64.
3. Consulte as notas da Release e o arquivo `SHA256SUMS.txt`.
4. Caso o Windows apresente aviso de editor não verificado em uma versão não assinada, confirme a origem do arquivo. Não desative proteções de segurança.

**Atualizações:** usuários inscritos no canal RC/Testers podem receber notificações quando a configuração do atualizador permitir. A versão portátil pode exigir download manual.

## Sobre este repositório

Este repositório público mantém exclusivamente os arquivos do site, informações institucionais e releases executáveis. O código-fonte do aplicativo, credenciais e configuração de serviços permanecem fora deste repositório.

| Arquivo | Finalidade |
| --- | --- |
| `index.html` | Conteúdo da página oficial |
| `site.css` | Layout geral e responsividade |
| `identity-2026.css` | Tipografia futurista e novo acabamento de marca |
| `showcase-2026.css` | Redesign premium da página, recursos e vitrine visual responsiva |
| `discordia-orbit-app.png` | Emblema original extraído dos assets do aplicativo Desktop |
| `velosinc-preview.css` | Estilos da apresentação técnica futura VeloSinc |
| `velosinc-preview.js` | Navegação local, sem backend, pela explicação das etapas |
| `discordia-identity-2026.webp` | Arte de identidade visual oficial otimizada do Google Flow |
| `site.js` | Consulta às Releases oficiais e habilitação segura de downloads |
| `ui-discordia-v2-preview.svg` | Ilustração da experiência do aplicativo |
| `logo.png` | Marca do projeto |
| `privacidade.html` | Informações sobre privacidade |
| `HISTORICO_RCS.md` | O destaque de cada RC pública preservado mesmo após a retirada dos executáveis antigos |

O site é estático e usa o GitHub Pages. Não requer credenciais de acesso, segredos de servidor ou coleta de senhas para disponibilizar os downloads.

## Próxima arquitetura VeloSinc (em desenvolvimento; não publicada)

A página oficial inclui a seção **VeloSinc — em desenvolvimento**, baseada na especificação privada
`docs/DISCORDIA_VELOSINC_MEDIA_1_0_3_PRIVATE_2026-10-24.md`
na branch `feature/1.0.3-smart-route-fps-recovery-20261024` do projeto de aplicativo.

A nova demonstração ilustrativa permite comparar três etapas:

- **Envio:** frames capturados versus frames realmente codificados/enviados;
- **Recepção:** frames recebidos, decodificados e efetivamente exibidos; problemas de rede são distintos de problemas locais de GPU/decodificação;
- **Recuperação (proposta):** avaliar P2P → TURN → SFU apenas para um espectador afetado, confirmando quadros exibidos antes de trocar de rota e preservando os demais.

O SFU para voz/som do compartilhamento evolui em builds RC privados e requer homologação específica antes de ser tratado como disponível na edição estável. A rota efetiva não pode ser deduzida de um seletor; requer ICE/quadros confirmados.

Esta seção é uma **apresentação técnica**, não comprovação de que todos os elementos planejados já tenham sido publicados. Arquivos: `velosinc-preview.css` e `velosinc-preview.js`. A ilustração não coleta métricas nem conecta a serviços. Os downloads oficiais continuam condicionados à checagem do GitHub, e o atualizador permanece no hold de emergência vigente.

## Apresentação animada de P2P, TURN e SFU

A página inicial contém uma **apresentação interativa de 36 segundos**, sem áudio e sem dependências externas, no bloco **P2P / TURN / SFU**. O quadro utiliza o logo oficial `logo.png`, diferencia o aplicativo transmissor dos aplicativos receptores e esclarece a recepção, decodificação e exibição do vídeo. O visitante pode reproduzir, pausar e escolher diretamente um capítulo. Os fluxos são simulações gráficas, **não** medições em tempo real nem gravações de chamadas reais.

- **P2P:** conexão direta quando possível.
- **TURN:** relay alternativo quando o caminho direto falha por restrições de rede.
- **SFU:** distribuição seletiva de vídeo em sessões compatíveis; a voz do Discórdia segue por P2P/TURN separadamente.
- O roteiro **não** promete automaticamente desempenho, latência ou disponibilidade de um modo. A execução real depende do aplicativo, infraestrutura e rede.
- Implementação: `network-film.css` e `network-film.js`. A animação respeita `prefers-reduced-motion`, só inicia quando visível e pode ser pausada.
- A apresentação é realizada no navegador por HTML/SVG/CSS/JavaScript, não há arquivo MP4 neste repositório.

## Demonstração visual

O topo do site agora apresenta a **arte oficial de identidade visual aprovada pelo criador**, produzida no Google Flow, com a marca do Discórdia em ciano, violeta e magenta e o nome em estilo metálico futurista. A arte é uma peça visual de marca, **não** uma captura do aplicativo em execução. A apresentação é veiculada no arquivo `discordia-identity-2026.webp`, otimizado para o GitHub Pages; a fonte e o acabamento visual são definidos em `identity-2026.css`, com alternativas tipográficas locais, sem dependência de serviços de fontes externas. A seção **Histórico** preserva as melhorias de cada RC pública.

## Firebase e presença

- O Discórdia utiliza **Realtime Database** para presença online/voz por sessão, com `onDisconnect` e heartbeat; **Firestore** mantém informações sociais, servidores, permissões e mensagens.
- As regras e orientações de configuração ficam no repositório privado do aplicativo. Nenhuma Release Desktop publica regras Firebase automaticamente.
- A estabilidade de presença depende de relógio do servidor, regras autenticadas e da configuração `VITE_FIREBASE_DATABASE_URL` no build.
- No plano Spark, mantenha os serviços dentro das cotas disponíveis e não ative Cloud Functions pagas ou novos serviços sem aprovação.

A **1.0.0 Estável** foi publicada após compilação e testes automatizados, com a RC22 como referência homologada. A exclusão definitiva de servidores permanece bloqueada até a verificação real do backend e das regras Firebase em produção.

## Lançamentos e continuidade

- **RC/Testers:** o histórico dos testes continua disponível na página de versões, mas a edição estável é a escolha principal do site.
- **Estável:** a [`v1.0.0`](https://github.com/magaskye/discordia/releases/tag/v1.0.0) foi publicada com instalador, portátil, `latest.yml` e `SHA256SUMS.txt`; o site agora lhe dá prioridade.
- **Histórico:** os principais marcos das RCs públicas, da 7.4 até a 18, estão registrados em [HISTORICO_RCS.md](./HISTORICO_RCS.md), independentemente da disponibilidade futura de seus binários.
- **Segurança:** hashes dos dois binários conferidos com a compilação de origem. Testes em emulador não substituem revisão dos serviços efetivamente implantados; por isso, a exclusão definitiva permanece desativada.

Consulte a [Release pública oficial v1.0.0](https://github.com/magaskye/discordia/releases/tag/v1.0.0) para instalar ou verificar as somas SHA-256.

## Comunicação e contribuições

Contribuições, sugestões e relatos podem ser encaminhados por meio dos recursos públicos do projeto. Evite incluir informações pessoais, senhas, tokens ou outros dados confidenciais em mensagens públicas.

## Privacidade e segurança

Consulte a [página de privacidade](https://magaskye.github.io/discordia/privacidade.html). O site não substitui o sistema de autenticação do aplicativo. O transporte de dados, recursos de mídia e eventuais serviços externos são descritos nas informações do produto.

---

© 2026 Discórdia Desktop. Todos os direitos reservados.


## Redesign cinematográfico + Apoie o projeto (publicação autorizada em 25/10/2026)

**Origem:** `design/site-cinematic-apoia-preview-20261025`. O proprietário autorizou publicar o redesign no GitHub Pages mantendo o pagamento do APOIA.se desativado até regularizar o cadastro, confirmar a URL e dar autorização para ativar a campanha.

- `next-chapter-2026.css`: identidade cinematográfica própria; cores ciano, violeta e magenta e uso dos ativos existentes. Inspirado em boas práticas de landing pages de comunicação, sem copiar identidade, personagens, marca, texto ou layouts específicos de terceiros.
- `index.html`: novo título de capa, navegação e seção pública de apoio voluntário. O bloco de downloads e o `site.js` permanecem inalterados.
- `apoie.html`: explicação de uso dos recursos e transparência. Ainda **não recebe pagamentos**.
- `site-support.js`: variável local `campaignUrl` em branco por padrão. Para ativar um CTA, após o proprietário finalizar a campanha oficial, preencher somente com URL HTTPS no domínio `apoia.se`, revisar o endereço e testar. Nenhum token, segredo, PIX pessoal, cartão ou API é armazenado.
- A meta sugerida de **R$ 200 por mês é um valor de planejamento**, não uma despesa verificada, nem uma promessa de receita ou dados de arrecadação. Na campanha mensal contínua, a taxa informada pelo APOIA.se é de **13%**; arrecadar R$ 200 renderia cerca de R$ 174 após essa taxa, antes de impostos e outras despesas. Fonte: https://suporte.apoia.se/hc/pt-br/articles/219814327-Quanto-custa-usar-a-APOIA-se.
- Não exibir barra de arrecadação, número de apoiadores ou progresso sem dados reais. A barra no cartão é puramente decorativa e identificada como tal.
- Revisar despesas reais e eventuais implicações legais/fiscais antes de ativar e divulgar a campanha. O apoio deve permanecer voluntário, sem retirar recursos essenciais dos usuários gratuitos.
- Preservar os identificadores DOM usados na lógica dos downloads e as verificações do atualizador. O arquivo `site.js` **não foi editado** nesta proposta.
- Após a publicação, verificar visualmente mobile e desktop e ajustar eventuais problemas. A identidade poderá ser atualizada quando o futuro nome for aprovado.

Para checar a estrutura sem build ou deploy: `node tools/test-site-next-chapter.mjs`.



## Landing page imersiva — 25/10/2026

A página foi novamente redesenhada após avaliação de que as primeiras mudanças eram apenas ajustes de cores. Agora utiliza narrativa visual com cenas de grande escala e composições próprias, inspirada em princípios de apresentação de produtos da web, **sem copiar** marca, personagens, textos ou imagens do Discord.

- `index.html`: nova hero com ilustração CSS/HTML de uma sala do app, três painéis de experiência (voz/presença, transmissão/Palco, personalização) e encerramento com logo original; segue com as seções já existentes de P2P/TURN/SFU, VeloSinc, histórico, FAQs, apoio e downloads.
- `immersive-landing-2026.css`: design e animações CSS responsivas (grandes blocos, mobile e preferência de movimento reduzido), sem fontes externas.
- A UI mostrada na capa é **uma ilustração conceitual** e não uma captura ou comprovação de funcionamento; a imagem de Palco existente também é rotulada como prévia ilustrativa.
- O logo em `discordia-orbit-app.png` é o símbolo real do app, não um símbolo inventado.
- O controle do atualizador e a descoberta de Releases em `site.js` **não foram alterados**, assim como o DOM de downloads, os manifestos e somas SHA-256.
- O APOIA.se ainda depende de validação do cadastro; a campanha e os botões de pagamento continuam desativados em `site-support.js`.
- Teste de contrato: `node tools/test-site-immersive.mjs`. Para inspeção visual mobile e desktop, abrir a página publicada e verificar hero, cards, ilustrações, contraste e navegação.


## Design V4 unificado — 25/10/2026 (estado vigente do site)

Este registro **substitui as descrições anteriores da estrutura visual da página inicial**. Os arquivos antigos de estilos, animações e histórico continuam no repositório como legado técnico, mas a home **não os carrega**.

- `index.html` mantém a grande capa ilustrada, a narrativa de voz, transmissão e personalização e o encerramento de grande escala, com novos painéis no mesmo design para conexões P2P/TURN/SFU, VeloSinc, evolução do projeto, apoio voluntário, downloads e FAQ.
- `unified-site-2026.css` é o único novo estilo para os painéis que antes se pareciam com o site antigo. A home carrega apenas `site.css` (base de navegação/compatibilidade), `immersive-landing-2026.css` e `unified-site-2026.css`.
- As animações históricas `network-film.js` / `velosinc-preview.js` e os CSS correspondentes não são mais referenciados na home. Os detalhes técnicos essenciais são apresentados de forma sucinta, com indicação de recursos em desenvolvimento.
- `apoie.html` foi reconstruída para acompanhar a identidade V4. Campanha ainda em preparação: não há botão de pagamento habilitado, valores de arrecadação reais ou captura de dados de pagamento no site. A meta de R$ 200/mês é uma proposta, não a despesa comprovada.
- `privacidade.html` recebeu apenas novo enquadramento visual, logotipo original e correção de um link de menu obsoleto. Conteúdo da política permanece inalterado e ainda demanda revisão jurídico-operacional específica.
- Os mesmos IDs consumidos pelo `site.js` seguem presentes na seção renovada de downloads. A lógica oficial de busca de Releases, manifestos e SHA-256 não foi alterada.
- Ferramenta de regressão estática: `node tools/test-site-v4.mjs` (sem compilação, rede ou deploy).
- A publicação depende da integração da branch de design com `main`, seguida de checagem visual real no GitHub Pages. Não ativar o APOIA.se até aprovação da plataforma e recebimento do URL oficial.
