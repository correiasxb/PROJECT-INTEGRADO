/**********************
 * Nome: Bianca da Cruz Correia
 * Data: 15/09/2022
 * Versão: 1.0
 * Objetivo do projeto: Aprendendo e desenvolvendo API
 */

//Primeiros passos- Importação da Biblioteca- EXPRESS(relacionada a API)
const express = require('express')

//Import da biblioteca do cors; a mesma serve para ter a manipulação de permissões do protocolo HTTP
const cors = require('cors')
//Import da biblioteca do bodyParser; a mesma tem a funcionalidade de manipular o corpo dos requirimentos do protcolo HTTP
const bodyParser = require('body-parser')

const app = express();

app.use((request,response,next) => {
    responde.header('Acess-Control-Allow-Origin', '*');
    response.header('Acess-Control-Allow-Methodos', 'GET, POST, PUT, DELETE, OPTIONS')
    
    app.use(cors());
    next();
});