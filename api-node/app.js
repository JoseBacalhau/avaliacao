const e = require('express');
const express = require('express');
const mysql = require('mysql2');
const connect = require('./conexao');
const AuthController = require('./auth')

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(Request, Response)=>{
    Response.setHeader("Access-Control-Allow-Origin","*");
    Response.header('Acess-Control-Allow-Methods','GET,PUT,POST,DELETE');    
    return connect.execSQLQuery('select * from login', Response);
});

app.get('/produtos',(Request, Response)=>{
    Response.setHeader("Access-Control-Allow-Origin","*");
    Response.header('Acess-Control-Allow-Methods','GET,PUT,POST,DELETE');    
    return connect.execSQLQuery('select * from produto', Response);
});

app.post('/cadastroproduto',(Request, Response)=>{

    Response.setHeader("Access-Control-Allow-Origin","*"); 
    Response.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into produto (nomeproduto, armazenamento, valor) value('"+Request.body.nomeproduto+"','"+Request.body.armazenamento+"','"+Request.body.valor+"')", Response);
});

app.post('/login',(Request, Response)=>{

    // const email = Request.body.email;
    // const senha = Request.body.senha;


    Response.setHeader("Access-Control-Allow-Origin","*");
    Response.header('Acess-Control-Allow-Methods','GET,PUT,POST,DELETE');
    const auth = AuthController.exec(Request)
    console.log(auth)
   // const auth = user.map(e => { 
    //     const [email] = e
    //     return email
    //  })
    // console.log(auth.toString())
//  if (user.email.length > 0) {
//             Response.json({msg:"Usuário logado com sucesso"})
//         }else{
//             Response.json({msg: "Conta não encontrada"});
//         }
});

app.post('/cadastro',(Request, Response)=>{

   

    Response.setHeader("Access-Control-Allow-Origin","*"); 
    Response.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into login (nome, email, senha) value('"+Request.body.nome+"','"+Request.body.email+"','"+Request.body.senha+"')", Response);
});

app.put('/produto/:id',(Request, Response)=>{
    Response.setHeader("Access-Control-Allow-Origin","*");
    Response.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("update produto set nomeproduto='"+Request.body.nomeproduto+"', armazenamento='"+Request.body.armazenamento+"', valor='"+Request.body.valor+"' where id="+Request.params.id, Response);
}); 

app.delete('/produto/:id',(Request, Response)=>{
    Response.setHeader("Access-Control-Allow-Origin","*");
    Response.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("delete from produto where id="+ Request.params.id, Response);
});

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {console.log('App Rodando!')});