# NUXT 3 project CRUD
Javascript, css, html, middleware, nuxt3, vue3, cypress, store, server, mirageJs, Vite, vuethemask, VeeValidate, yup, vuetify, composablesApis, clearCode and more.

## **Tarefa**

Desenvolver um cadastro de pacientes, do qual possamos testar toda sua capacidade de criação de arquitetura, qualidade do código, validações, elaboração de layout e usabilidade.

- Obrigatoriamente para o desenvolvimento do front-end usar o framework Vue.js.
- Deve conter uma listagem de paciente com busca, do qual deve-se permitir a listagem, adição, edição, visualização e exclusão de cada um dos pacientes.
- Utilizar para chamadas de API *fake* as ferramentas Json Place Holder, Json Server ou Mirage JS.
- Login simplificado de usuários;
- Cadastro de novos pacientes, contendo os campos, respectivas validações e máscaras: `"*" obrigatório`
    - Foto do Paciente;
    - Nome Completo do Paciente*;
    - Nome Completo da Mãe*;
    - Data de Nascimento*;
    - CPF* (com validação);
    - CNS*(cartão nacional de saúde, com validação);
    - Endereço completo*;
- Implementar consultar de CEP e preenchimento de endereço automático de endereço utilizando a API do ViaCEP.

## **Requisitos**

- Utilizar algum padrão para commits;
- Realização de validações completas (utilizar biblioteca de validação, ex: *yup*);
- Componentização de estruturas reutilizáveis;
- Lógica;
- Qualidade do código;
- Criatividade;
- Estrutura no github;
- Soluções aplicadas;
- Tratativas aplicadas a formulários;
- Layout e usabilidade;

## **OBRIGATORIO**

1. Código limpo e manutenível.
2. Bom uso dos conceitos de Clean Code.
3. Bom uso do Git para controle de versão.

## Extras

1. Use o Vue.js 3 ou Nuxt3 como o framework JavaScript para a aplicação.
2. Pinia para gerenciamento de estado.
3. Vue Router para roteamento.
4. Interface com aplicação de animações e transições.
5. Testes de componente
6. VeeValidate

<br>
<br>

# Manual do dev
Instalar pacotes necessario para inicializar o projeto.
```bash
npm i
```
Para iniciar o projeto localmente com o padrão: <b>localhost:3000</b>.
```bash
npm run dev
```
Para gerar o projeto estatico SPA. SRR Off.
```bash
npm run build
```
Rodar o <b>Cypress</b> para testes.
```bash
npm run cypress
```

Para resetar o <b>node_modules</b> e <b>package-lock</b>.
```bash
npm run reset
```

<br>
<br>
<br>
<br>

Ultima att: Matheus Esturiao - Seg 08/05/2023.