# 🦇 Batcoin

Aplicativo de controle financeiro pessoal para casais. Reúne as contas fixas, parceladas e divididas dos dois em um só lugar, mostra o que vence em cada mês e o que ficou em atraso. O visual é personalizável: cada pessoa pode ajustar as cores e salvar os próprios temas.

## 📱 Instalação

O Batcoin é um PWA e roda direto no navegador, sem passar por loja de aplicativos.

1. Abra o endereço do GitHub Pages no celular.
2. No iPhone, use o Safari e toque em Compartilhar > Adicionar à Tela de Início. No Android, use o Chrome e toque em Instalar app.

Depois da primeira abertura, o aplicativo funciona sem internet.

## 💾 Dados

Nesta versão, os dados ficam salvos apenas no aparelho (localStorage), e cada celular mantém os seus. Para fazer uma cópia de segurança, acesse Tema > cópia de segurança, que gera um arquivo .json.

A próxima etapa é a sincronização com uma planilha do Google Sheets via Apps Script, para que os dois aparelhos compartilhem as mesmas informações.

## 🗂️ Estrutura

| Arquivo | Função |
| --- | --- |
| `index.html`, `app.css`, `app.js` | Interface |
| `dados.js` | Leitura e gravação dos dados |
| `sw.js` | Service worker, responsável pelo funcionamento offline |
| `manifest.webmanifest`, `*.png` | Nome e ícones usados na instalação |

Os arquivos são gerados por um script de build a partir do protótipo. A cada alteração, a versão registrada no `sw.js` muda, e o aparelho baixa a atualização na abertura seguinte.

## 📝 Próximos passos

- Sincronização com o Google Sheets
- Notificações de vencimento
