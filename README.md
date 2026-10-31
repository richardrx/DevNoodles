# DevNoodles

Landing page de vendas do **DevNoodles**, a plataforma para founders técnicos que já têm produto pronto e ainda não têm negócio.

O DevNoodles cobre a metade do trabalho que ninguém ensina a quem sabe programar: posicionamento, landing page que converte, onboarding, ativação e as métricas certas para cada fase. Esta página vende a turma fundadora.

## O que a página diz

A narrativa segue a ordem das seções:

1. **Hero.** "Seu produto está pronto, seu negócio ainda não existe." CTA de entrada na turma fundadora, com garantia de 7 dias.
2. **O problema.** O founder abre o analytics, vê 300 visitantes e 4 conversões, e já tentou tudo o que costuma tentar (cor do botão, headline, Discord, feedback no X).
3. **Os quatro problemas.** O padrão que apareceu em mais de 15 mentorias individuais com founders técnicos:
   - A landing page fala do produto e não da dor do cliente.
   - A marca parece hobby.
   - O produto não tem onboarding.
   - O founder mede MRR numa fase em que retenção de 30 dias é a métrica que importa.

A barra do topo anuncia a oferta fundadora: 50 vagas a R$197, com preço de R$497 no lançamento público.

## Status

| Parte | Estado |
| --- | --- |
| InfoBar, Header, Footer | Prontos |
| `HeroSection` | Pronta |
| `ProblemSection` (cards empilhados no scroll) | Pronta |
| `ProblemsSection` (os quatro problemas) | Pronta |
| Seções Plataforma, Depoimentos, Criador e Planos | Ainda não existem; os links do menu apontam para `#` |
| Botões de compra | Sem destino; nenhum checkout ligado ainda |

## Stack

- React 19
- Vite 6
- Tailwind CSS v4, via `@tailwindcss/vite` (sem `tailwind.config.js`; os tokens ficam em `src/index.css`)
- Fontes Archivo e Manrope, carregadas do Google Fonts em `index.html`

## Rodando local

Requer Node 18 ou superior.

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção em dist/
npm run preview   # serve o build localmente
```

O `.claude/launch.json` sobe o servidor de desenvolvimento na porta 5175.

## Estrutura

```
index.html              # entrada, metatags e fontes
public/                 # logo e ilustrações (.webp)
src/
  main.jsx              # bootstrap do React
  App.jsx               # ordem das seções da página
  index.css             # Tailwind e tokens de design
  components/
    Layout.jsx          # InfoBar + Header + Footer em volta das seções
    InfoBar.jsx         # barra da oferta fundadora
    HeroSection.jsx
    ProblemSection.jsx
    ProblemsSection.jsx
    Button.jsx
    Card.jsx
    index.js            # exports dos componentes
```

Para adicionar uma seção: crie o componente em `src/components/`, exporte em `index.js` e inclua na ordem certa em `App.jsx`.

## Tokens de design

Definidos em `src/index.css` e usados como classes do Tailwind (`bg-brand`, `text-nav-text` etc.):

| Token | Valor | Uso |
| --- | --- | --- |
| `brand` | `#faef77` | Amarelo de destaque, CTAs e marca-texto nas headlines |
| `brand-text` | `#44403b` | Texto sobre o amarelo |
| `nav-text` | `#79716b` | Texto secundário e navegação |
| `nav-border` | `#d6d3d1` | Bordas do header e botões secundários |
| `background` | `#fafaf9` | Fundo da página |

Os fundos alternados das seções e dos cards usam `#fbf9f2` e `#f1eddf`.

## Licença

Código proprietário. Todos os direitos reservados.
