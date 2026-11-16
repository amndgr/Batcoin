# 🦇 Batcoin

Aplicativo de controle financeiro pessoal para casais. Reúne as contas fixas, parceladas e divididas dos dois em um só lugar, mostra o que vence em cada mês e o que ficou em atraso. O visual é personalizável: cada pessoa pode ajustar as cores e salvar os próprios temas.

## 📱 Instalação

O Batcoin é um PWA e roda direto no navegador, sem passar por loja de aplicativos.

1. Abra o endereço do GitHub Pages no celular.
2. No iPhone, use o Safari e toque em Compartilhar > Adicionar à Tela de Início. No Android, use o Chrome e toque em Instalar app.

Depois da primeira abertura, o aplicativo funciona sem internet.

## 💾 Dados

Os dados ficam salvos no aparelho (localStorage) e são sincronizados com uma planilha do Google Sheets por meio de um App da Web do Apps Script. A tela abre com os dados do aparelho e é atualizada quando a planilha responde. Sem internet, as alterações ficam no aparelho e são enviadas quando a conexão volta.

A planilha guarda os dados completos do app em uma aba oculta e reescreve as abas de cada pessoa a cada alteração, com os meses pagos marcados com ✓. Quando os dois aparelhos alteram dados ao mesmo tempo, as versões são combinadas item a item, sem perda de informação.

Para conectar um aparelho, gere o código de conexão na planilha (Gerenciar Contas > App Batcoin > Conectar o app) e cole-o no app em Tema > planilha. Também é possível baixar uma cópia de segurança em Tema > cópia de segurança, que gera um arquivo .json.

## 🗂️ Estrutura

| Arquivo | Função |
| --- | --- |
| `index.html`, `app.css`, `app.js` | Interface |
| `dados.js` | Leitura e gravação dos dados |
| `sw.js` | Service worker, responsável pelo funcionamento offline |
| `manifest.webmanifest`, `*.png` | Nome e ícones usados na instalação |

Os arquivos são gerados por um script de build a partir do protótipo. A cada alteração, a versão registrada no `sw.js` muda, e o aparelho baixa a atualização na abertura seguinte.

## 📝 Próximos passos

- Notificações de vencimento
