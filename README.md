# Marvel App

## Descrição
O Marvel App é uma aplicação web que permite aos usuários explorar informações sobre personagens, quadrinhos e criadores do universo Marvel.

## Tecnologias Utilizadas
- React
- Styled Components
- React Router DOM
- Axios
- Jest (para testes)
- React Cookies
- CryptoJS para criar o hash

## Instalação
1. **Clone este repositório:**
    git clone https://github.com/allanrssantos/marvel.git

2. **Acesse o diretório do projeto**
    `cd marvel`

3. **Instale as dependências**
    `npm install`

## Executando a Aplicação
1. **Inicie a aplicação**
    `npm start`

2. **Acesse a aplicação no navegador**
    http://localhost:3000 

## Teste
1. **Execute os testes da aplicação**
    `npm test`

## Estrutura do Projeto

- `/public`: Contém arquivos estáticos.
- `/src`: Contém o código-fonte da aplicação.
- `/components`: Contém os componentes da aplicação.
- `/config`: Armazena configurações e arquivos de configuração da plicação.
- `/hooks`: Contém hooks personalizados utilizados na aplicação.
- `/interfaces`:  Este diretório contém definições de interfaces TypeScript que representam a estrutura e contratos de dados utilizados pelos hooks personalizados na aplicação.
- `/pages`: Cada arquivo nesta pasta representa uma página da aplicação.
- `/styles`: Armazena arquivos relacionados a estilos, como CSS ou arquivos de estilização.
- `/utils`: Contém utilitários ou funções auxiliares utilizadas em diferentes partes da aplicação.
- `/tests`: Contém os arquivos de testes.


## Hooks Personalizado

`useMarvelApiKeys`

### Uso no Componente:

Importe e utilize o hook `useMarvelApiKeys` no seu componente.

### Retorno

O hook retorna um objeto contendo as chaves de API da Marvel.

## Service

``FetchDatas``

O módulo `FetchDatas` é responsável por realizar chamadas à API da Marvel para obter dados relacionados a personagens, quadrinhos, criadores, ou qualquer outra entidade disponível na API. Ele utiliza a biblioteca axios para fazer requisições HTTP e CryptoJS para gerar o hash necessário para autenticação.

### Funções

`generateHash`

A função `generateHash` é responsável por gerar o hash MD5 necessário para autenticação na API da Marvel.

### Parâmetros

- `ts` (string): Um timestamp único para a requisição.
- `privateKey`privateKey (string): Chave privada fornecida pela Marvel API.
- `publicKey` (string): Chave pública fornecida pela Marvel API.

### Retorno

string: O hash MD5 gerado.

`FetchDatas`

A função `FetchDatas` realiza uma requisição à API da Marvel para obter dados específicos.

### Parâmetros

- `publicKey`publicKey (string): Chave pública para autenticação na API.
- `privateKey`privateKey (string): Chave privada para autenticação na API.
- `offset` (number): O número de resultados a serem ignorados no início da consulta (paginação).
- `route` (string): O endpoint específico da API para buscar dados.
- `search` (string, opcional): Parâmetro de pesquisa adicional, se necessário.

### Retorno

- `Promise`: Uma Promise que resolve com os resultados da requisição ou rejeita com um array vazio em caso de erro.

## Componente `HomePage`

`HomePage`

A página `HomePage` é responsável por exibir o formulário para inserção das chaves de API da Marvel.

### Componentes

`StyledHomePage`

O componente `StyledHomePage` é um componente estilizado utilizando a biblioteca styled-components para aplicar estilos específicos à página.

### Componentes Filhos

`KeyForm`

O componente `KeyForm` é responsável por exibir um formulário onde o usuário pode inserir suas chaves de API pública e privada para autenticação na Marvel API.

## KeyForm

O componente `KeyForm` é responsável por exibir um formulário onde o usuário pode inserir suas chaves de API pública e privada para autenticação na Marvel API.

### Props

O componente não aceita nenhuma propriedade.

### Estrutura

O componente possui a seguinte estrutura:

