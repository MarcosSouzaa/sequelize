/* PRIMEIRO PASSO
  - carregar a class Sequelize com o pacote 'sequelize'estanciar um sequelize que recebe new
  equelize.
  - Dentro do construtor da class new Sequelize(), passo as configuraçoes para conexão com
  nosso banco de dados.
  - passo nome no banco, nome do usuário, senha e options como objeto {dialect:'mysql' - 
  qual banco vou usar que faz     com que o js traduza os comandos para o mysql, 
    host:'localhost', - aonde está o banco, 
    port:3306 => caso o banco não esteja na porta padrão}
  - Depois de configurado, exportar no final do arquivo esse objeto criado
    module.exports = sequelize */   

const Sequelize = require('sequelize') 
const sequelize = new Sequelize('crud','root','@Mar624153#!',{
    host: 'localhost',
    dialect:'mysql',
    port: 3306  
}) 
 
 module.exports = sequelize
