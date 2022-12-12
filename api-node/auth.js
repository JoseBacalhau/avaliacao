const mysql = require('mysql2');
const connect = require('./conexao');

class AuthController{
    static exec(Request){
    let Response
    return connect.execSQLQuery("select * from login where email ='"+Request.body.email+"' and senha ='"+Request.body.senha+"' ", Response)
    }
}

module.exports = AuthController