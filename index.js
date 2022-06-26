/*  FAZENDO O DELETE – LETRA D DO CRUD
1- Imagina que encontrei o produto que queria e quero o produto com ID 1
2- Quero DELETAR esse produto por algum motivo
3- vou usar o Model com o Id por parâmetro - findByPk(1) para pegar esse ítem
5 - Retorno o produto numa consulta normal:
const produtos = await Produto.findByPk(1)
6 - pego o produto que quero deletar e uso Model.destroy() ex:
 await produto.destroy() --> o await é pra garantir que ele só vai para linha
 debaixo depois que encerrar a operação.
 7- Se eu não quiser fazer uma consulta para depois fazer uma exclusão, posso
 fazer tudo numa única chamada com wait e passando where com um filtro do que quero.
*/

(async() => {
    const database = require('./db')
    const Produto = require('./produto')
    await database.sync()    
    
    // const produto = await Produto.findByPk(1)
    // console.log(produto)
    // await produto.destroy()

    await Produto.destroy({where:{
        preco:160
    }})
}) ()

