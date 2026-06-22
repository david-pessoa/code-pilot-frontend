# Code Pilot Frontend
Interface web do chatbot Code Pilot desenvolvida em React.js. O projeto tem o objetivo de desenvolver o Code Pilot, uma ferramenta de IA voltada para profissionais de TI.

## Problema
Profissionais de TI lidam diariamente com diferentes fontes de informação para resolver problemas técnicos: logs de erro, documentação, repositórios de código, tickets, configurações de ambiente e ferramentas de comunicação da equipe. Esse conhecimento costuma estar fragmentado, o que torna a identificação de falhas e a busca por soluções mais lenta e dependente de pesquisas manuais ou do apoio de profissionais mais experientes.

Esse cenário pode gerar impactos como:

- aumento do tempo necessário para diagnosticar erros;
- dificuldade no onboarding de novos desenvolvedores;
- dependência excessiva de membros mais experientes da equipe;
- documentação técnica pouco acessível ou desatualizada;
- perda de produtividade devido à alternância entre diversas ferramentas e fontes de consulta;
- risco de aplicar soluções genéricas que não são compatíveis com o projeto.

## Solução
O Code Pilot é uma interface de chatbot inteligente voltada para profissionais de TI, criada para centralizar o suporte técnico e tornar a resolução de problemas mais rápida, contextualizada e acessível.

A plataforma se conecta a uma API de LLM e permite que o usuário interaja com uma IA capaz de auxiliar em dúvidas técnicas, análise de erros, interpretação de logs, explicação de códigos e consulta de documentação relacionada ao projeto.

Com o Code Pilot, o profissional pode enviar perguntas, trechos de código, mensagens de erro ou logs e receber respostas estruturadas, com explicações sobre possíveis causas, sugestões de correção e orientações para validar a solução.

Entre os principais benefícios esperados estão:

- redução do tempo de diagnóstico e resolução de erros;
- centralização do conhecimento técnico do projeto;
- apoio ao aprendizado e ao onboarding de novos integrantes;
- maior autonomia para desenvolvedores e equipes de suporte;
- respostas mais contextualizadas para tecnologias, configurações e padrões internos;
- melhoria da produtividade no fluxo de desenvolvimento.

## Funcionalidades

- Cadastro de novos usuários
- Envio de mensagens com arquivo em anexo
- Envio de mensagens de voz
- Criar, renomear e apagar conversas
- Personalização:
  - Modo Claro/Escuro
  - Apelido para o chatbot
  - Definição de instruções personalizadas
  - Definição de características

## Tecnologias
- React 19
- Vite
- Font Awesome
- CSS Modules
- ESLint

## Arquitetura
Usuário ➜ Pages ➜ Components ➜ Context / Services ➜ API do Code Pilot ➜ LLM

Rotas principais:
- `/` e `/login`: tela de login
- `/register`: tela de cadastro
- `/chat/`: Nova conversa
- `/chat/:conversationId`: Conversa já existente

## Como rodar
Instalação:

```bash
npm install
```

Desenvolvimento:

```bash
npm run dev
```

Build de produção:

```bash
npm run build
```

Pré-visualização do build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## Variaveis de ambiente
Atualmente o frontend não usa variáveis de ambiente nem `API keys` no código.
Por isso, não há necessidade de `.env.example` neste estado do projeto.
Se o back-end for integrado depois, o arquivo pode passar a incluir, por exemplo:

```env
API_KEY=
JWT_SECRET=
JWT_EXPIRES_IN="2h"
```

## Decisoes tecnicas
- Vite foi escolhido para manter a inicialização rápida e o ciclo de desenvolvimento simples.
- React Router DOM organiza login, cadastro e área restrita sem dependência de um framework mais pesado.
- CSS Modules ajudam a isolar estilos por componente e reduzem colisões.
- Font Awesome acelera a inclusão de ícones consistentes na interface.
- O contexto de autenticação já existe como ponto de extensão, mas ainda está vazio, então a integração real com sessão/login precisa ser conectada ao back-end.
- Algumas partes da conversa ainda têm lógica de API marcada como comentário/TODO, então o frontend está pronto para evoluir, mas ainda não entrega o ciclo completo sozinho.

## Melhorias futuras
- Integrar autenticação real com back-end
- Persistir usuário logado e tokens de sessão
- Carregar histórico de conversas e mensagens da API
- Implementar envio de mensagens no `InputBar`
- Finalizar edição, exclusão e criação de conversas no drawer
- Exibir estados de carregamento, erro e sucesso
- Adicionar testes para rotas e componentes principais
- Criar arquivo `.env.example` quando houver URL de API ou segredo externo
