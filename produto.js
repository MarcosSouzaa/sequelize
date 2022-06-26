/*SEGUNDO PASSO 

Criando o Modelo do Produto de uma tabela que existe ou vai existir no Banco de Dados
-----------------------------------------------------------------------------
Criar nosso modelo de monitoramento de dados, nosso objeto que vai fazer o monitoramento
das colunas numa tabela no banco de dados.
- Carregar a classe do Sequelize novamente:const Sequelize = require('sequelize')criada na db
- Depois crio uma const database e carrego o Objeto database que criei anteriormente (./db)
- E usando esse objeto database agente vai criar nosso modelo de produto e passa o nome 
do modelo e um objeto {} com o schema dele. Ou seja, o Schema que a gente faz o apeamento
das colunas que ele vai ter no banco, para as propriedades que ele vai ter no objeto local.
- Começamos com id:{  type: sequelize.INTEGER(inteiro)
- Próxima propriedade- nome:{
- Próxima propriedade- preço:Quando tenho apenas um tipo posso usar a constante sem o objeto 
quando não coloco allowNull, por padrão ele permite NULL
- No fim eu exporto a classe Produto criada: module.exports = Produto
*/

const Sequelize = require('sequelize') //carrega sequelize
const database = require('./db') //carrega banco de dados

const Produto = database.define('produto',{
    id:{
        type:Sequelize.INTEGER, //tipo class Sequelize INTEIRO
        autoIncrement: true, //Com auto incremento
        allowNull: false, //Não aceita valor nulo
        primaryKey: true // É chave primária 
    }, //, para incluir novo objeto
    nome: {
        type:Sequelize.STRING, //posso colocar o tamanho(150)ou deixar padrão 255
        allowNull: false
    },                       
    preco: Sequelize.DECIMAL, 
    descricao: Sequelize.STRING    
})

module.exports = Produto