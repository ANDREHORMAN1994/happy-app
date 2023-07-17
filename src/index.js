import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { index, orphanages, orphanage, createOrphanage, saveOrphanage } from './pages.js';
import cors from 'cors';

const server = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

server
  .use(cors())
  .use(express.static(join(__dirname, '../public'))) // Servir arquivos estáticos da pasta "public"
  .use(express.urlencoded({ extended: true }))
  .set('views', join(__dirname, './views')) // Definir o diretório "views"
  .set('view engine', 'hbs')

  .get('/', index)
  // .get('/orphanages', orphanages)
  // .get('/orphanage', orphanage)
  // .get('/create-orphanage', createOrphanage)
  // .post('/save-orphanage', saveOrphanage);

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
