# Discórdia Desktop — histórico das Release Candidates

**Registro consolidado em 22/10/2026.** Este documento preserva as principais melhorias registradas nas notas oficiais das RCs públicas do Discórdia. Os instaladores das versões antigas podem ser retirados após a publicação e verificação da edição estável; o histórico permanece disponível.

| Release | Principal evolução |
| --- | --- |
| **1.0.0-rc.7.4** | Presença por sessão/dispositivo, atualização na inicialização com opção de adiar durante o uso, Palco e Estúdio de Temas refinados. |
| **1.0.0-rc.7.5** | Descoberta de transmissões SFU no Firebase RTDB, uso em salas autorizadas de servidores e renovação programada das publicações. |
| **1.0.0-rc.7.6** | Recuperação quando o SFU falha, preferência de rota de vídeo, tela cheia funcional e escolha aprimorada de jogos/monitores. |
| **1.0.0-rc.7.7** | Menus e painel do Palco adaptados a janelas menores, Minha prévia, captura e reprodução melhores no Windows 10. |
| **1.0.0-rc.7.8** | SFU exclusivo para vídeo quando selecionado explicitamente, sem fallback silencioso; reconexão seletiva e voz PeerJS isolada. |
| **1.0.0-rc.7.9** | Hotfix da inicialização do modo SFU exclusivo, corrigindo a ordem de avaliação de variáveis. |
| **1.0.0-rc.7.10** | Redução de cópias na captura de janelas Windows, ajustes por pressão de CPU e retenção das escolhas de áudio/microfone. |
| **1.0.0-rc.7.11** | Recepção SFU no modo Automático, novos anúncios acionando tentativas imediatamente e estatísticas de emissão/recepção. |
| **1.0.0-rc.7.12** | Correção do anúncio SFU ao RTDB, animação de conexão, recuperação sem derrubar a voz e diagnóstico de falhas mais claro. |
| **1.0.0-rc.7.13** | AudioWorklet para áudio seletivo de jogos, SmartStream V3, recuperação de nitidez e melhor distinção entre vídeo congelado e erro de conexão. |
| **1.0.0-rc.18** | Identidade visual e temas imersivos Lukelucca — Noite Mágica, Fuyuki — Survival Noir e CTR — Turbo Rush; Estúdio e formato .disca; créditos ao projeto e testers. |

## Evoluções importantes ao longo do desenvolvimento

**Rede e chamadas.** A arquitetura inclui P2P, TURN e SFU para vídeo em salas compatíveis, com a voz da chamada independente. O transporte efetivamente selecionado depende da rede, das permissões e da versão do aplicativo/Worker. O SFU de vídeo não equivale a transporte de áudio de jogos.

**Transmissão e áudio.** O desenvolvimento evoluiu de captura e diagnóstico de imagem para recuperação seletiva, redução do trabalho de processamento e melhorias no áudio capturado de aplicativos. Não há promessa de taxa de quadros fixa em qualquer computador.

**Comunidades e identidade.** Foram aprimorados presença, amigos, painéis do Palco, controles de áudio, estilos de servidor, Estúdio de Temas e importação de pacotes .disca. Os temas Resident Evil 9, DS3 e Sekiro foram retirados da biblioteca de fábrica na RC18.

**Atualização e distribuição.** As RCs públicas ofereceram instaladores e versões portáteis para Windows x64, manifests de atualizador e hashes SHA-256. A transição para a edição estável requer uma Release `v1.0.0` oficial com `latest.yml`, compatibilidade do canal RC e integridade de executáveis verificada. O instalador não implanta automaticamente regras Firebase.

## Transparência

Este histórico resume funcionalidades declaradas nas notas de lançamento; não deve ser confundido com resultados de testes individuais de todas as combinações de Windows, drivers e redes.

**Projeto criado por Carlos Eduardo Lopes, com apoio de ChatGPT e Gemini.**

Agradecimento aos testers: **@Fuyuki, @Lukelucca, @Skallzin, @Galaxy, @Ezereal e @Merakh**.

**Site:** https://magaskye.github.io/discordia/  
**Releases oficiais:** https://github.com/magaskye/discordia/releases
