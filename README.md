# Discórdia Desktop — site oficial

O **Discórdia Desktop** é um aplicativo de comunicação para Windows que reúne amigos, mensagens, chamadas por voz e vídeo, salas de comunidade e compartilhamento de tela. O projeto oferece personalização visual e experiências voltadas à convivência e aos jogos.

**Site:** https://magaskye.github.io/discordia/  
**Downloads oficiais:** https://github.com/magaskye/discordia/releases  
**Plataforma:** Windows x64  
**Canal de distribuição atual:** Release Candidate (RC/Testers). A edição estável 1.0 será anunciada separadamente.

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

## Download e instalação

O site identifica a versão mais recente por meio da **API oficial do GitHub Releases** e só habilita os botões após identificar instalador, portátil, manifesto e arquivo SHA-256. Nenhum instalador é armazenado diretamente no site.

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
| `site.css` | Identidade visual e responsividade |
| `site.js` | Consulta às Releases oficiais e habilitação segura de downloads |
| `ui-discordia-v2-preview.svg` | Ilustração da experiência do aplicativo |
| `logo.png` | Marca do projeto |
| `privacidade.html` | Informações sobre privacidade |

O site é estático e usa o GitHub Pages. Não requer credenciais de acesso, segredos de servidor ou coleta de senhas para disponibilizar os downloads.

## Demonstração visual

O site apresenta um **carrossel com capturas reais** da interface Desktop, compartilhadas durante testes anteriores: Amigos, Palco e Compartilhamento. As imagens foram reduzidas para preservar dados pessoais; os textos e controles podem variar entre versões RC. As capturas não devem ser confundidas com promessa de funcionalidades ainda não implantadas.

O carrossel é manual, acessível por botões, sem reprodução automática. Para vê-lo, acesse [o início do site](https://magaskye.github.io/discordia/#inicio).

## Firebase e presença

- O Discórdia utiliza **Realtime Database** para presença online/voz por sessão, com `onDisconnect` e heartbeat; **Firestore** mantém informações sociais, servidores, permissões e mensagens.
- As regras e orientações de configuração ficam no repositório privado do aplicativo. Nenhuma Release Desktop publica regras Firebase automaticamente.
- A estabilidade de presença depende de relógio do servidor, regras autenticadas e da configuração `VITE_FIREBASE_DATABASE_URL` no build.
- No plano Spark, mantenha os serviços dentro das cotas disponíveis e não ative Cloud Functions pagas ou novos serviços sem aprovação.

A eventual **1.0 Estável** exige homologação com usuários reais, verificação das regras Firebase e confirmação das integrações de produção. O programa RC permanece separado até essa aprovação.

## Lançamentos

A distribuição é organizada em dois canais:

- **RC/Testers:** versões de pré-lançamento, destinadas à avaliação e ao aperfeiçoamento da experiência. Apenas a RC pública mais recente é mantida na lista de downloads.
- **Estável:** canal separado, reservado para a versão final quando estiver disponível.

Consulte sempre [GitHub Releases](https://github.com/magaskye/discordia/releases) para obter a versão vigente e as notas oficiais. Não utilize links desatualizados enviados por terceiros.

## Comunicação e contribuições

Contribuições, sugestões e relatos podem ser encaminhados por meio dos recursos públicos do projeto. Evite incluir informações pessoais, senhas, tokens ou outros dados confidenciais em mensagens públicas.

## Privacidade e segurança

Consulte a [página de privacidade](https://magaskye.github.io/discordia/privacidade.html). O site não substitui o sistema de autenticação do aplicativo. O transporte de dados, recursos de mídia e eventuais serviços externos são descritos nas informações do produto.

---

© 2026 Discórdia Desktop. Todos os direitos reservados.
