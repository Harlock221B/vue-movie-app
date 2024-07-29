# Aplicativo de Filmes em Vue

Este projeto é um aplicativo de filmes desenvolvido com Vue.js que permite aos usuários explorar e visualizar informações sobre filmes. Ele usa a API do The Movie Database (TMDb) para buscar e exibir dados sobre filmes.

## Recursos

- **Descobrir Novos Filmes**: Navegue por filmes populares e mais bem avaliados.
- **Busca de Filmes**: Pesquise filmes pelo título usando um campo de pesquisa.
- **Favoritos**: Adicione filmes aos favoritos e visualize-os em uma seção dedicada.

## Tecnologias Utilizadas

- **Vue.js**: Framework JavaScript para construção de interfaces de usuário.
- **Vuex**: Gerenciamento de estado para a aplicação.
- **Vuetify**: Framework de componentes Material Design para Vue.js.
- **Font Awesome**: Biblioteca de icones.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **Jest**: Testes Unitarios.
- **API do The Movie Database (TMDb)**: API para obter informações sobre filmes.

## Configuração do Projeto

1. **Instalar Dependências**

    Primeiro, instale todas as dependências do projeto usando Yarn:

    ```bash
    yarn install
    ```

2. **Compilar e Recarregar para Desenvolvimento**

    Para iniciar o servidor de desenvolvimento e visualizar o projeto localmente, execute:

    ```bash
    yarn serve
    ```

    A aplicação estará disponível em http://localhost:8080 por padrão.

3. **Compilar e Minimizar para Produção**

    Para criar uma versão otimizada do projeto para produção, execute:

    ```bash
    yarn build
    ```

    Os arquivos de produção serão gerados na pasta dist.

4. **Linter e Correção de Arquivos**

    Para verificar e corrigir problemas de linting no código, use:

    ```bash
    yarn lint
    ```

## Configuração da API

Este projeto usa a API do The Movie Database (TMDb) para obter informações sobre filmes. Para usar a API, você precisará de uma chave de API. Crie uma conta no TMDb e obtenha sua chave de API.

1. **Adicionar Sua Chave de API**

    Crie um arquivo .env na raiz do projeto.

    Adicione sua chave de API ao arquivo .env:

    ```env
    VUE_APP_TMDB_API_KEY=sua_chave_de_api_aqui
    ```

    Certifique-se de reiniciar o servidor de desenvolvimento após adicionar a chave de API.

## Personalização e Configuração

Para personalizar ou configurar a aplicação, você pode editar os seguintes arquivos:

- src/App.vue: O componente raiz da aplicação.
- src/views/HomeView.vue: A visualização principal onde os filmes são exibidos.
- src/components/MovieCard.vue: Componente que exibe informações sobre um filme individual.

Para mais informações sobre como personalizar a configuração do Vue CLI, consulte a Referência de Configuração.
