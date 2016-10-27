## Observações

Algumas anotações a respeito do estudo com React.

### Executando o servidor localmente

- `npm start`

### Usando

- React
- JSX
- Webpack
- React Router

### Setup

- `npm init`
- `npm install --save react react-dom react-router`
- `npm install --save-dev babel-core babel-loader babel-preset-react`
- `npm install --save-dev webpack http-server webpack-dev-server`
- `npm install webpack -g`

### Explicações

- O propósito do React é para a renderização de componentes e gerenciamento de estados.

- React !== Angular

- Por possuir um Virtual DOM a renderização dos componentes é mais rápida quando comparado com o Angular.

- Iremos utilizar o **webpack** para juntar todos os módulos, compilar o CSS e fazer mais algumas coisas.

- Instale o webpack globalmente, será útil mais pra frente.

- Dentro do arquivo index.html irá conter o local onde a aplicaçào será renderizada e a chamada pro meu bundle.js

- `webpack -w` ficará observando mudanças no arquivo App.js e irá compilar automaticamente as novas entradas.

- Dentro da pasta `components` existem os componentes da minha aplicação. O nome de cada arquivo, é o nome do componente (boas práticas).

- Observe o arquivo **HelloWorld.js**. Todo component React contém esta estrutura, onde você: importa a lib, cria uma classe onde irá construir o component e exporta esse componente para importar em outra parte do projeto. (importado no App.js)

- A função **render** que está dentro da classe do componente é responsável por transformar o código JSX que estiver ali dentro e renderizar na tela.

- A função **render** aceita dois argumentos, um elemento virtual e um nó no DOM real.

- Cada componente do React, possui uma função chamada `getInitialState` que será invocada assim que o componente for inicializado.

-

-----

### Virtual DOM

Assim como existe o DOM (sem ser virtual) que representa a árvore de elementos e componentes HTML o React possui o seu Virtual DOM que nada mais é do que uma árvore javascript de elementos e componentes React.

O React realiza o `diff` do virtual DOM com o DOM do browser e só aplica a diferença. Um elemento no virtual DOM apenas existe na memória do javascript, para que ele seja exibido em tela, é necessário renderiza-lo.

### JSX

É uma técnica para criar elementos no React, ele facilita a forma de escrita e leitura de elementos e componentes. O código que você escrever utilizando JSX será transformado em JavaScript antes de ser executado no navegador.

##### com jsx

```html
<h1>Hello World</h1>
```

##### sem jsx
```javascript
React.createElement('h1', null, 'Hello World');
```

### Props

As props são passadas como argumentos para um componente e se parecem com atributos HTML. Um componente nunca deve alterar suas props. Se os dados são mutáveis, utilize o objeto de **Estado**.

> observe o arquivo **Photo.js** que contém o exemplo de utilização das props.

### Estado

O objeto de estado é interno de um determinado componente, contém os dados que podem ser alterados com o tempo.

> observe o arquivo **LikePhoto.js** que contém o exemplo de utilização do objeto de estado.

### Composição

Composição é a combinação de pequenos componentes para formar algo maior.

> observe o arquivo **PhotoGallery.js** que contém o exemplo de utilização de composição
