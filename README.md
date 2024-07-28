# Vue Movie App

Este projeto é um aplicativo de filmes desenvolvido com Vue.js que permite aos usuários explorar e visualizar informações sobre filmes. Utiliza a API do The Movie Database (TMDb) para buscar e exibir dados de filmes.

## Funcionalidades

- **Descubra Novos Filmes**: Navegue por filmes populares e mais bem avaliados.
- **Busca de Filmes**: Pesquise filmes por título usando um campo de busca.
- **Favoritos**: Adicione filmes aos favoritos e visualize-os em uma seção dedicada.

## Tecnologias Utilizadas

- **Vue.js**: Framework JavaScript para a construção de interfaces de usuário.
- **Vuex**: Gerenciamento de estado para a aplicação.
- **Vuetify**: Framework de componentes de Material Design para Vue.js.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **The Movie Database (TMDb) API**: API para obter informações sobre filmes.

## Configuração do Projeto

1. **Instalar Dependências**

   Primeiro, instale todas as dependências do projeto usando o Yarn:

   ```bash
   yarn install
Compilar e Recarregar para Desenvolvimento

Para iniciar o servidor de desenvolvimento e visualizar o projeto localmente, execute:

bash
Copiar código
yarn serve
O aplicativo estará disponível em http://localhost:8080 por padrão.

Compilar e Minificar para Produção

Para criar uma versão otimizada do projeto para produção, execute:

bash
Copiar código
yarn build
Os arquivos de produção serão gerados na pasta dist.

Linter e Correção de Arquivos

Para verificar e corrigir problemas de linting no código, utilize:

bash
Copiar código
yarn lint
Configuração da API
Este projeto utiliza a API do The Movie Database (TMDb) para obter informações sobre filmes. Para utilizar a API, você precisa de uma chave de API. Crie uma conta no TMDb e obtenha sua chave de API.

Adicione sua chave de API

Crie um arquivo .env na raiz do projeto.

Adicione sua chave de API ao arquivo .env:

env
Copiar código
VUE_APP_TMDB_API_KEY=your_api_key_here
Certifique-se de reiniciar o servidor de desenvolvimento após adicionar a chave de API.

Personalização e Configuração
Para personalizar ou configurar o aplicativo, você pode editar os seguintes arquivos:

src/App.vue: O componente raiz do aplicativo.
src/views/HomeView.vue: A visualização principal onde são exibidos os filmes.
src/components/MovieCard.vue: Componente que exibe informações sobre um filme individual.
Para mais informações sobre como personalizar a configuração do Vue CLI, consulte a Referência de Configuração.