- `CardContainer`: Um contêiner estilizado para envolver o conteúdo do formulário.
- `HeaderText`: Um componente que exibe um texto de boas-vindas.
- `FormContainer`: Um contêiner estilizado para o formulário.
- `StyledForm`: Um formulário estilizado.
    - `StyledInput`: Componentes de entrada estilizados para a chave pública e privada.
    - `StyledButton`: Um botão estilizado para enviar o formulário.

### Estado

O componente mantém o estado local para as chaves de API pública e privada.

- `keys`: Um objeto contendo as chaves de API pública e privada.

### Hooks Utilizados
- `useState`: Utilizado para gerenciar o estado local das chaves de API.
- `useEffect`: Utilizado para observar mudanças nas chaves e armazená-las nos cookies.
- `useCookies`: Hook do pacote react-cookie para acessar e modificar os cookies.
- `useNavigate`: Hook do react-router-dom para navegação programática após o envio do formulário.

### Funções

- `handleClick`: Uma função que é chamada quando o botão é clicado, iniciando a navegação para a rota /personagens.
- `isFormValid`: Uma variável booleana que indica se o formulário é válido com chaves não vazias.
- `handleSubmit`: Uma função chamada ao enviar o formulário, que atualiza o estado local com as chaves inseridas.

## Componente `DataList`

O componente `DataList` é responsável por exibir uma lista de dados (personagens, quadrinhos, criadores) provenientes da Marvel API. Ele suporta funcionalidades como carregamento contínuo, pesquisa e exibição detalhada dos dados em um modal.

## Props

O componente aceita uma propriedade:

- `route`: Uma string indicando o tipo de dados a serem recuperados ("characters", "comics", "creators").

## Estado

O componente mantém os seguintes estados locais:

- `datas`: Um array que armazena os dados recuperados da API.
- `offset`: Um número que indica o índice a partir do qual os dados devem ser carregados na próxima iteração.
- `loading`: Um booleano que indica se os dados estão sendo carregados.
- `selectedData`: Um objeto que representa os dados detalhados selecionados pelo usuário.
- `isModalOpen`: Um booleano que indica se o modal está aberto ou fechado.
- `searchTerm`: Uma string que armazena o termo de pesquisa inserido pelo usuário.
- `noResults`: Um booleano que indica se a pesquisa não retornou resultados.

### Hooks Utilizados

- `useState`: Utilizado para gerenciar o estado local.
- `useEffect`: Utilizado para buscar dados, controlar o carregamento contínuo e adicionar/remover eventos de rolagem.
- `useMarvelApiKeys`: Hook personalizado para acessar as chaves de API da Marvel.

### Funções

- `handleCardClick`: Uma função chamada ao clicar em um card, que define os dados selecionados e abre o modal.
- `handleModalClose`: Uma função chamada ao fechar o modal, que redefine o estado para fechar o modal.
- `handleSearch`: Uma função chamada quando o usuário realiza uma pesquisa, que atualiza os dados de acordo com os resultados da pesquisa.
- `getSearchField`: Uma função auxiliar que retorna o campo de pesquisa correspondente com base na rota fornecida.

### Estrutura

O componente possui a seguinte estrutura:

- `SearchField`: Um componente de campo de pesquisa para permitir que o usuário pesquise dados.
- `LoadingIndicator`: Um indicador visual de que os dados estão sendo carregados.
- `Modal`: Um componente modal para exibir detalhes do item selecionado.
- `Card`: Um componente de card para exibir dados individuais.

## Componente `Card`

O componente `Card` é responsável por exibir informações resumidas de um item (personagem, quadrinho, criador) em um formato de cartão. Este componente é frequentemente utilizado dentro de listas para representar dados individuais.

### Props

O componente aceita as seguintes propriedades:

- `data`: Um objeto contendo as informações a serem exibidas no cartão. O formato do objeto depende do tipo de dados (personagem, quadrinho, criador).
- `route` (opcional): Uma string indicando o tipo de dados associado ao cartão (por exemplo, "characters", "comics", "creators").
- `onClick` (opcional): Uma função de retorno de chamada que é acionada quando o cartão é clicado.

