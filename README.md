# Smart Academy 💪

Evoluindo o seu treino!

## Olá, seja bem-vindo! 🧑‍💻

Temos o prazer de apresentar a Smart Academy, a evolução da academia 📱

## O nosso Objetivo 👇

- Dar uma independência/auto gerenciamento ao usuário
- Monitoramento do fluxo da academia
- Facilitar a vida do usuário e da academia

## Principais Tecnologias Utilizadas no Front-End 💻

<h3 align="left">Linguagens Utilizadas no Front-End:</h3>

<p align="center">

<a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/></a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a>

</p>

<h3 align="left">Ferramentas Utilizadas:</h3>

<p align="center">

<a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a>

</p>

<h3 align="left">Bibliotecas do Front-End:</h3>

<p align="center">

<a href="https://echarts.apache.org" target="_blank" rel="noreferrer"> <img src="https://echarts.apache.org/en/images/echarts-footer-logo.png" alt="echarts" width="45" height="45"/> </a>

</p>

<h3 align="left">Prototipação:</h3>

<p align="center">

<a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a>

</p>

## Depedências ⌨️

No momento apenas existe a versão 1.0

# Configurando o Ambiente 📄

## Passo a Passo 🐢

1. Baixar NodeJS (Caso não tenha)

- Entre na aba procurar (🪟 + R) e coloque 'cmd' ou procure por Power Shell na aba de pesquisar
- Coloque node -v, se tiver instalado vai apoarecer a versão, caso não, baixe o NodeJS (https://nodejs.org/en/download)

2. Instalar o Angular (Caso não tenha)

- npm install -g @angular/cli

3. Após esses passos, basta abrir a aplicação com alguma IDE (De suas preferência)

- Dê um 'npm install' (baixar as dependências do projeto)
- Dê um 'ng serve' (rodar o projeto)

4. Após isso, instale o Tailwind, caso não consiga rodar o projeto sem o framework

- Dê via NPM no terminal: 'npm install -D tailwindcss postcss autoprefixer' e depois o 'npx tailwindcss init'

Configure o arquivo 'tailwind.config.js':

```json

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

Coloque no arquivo 'style.css':

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Rode normalmente o Angular novamente:

- Dê um 'ng serve'

## Pré-requisitos

- Node.js
- NPM ou Yarn

# Intalação (Dito anteriormente com mais detalhes acima)

## Clonar o repositório

git clone https://github.com/seu-usuario/seu-projeto.git

## Navegar para o diretório do projeto

cd seu-projeto

## Instalar dependências

npm install

## Estrutura de Diretórios

Explicação da estrutura de diretórios do projeto front-end.

```json

src/
|-- components/
|-- styles/
|-- views/
|-- assets/
|-- App.js
|-- index.js

```

# Uso

Demonstrar como iniciar o servidor de desenvolvimento, construir a aplicação e qualquer outro comando relevante.

## Iniciar servidor de desenvolvimento

- npm start

## Construir aplicação para produção

- npm run build
