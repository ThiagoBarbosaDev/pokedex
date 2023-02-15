# Processo Seletivo MaxMilhas - Pessoa Desenvolvedora Frontend - Desafio Técnico
Este repositório aborda os itens referentes ao desafio técnico da MaxMilhas para o cargo de Pessoa Desenvolvedora Front.

>[Clique aqui para acessar o deploy do projeto no navegador](pokedex-mocha-tau.vercel.app/)


## Dependências
* **Dependencias**: React, React Router, Redux, Redux Thunk, classnames, React Icons.

* **Dependencias de desenvolvimento**: ESLint, SASS.  
</br>

## Aplicação
Desenvolvida uma SPA(Single Page Application) consumindo a [PokeAPI](https://pokeapi.co/). 

O projeto tem duas páginas:
* **Pokedex:** transforma o retorno dos endpoints em cards em grid que podem ser filtrados pela pessoa usuária pelo tipo ou pelo nome do pokemon utilizando debounce a fim de otimizar performance.

* **Details:** Renderiza uma página com os detalhes do pokemon inspirados nos elementos visuais do primeiro pokemon. [Link da imagem usada como inspiração](https://i.imgur.com/ECSMRMX.png). 

As páginas foram implementadas com responsividade, utilizando css modules e sass na estilização.

Estado global utilizando redux onde as requisições são feitas por thunks.

Aplicação é testada pela React Testing Library.

**cobertura**:

<img src="https://i.imgur.com/Kvxo7xA.png" alt="cobertura do projeto"/>
</br>
</br>

## Instalação da aplicação

### Pré Requisitos:

* Node v16^
* Git

### Rodando a aplicação localmente
<br>

1. Abra o terminal e clone o repositório:

```
git clone https://github.com/ThiagoBarbosaDev/pokedex
```

<br>

2. Entre na pasta do repositório referente ao projeto

```
cd pokedex
```

<br>

3. Instale as dependência

```
npm install
```

<br>

4. Rode a aplicação

```
npm start
```

<br>

5. Acesse a página no navegador pelo endereço:

```
http://localhost:3000
```

<br>

### Rodando testes de integração

1. Abra o terminal na raíz do projeto
   
2. Digite o comando para rodar os testes de integração:

```
npm test
```

<br>

### Rodando cobertura dos testes

1. Abra o terminal na raíz do projeto
   
2. Digite o comando para rodar os testes de integração:
```
npm run test:coverage
```

