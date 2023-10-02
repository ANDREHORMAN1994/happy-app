import express from 'express';
import hbs from 'express-hbs/lib/hbs.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { join, resolve } from 'path';
import pages from './pages';

dotenv.config();
const server = express();

const port = process.env.PORT || 5500;
const path = resolve('./');
const publicFolderPath = join(path, 'public');
const viewsFolderPath = join(publicFolderPath, 'views');

server
  .use(cors())
  .use(express.json())
  .engine('hbs', hbs.express4())
  .set('view engine', 'hbs')
  .use(express.urlencoded({ extended: true }))
  .use(express.static(publicFolderPath))
  .set('views', viewsFolderPath)

  .get('/', pages.Home)
  .get('/orphanages', pages.allOrphanages)
  .get('/orphanage', pages.orphanageDetails)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage);

server.listen(port, () => {
  console.log('Entre aqui:', 'http://localhost:5500/');
});

/* ATENÇÃO : 
O nodemon pode crashar: Erro: Error: listen EADDRINUSE :::5500

Significa que a porta já está em uso. Para resolver isso você pode 
encerrar o processo que está rodando nessa porta executando o comando:
  -> pkill node

Caso o Cache esteja cheio usar:
  -> npm cache clean --force

Depois pode apagar o node_modules e o package-lock.json e rodar:
  -> npm install

Execute o container:
  -> docker pull postgres
  -> docker run --name postgre-db -e POSTGRES_PASSWORD=happy -p 5432:5432 -d postgres
  -> docker ps -a

Execute o prisma:
  -> npx prisma migrate dev
  -> npx prisma studio

Rode a aplicação:
  -> npm run dev
*/
