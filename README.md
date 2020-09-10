This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Desafio Concrete - Raywam Shinkoda

Implementação de uma aplicação client-side, que consulta a API do GitHub e mostra os repositórios de um determinado usuário.

### GitHub API v3 (RESTful)

Foi utilizada a versão 3, RESTful do Github:

* Detalhes de um usuário: https://api.github.com/users/{username}
* Repositórios de um usuário: https://api.github.com/users/{username}/repos

### Requisitos atendidos:

* Eu, como usuário, desejo buscar por um usuário do GitHub;
* Eu, como usuário, desejo ver os detalhes desse usuário que foi buscado (número de seguidores, número de seguidos, imagem do avatar, e-mail e bio);
* Eu, como usuário, desejo ver a listagem dos repositórios desse usuário que foi buscado, ordenados pelo número decrescente de estrelas;

### Definição de pronto

* O layout foi implementado de acordo com a especificação do Zeplin.io
* Nessa aplicação foi utilizada o framework `Angular 7`.
* Uso de rotas.

### Observações

* Foi utilizado design de fluxo de trabalho Git Flow, ao final do desenvolvimento foi realizado um pull request para mergear a branch master com a branch dev.
* A aplicação está hospedada na [Netlify](https://distracted-haibt-cbf0c6.netlify.app/).
* Utilização de guards em rotas.
* Implementação de lazy loading.
* Services para requests.

## Testes Unitários

* Foi utilizado o test runner Karma, já vinculado ao Angular 7.
* Todos os componentes possuem teste para verificar se é renderizado corretamente.
* Além de:

### Results.component.spec.ts

* Para verificação se a função `orderByStargazers` ordena os repositories descrecentemente.