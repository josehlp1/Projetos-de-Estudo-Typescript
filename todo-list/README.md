# TODO-List

Este é um aplicativo de gerenciamento de tarefas construído com React. Você pode criar, editar e excluir tarefas, bem como atribuir níveis de dificuldade a cada tarefa.

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules

## ⚙️ Configuração e Instalação

Certifique-se de ter [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/) instalados em seu sistema.

### 1. Clonando o Repositório

```sh
git clone https://seu-repositorio-aqui.git
cd nome-do-seu-projeto
```
2. Instalando Dependências
Após clonar o repositório, navegue até o diretório do projeto e execute o seguinte comando para instalar todas as dependências necessárias:

```
npm install
```
3. Rodando o Projeto
Agora que todas as dependências estão instaladas, você pode iniciar o projeto com o comando:

```
npm start
```
Isso irá iniciar o servidor de desenvolvimento e abrir o aplicativo no navegador padrão.

###  📝 Funcionalidades
Adicionar Tarefa: Crie novas tarefas fornecendo um título e um nível de dificuldade.
Editar Tarefa: Edite tarefas existentes clicando no ícone de lápis ao lado de cada tarefa na lista.
Excluir Tarefa: Remova tarefas da lista clicando no ícone de lixeira ao lado de cada tarefa na lista.

🔧 Desenvolvimento
Estrutura do Projeto
O projeto segue uma estrutura padrão de projetos React:

```
src/
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Modal.tsx
│   ├── TaskForm.tsx
│   └── TaskList.tsx
├── interfaces/
│   └── Task.ts
├── App.module.css
└── App.tsx
```

### 🎨 Estilos

Os estilos são gerenciados usando CSS Modules, proporcionando uma maneira de usar estilos de escopo local, ajudando a evitar conflitos de nomes de classes e promovendo a reutilização de estilos.

Para adicionar novos estilos, crie um novo arquivo .css no diretório correspondente e importe-o no componente em que deseja usá-lo.

#### Feito por José Pellet =)