### Estrutura

O componente possui a seguinte estrutura:

- `CardContainerWrapper`: Um componente de contêiner para aplicar estilos específicos ao cartão.
- `CardContainer`: O contêiner principal do cartão, responsável por exibir a imagem e o nome/título do item.
- `Image`: Uma imagem representando visualmente o item.
- `Name`: Um elemento de texto exibindo o nome/título do item.

Estilo

O componente utiliza os seguintes estilos:

- `CardContainerWrapper`: Aplica estilos específicos para envolver o cartão.
- `CardContainer`: Estiliza o contêiner principal do cartão.
- `Image`: Define estilos para a imagem do cartão.
- `Name`: Estiliza o texto do nome/título do item.

## Component `Modal`

O componente `Modal` é utilizado para exibir informações detalhadas sobre um item específico (personagem, quadrinho, criador) em um formato de modal.

### Props

O componente aceita as seguintes propriedades:

- `isOpen`: Um booleano indicando se o modal está aberto ou fechado.
- `onClose`: Uma função de retorno de chamada para fechar o modal.
- `data`: Um objeto contendo as informações detalhadas a serem exibidas no modal. O formato do objeto depende do tipo de dados (personagem, quadrinho, criador).

### Estrutura

O componente possui a seguinte estrutura:

- `ModalOverlay`: Um componente de sobreposição que cobre a tela quando o modal está aberto.
- `ModalContainer`: O contêiner principal do modal, responsável por exibir as informações detalhadas.
- `CloseButton`: Um botão para fechar o modal.

### Estilo

O componente utiliza os seguintes estilos:

- `ModalOverlay`: Define a sobreposição escura que cobre a tela quando o modal está aberto.
- `ModalContainer`: Estiliza o contêiner principal do modal.
- `CloseButton`: Estiliza o botão de fechamento do modal.

## Componente `SearchField`

O componente `SearchField` é utilizado para permitir aos usuários realizar pesquisas na aplicação. Ele consiste em uma caixa de entrada de texto onde os usuários podem inserir termos de pesquisa.

### Props

O componente aceita a seguinte propriedade:

- `onSearch`: Uma função de retorno de chamada que será acionada sempre que o termo de pesquisa for alterado. Recebe o termo de pesquisa como parâmetro.

### Estrutura

O componente possui a seguinte estrutura:

- `SearchContainer`: Um contêiner que centraliza o componente na horizontal e aplica um pequeno espaço superior.
- `SearchInput`: A caixa de entrada de texto onde os usuários inserem os termos de pesquisa. Possui um estilo que destaca a borda com a cor azul (#007bff), borda arredondada e preenchimento interno.

### Estilo

O componente utiliza os seguintes estilos:

- `SearchContainer`: Define a formatação geral do contêiner que envolve a caixa de entrada de pesquisa.
- `SearchInput`: Estiliza a caixa de entrada de pesquisa com uma borda destacada e bordas arredondadas.

### Estado

O componente possui um estado local searchTerm que rastreia os termos de pesquisa inseridos pelos usuários.

## Componente `LoadingIndicator`

O componente `LoadingIndicator` é responsável por exibir um indicador de carregamento na interface do usuário. Ele utiliza a biblioteca FontAwesome para renderizar um ícone de rotação (spinner) enquanto os dados estão sendo carregados.

### Estrutura

O componente possui a seguinte estrutura:

- `div`: Um contêiner flexível que centraliza o conteúdo na tela verticalmente e horizontalmente. A altura (height) é definida como 100vh para ocupar 100% da altura da viewport.
- `FontAwesomeIcon`: Componente que renderiza o ícone de rotação (spinner) da biblioteca FontAwesome. Ele aceita as seguintes propriedades:
    - `icon`: O ícone a ser exibido, neste caso, o ícone de spinner (faSpinner).
    - `spin`: A propriedade que ativa a animação de rotação no ícone.
    - `size`: O tamanho do ícone, neste caso, definido como "3x".
    - `color`: A cor do ícone, definida como a cor azul (#007bff).
    