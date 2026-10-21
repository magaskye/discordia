# Site oficial — Discórdia Desktop

Este repositório é **público** e hospeda somente o site estático do Discórdia Desktop pelo GitHub Pages. O código-fonte do aplicativo Windows e a configuração privada de CI permanecem em outro repositório, sem arquivos secretos aqui.

## Estrutura
- `index.html` — apresentação e canais de download, com situação de desenvolvimento clara.
- `site.css` — estilos responsivos.
- `site.js` — consulta pública de GitHub Releases com validação dos links oficiais.
- `logo.png` — logo original do Discórdia, preservado.
- `privacidade.html` — informações preliminares, a serem revisadas antes do lançamento estável.
- `.github/ISSUE_TEMPLATE` — modelos públicos de bugs e sugestões, sem formulário privado ainda.

## RC7 — última prévia pública planejada antes da 1.0 (21/10/2026)

- **Status da publicação:** testes e build Windows em validação no repositório privado. A RC7 só será anunciada quando a [Release](https://github.com/magaskye/discordia/releases/tag/v1.0.0-rc.7) incluir instalador, portátil e arquivo do atualizador.
- **Interface V3:** nova composição responsiva, reorganização do Palco e amigos, controles compactos e cenários que não cobrem mensagens e vídeo.
- **Temas V3:** Fuyuki, Requiem e CTR Turbo Rush com identidade visual independente e pacotes .disca V2 validados.
- **SmartStream V3:** perfis Automático, Jogos, Vídeo e Texto, preservando P2P, TURN e SFU homologados pelos testers.
- **Servidores:** permissões por canal ainda dependem de autorização no backend; não são anunciadas como prontas.
- **Canal RC:** o site consulta o GitHub Releases e só libera links com executáveis confirmados. A 1.0 Stable permanece indisponível.

### Última RC pública confirmada antes da RC7
RC6.5: https://github.com/magaskye/discordia/releases/tag/v1.0.0-rc.6.5
## Hotfix RC6.4 — vídeo, presença e economia adaptativa — 20/10/2026

- **Última Release RC/Testers:** [v1.0.0-rc.6.4](https://github.com/magaskye/discordia/releases/tag/v1.0.0-rc.6.4). Instalador Windows, portátil, `rc.yml`, blockmap e `SHA256SUMS.txt` publicados como pré-lançamento. Pipeline privado [39470673817](https://github.com/magaskye/discordia-build/actions/runs/39470673817): testes, build Windows, hashes e publicação **SUCCESS**.
- **Presença:** snapshot RTDB não alterna para Firestore por queda momentânea do estado local; tolerância visual de 7 segundos quando usuário online desaparece brevemente, mas Invisível/Offline explícitos continuam imediatos.
- **Tela e recuperação:** intenção de assistir é preservada por até 18 segundos em interrupções curtas; emissor/receptor verificam quadros reais, com tentativas limitadas de recuperação de **somente SCREEN** e pedido de relay TURN quando aplicável; PeerJS/ICE restart requer teste em dois Windows.
- **SFU:** após quadros decodificados confirmados no receptor, evita duplicar a tela P2P/TURN para aquele espectador; ao detectar perda do SFU, tenta reabrir a tela fallback. SFU ainda **não homologado em PCs reais** e pode haver falhas de renegociação.
- **Economia adaptativa:** TURN jogo até 3,4 Mbps / 60 FPS / 1080p se houver capacidade; tela até 2,1 Mbps / 30 FPS / 1080p. SFU limite próprio de vídeo. É um equilíbrio entre nitidez e tráfego, não garantia de menor cobrança. Um jogo recebendo 13 FPS com RTT baixo também pode estar limitado na captura, não na rota.
- **Segurança:** TURN Cloudflare homologado não foi reconfigurado, voz independente e canal Estável continuam separados. Nenhum código-fonte privado nem segredo deve ser anexado às Releases públicas.
- **Avisos de atualização:** clientes com feed ativo no canal RC/Testers podem detectar a nova Release; edições portáteis precisam baixar manualmente. Atualizar fora de uma chamada.

## Hotfix RC6.3 — SFU em sala de teste com duas pessoas — 20/10/2026

- **Release RC/Testers anterior:** [v1.0.0-rc.6.3](https://github.com/magaskye/discordia/releases/tag/v1.0.0-rc.6.3), com instalador, portátil, `rc.yml` e somas SHA256. Validação automatizada e build Windows aprovados pelo [GitHub Actions privado](https://github.com/magaskye/discordia-build/actions/runs/39461774698). **Não significa homologação SFU em computadores reais.**
- Corrigido o `connect-src` do Electron para permitir **somente** o hostname SFU staging oficial; é uma causa provável do `Failed_to_fetch`, mas o resultado final exige teste Windows.
- A sala **Teste SFU RC6** prefere vídeo SFU a partir de duas pessoas, com validação de `framesEncoded/framesDecoded` e fallback de vídeo P2P/TURN, mantendo voz independente.
- Preserva Palco V2, SmartStream V2, presença e economia TURN opcional da RC6.2. Não altera Cloudflare TURN nem a edição Estável.
- O canal RC/Testers com atualizador ativo pode detectar o pré-lançamento. A edição portátil exige download; não há garantia de notificação push em todos os computadores.

## Hotfix RC6.2 de economia TURN — 20/10/2026

- **Release pública RC/Testers anterior:** [v1.0.0-rc.6.2](https://github.com/magaskye/discordia/releases/tag/v1.0.0-rc.6.2), validada e compilada pelo GitHub Actions privado (workflow 39381979631), com instalador, portátil, `rc.yml` e hash SHA256.
- Economia de dados opcional **somente quando o vídeo WebRTC está comprovadamente usando TURN**: jogo até 1,8 Mbps/45 FPS/900p, janela/tela até 1,25 Mbps/30 FPS/720p. Há uma opção para desativar, priorizando a qualidade máxima.
- **Não modifica o TURN hospedado na Cloudflare**, nem ICE/P2P direto ou áudio de chamadas. A economia real exige testes com a mesma audiência e tempo, observando `egressBytes` no analytics TURN.
- **SFU ainda não homologado** em quadros de vídeo entre vários clientes Windows; estágio experimental continua com fallback P2P/TURN.
- Release RC6.1 segue no histórico; a 1.0 estável não foi lançada.
- Atualização automática apenas para clientes com feed configurado e opção RC/Testers ativa. Portátil informa download manual.

## Situação do projeto — 20/10/2026

- **Discórdia Desktop 1.0.0-rc.6.4:** hotfix **publicado como pré-lançamento RC/Testers** em https://github.com/magaskye/discordia/releases/tag/v1.0.0-rc.6.4, contendo instalador e versão portátil Windows. O workflow privado de validação/empacotamento concluiu com sucesso. **Ainda falta homologação com usuários reais no Windows**.
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
