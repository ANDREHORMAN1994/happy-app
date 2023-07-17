import express from 'express';
import hbs from 'express-hbs/lib/hbs.js';
import cors from 'cors';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Home, allOrphanages, orphanageDetails, createOrphanage, saveOrphanage } from './pages.js';

const server = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

server
  .use(cors())
  .engine('hbs', hbs.express4())
  .set('view engine', 'hbs')
  .use(express.urlencoded({ extended: true }))
  .use(express.static(join(__dirname, '../public'))) // Servir arquivos estáticos da pasta "public"
  .set('views', join(__dirname + '/views')) // Definir o diretório "views"

  .get('/', Home)
  .get('/orphanages', allOrphanages)
  .get('/orphanage', orphanageDetails)
  .get('/create-orphanage', createOrphanage)
  .post('/save-orphanage', saveOrphanage);

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
