# Discórdia Desktop — site oficial

O **Discórdia Desktop** é um aplicativo de comunicação para Windows que reúne amigos, mensagens, chamadas por voz e vídeo, salas de comunidade e compartilhamento de tela. O projeto oferece personalização visual e experiências voltadas à convivência e aos jogos.

**Site:** https://magaskye.github.io/discordia/  
**Downloads oficiais:** https://github.com/magaskye/discordia/releases  
**Plataforma:** Windows x64  
**Estado em 23/10/2026:** Discórdia 1.0.0 compilado com êxito no GitLab privado (job `17429566006`), com 88/88 testes Windows aprovados, instalador e portátil x64 e hashes. A publicação pública está condicionada ao envio autenticado dos arquivos para a Release oficial `v1.0.0`. A última versão pública anteriormente confirmada é a RC18. O site identifica automaticamente a versão estável quando os artefatos necessários aparecem no GitHub Releases.

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
- O download público precisa acompanhar `latest.yml` e `SHA256SUMS.txt` gerados a partir **dos executáveis reais**, e não dos assets antigos da Release em rascunho.

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
| `site.css` | Identidade visual e responsividade |
| `site.js` | Consulta às Releases oficiais e habilitação segura de downloads |
| `ui-discordia-v2-preview.svg` | Ilustração da experiência do aplicativo |
| `logo.png` | Marca do projeto |
| `privacidade.html` | Informações sobre privacidade |
| `HISTORICO_RCS.md` | O destaque de cada RC pública preservado mesmo após a retirada dos executáveis antigos |

O site é estático e usa o GitHub Pages. Não requer credenciais de acesso, segredos de servidor ou coleta de senhas para disponibilizar os downloads.

## Demonstração visual

O topo do site apresenta uma **ilustração conceitual identificada como tal** da experiência Discórdia, não uma captura real do executável. A seção **Histórico** preserva as melhorias de cada RC pública.

## Firebase e presença

- O Discórdia utiliza **Realtime Database** para presença online/voz por sessão, com `onDisconnect` e heartbeat; **Firestore** mantém informações sociais, servidores, permissões e mensagens.
- As regras e orientações de configuração ficam no repositório privado do aplicativo. Nenhuma Release Desktop publica regras Firebase automaticamente.
- A estabilidade de presença depende de relógio do servidor, regras autenticadas e da configuração `VITE_FIREBASE_DATABASE_URL` no build.
- No plano Spark, mantenha os serviços dentro das cotas disponíveis e não ative Cloud Functions pagas ou novos serviços sem aprovação.

A eventual **1.0 Estável** exige homologação com usuários reais, verificação das regras Firebase e confirmação das integrações de produção. O programa RC permanece separado até essa aprovação.

## Lançamentos e continuidade

- **RC/Testers:** enquanto não existir uma versão estável verificável, o site oferece a RC pública mais recente por meio da API do GitHub. Os arquivos de instalação antigos não são removidos antes da substituição estável, para preservar a continuidade de atualização.
- **Estável:** quando a `v1.0.0` estiver disponível na página oficial com instalador, portátil, `latest.yml` e `SHA256SUMS.txt`, o site dará prioridade à estável e ocultará os links de RC da página inicial.
- **Histórico:** os principais marcos das RCs públicas, da 7.4 até a 18, estão registrados em [HISTORICO_RCS.md](./HISTORICO_RCS.md), independentemente da disponibilidade futura de seus binários.
- **Segurança:** o lançamento da versão estável exige confirmação das regras e serviços efetivamente implantados e dos hashes individuais dos executáveis finais; ensaios privados e testes em emulador não substituem essa verificação.

Consulte [GitHub Releases](https://github.com/magaskye/discordia/releases) para saber qual versão foi efetivamente publicada. Não confunda um instalador privado `1.0.0` com a Release pública `v1.0.0`.

## Comunicação e contribuições

Contribuições, sugestões e relatos podem ser encaminhados por meio dos recursos públicos do projeto. Evite incluir informações pessoais, senhas, tokens ou outros dados confidenciais em mensagens públicas.

## Privacidade e segurança

Consulte a [página de privacidade](https://magaskye.github.io/discordia/privacidade.html). O site não substitui o sistema de autenticação do aplicativo. O transporte de dados, recursos de mídia e eventuais serviços externos são descritos nas informações do produto.

---

© 2026 Discórdia Desktop. Todos os direitos reservados.
