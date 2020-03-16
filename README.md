# Consulta Sedex
Esta API foi desenvolvida utilizando Node.JS <br >
A mesma tem a finalidade de realizar consultas no Web Service dos Correrios e utilizando os parametros de tipo de serviço e CEP a fim de disponibilizar o prazo de entrega e demais informações.

## Para utilizar siga as estapas:

- Baixe o repositório, navegue para a raiz do projeto e execute o comando _npm install_ para baixar as dependências do projeto.
- Após baixar as dependências execute o comando _npm run dev_ para inicializar a aplicação
- Execute requições em JSON usando o metódo POST no endereço http://localhost:3000 conforme o exemplo: <br >
{ <br >
"nCdServico": "40010", <br >
"sCepOrigem": "03047000", <br >
"sCepDestino":"37800000" <br >
} <br >


#### Caso deseje utilizar outra porta para executar a aplicação, você poderá trocar o parâmetro PORT no arquivo .env
