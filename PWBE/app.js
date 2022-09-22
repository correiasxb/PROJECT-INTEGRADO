/**********************
 * Autor: Bianca da Cruz Correia
 * Data: 15/09/2022
 * Versão: 1.0
 * Objetivo do projeto: Aprendendo e desenvolvendo API
 */
// /*
//                  Bibliotecas usadas para criar a API
//     
//      É a biblioteca que utilizamos para criar aplicações em NODE no formato de API
//         express - npm install express --save

//     É a biblioteca que usamos para manipular as permissões do protocolo HTTP
//         cors - npm install cors --save

//     É a blbioteca que usamos para manipular as permissÕes do protocolo HTTP
//         body-parser - npm install body-parser --save

//Primeiros passos- Importação da Biblioteca- EXPRESS(relacionada a API)
const express = require('express')

//Import da biblioteca do cors; a mesma serve para ter a manipulação de permissões do protocolo HTTP
const cors = require('cors')
//Import da biblioteca do bodyParser; a mesma tem a funcionalidade de manipular o corpo dos requirimentos do protcolo HTTP
const bodyParser = require('body-parser')

//Criando objeto que será responsavel nas especialidades nas funções do express
const app = express();

app.use((request,response,next) => {
    //Response- devolve dados
    response.header('Acess-Control-Allow-Origin', '*');
    response.header('Acess-Control-Allow-Methodos', 'GET, POST, PUT, DELETE, OPTIONS')
    
    app.use(cors());
    next();
});


