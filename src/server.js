// Importar dependência
const express = require('express');
const path = require('path');
const pages = require('./pages');
const cors = require('cors');

// Iniciando lib express
const server = express();

server
  // Declarando onde estão os arquivos estáticos
  .use(cors())
  .use(express.static('public'))

  // Utilizar body da requisição
  .use(express.urlencoded({ extended: true }))

  // Configurar template engine
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  // Criar uma rota apenas
  // .get('/', (request, response) => {
  //   // console.log(path.join(__dirname, 'views', 'index.html'));
  //   // utilizando hbs não precisa utilizar esse path aqui embaixo
  //   // return response.sendFile(path.join(__dirname, 'views', 'index.html'));
  //   return response.render('index');
  // });

  // Criando as rotas utilizando meu arquivo pages
  .get('/', pages.index)
  .get('/orphanages', pages.orphanages)
  .get('/orphanage', pages.orphanage)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage);

// ligar o servidor na porta
server.listen(5500, () => console.log("Entre aqui: http://localhost:5500/"));

/* ATENÇÃO : 
O nodemon pode crashar, Erro: Error: listen EADDRINUSE :::5500
Significa que a porta já está em uso. Para resolver isso você pode 
encerrar o processo que está rodando nessa porta executando o comando :
  pkill node

Caso o Cache esteja cheio usar :
  npm cache clean --force

Depois pode apagar o node_modules e o package-lock.json e rodar :
  npm install
*/
