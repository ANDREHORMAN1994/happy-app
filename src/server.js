const express = require('express');
const path = require('path');
const pages = require('./pages');
const cors = require('cors');

const server = express();

server
  .use(cors())
  .use(express.static(path.join('public'))) // Servir arquivos estáticos da pasta 'public'
  .use(express.urlencoded({ extended: true }))
  // .set('views', path.join(__dirname, 'views')) // Definir o diretório 'views'
  .set('views', path.join('dist')) // Definir o diretório 'views'
  .set('view engine', 'hbs')

  .get('/', pages.index)
  .get('/orphanages', pages.orphanages)
  .get('/orphanage', pages.orphanage)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage);

server.listen(5500, () => {
  console.log('Entre aqui:', 'http://localhost:5500/');
});

// /* ATENÇÃO : 
// O nodemon pode crashar, Erro: Error: listen EADDRINUSE :::5500
// Significa que a porta já está em uso. Para resolver isso você pode 
// encerrar o processo que está rodando nessa porta executando o comando :
//   pkill node

// Caso o Cache esteja cheio usar :
//   npm cache clean --force

// Depois pode apagar o node_modules e o package-lock.json e rodar :
//   npm install
// */
