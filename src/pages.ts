// ANTES ESTAVA UTILIZANDO O FAKEDATA PARA INSERÇÃO DE DADOS NA MINHA PÁGINA
// const orphanages = require('./database/fakedata');

// INSERINDO AGORA O SQL COMO BANCO DE DADOS
import { Request, Response } from 'express';
import dataBase from './database/db';
import saveOrphanageDB from './database/saveOrphanageDB';
import { OrphanageInfos } from 'sqlite-async';

export function Home(_req: Request, res: Response) {
  return res.render('index');
}

export async function allOrphanages(_req: Request, res: Response) {
  try {
    const db = await dataBase;
    const orphanages = await db.all('SELECT * FROM orphanages');
    return res.render('orphanages', { orphanages });
  } catch (error) {
    console.log(error);
    return res.send('Erro no banco de dados! Erro para selecionar todos os orfanatos!');
  }
}

export async function orphanageDetails(req: Request, res: Response) {
  const id = req.query.id;
  try {
    const db = await dataBase;
    const results: OrphanageInfos[] = await db.all(
      `SELECT * FROM orphanages WHERE id = "${id}"`
    );

    console.log(results);
    if (results.length > 0) {
      const orphanage = results[0];
      orphanage.images = orphanage.images && typeof orphanage.images === 'string' ?
        orphanage.images.split(',') : ['/images/sem-imagem.jpg'];
      orphanage.firstImage = orphanage.images[0];
  
      orphanage.open_on_weekends === '0' || orphanage.open_on_weekends === 'Não'
        ? (orphanage.open_on_weekends = false)
        : (orphanage.open_on_weekends = true);
  
      return res.render('orphanage', { orphanage });
    }
  } catch (error) {
    console.log(error);
    return res.send('Erro no banco de dados! Erro para selecionar um orfanato pelo ID!');
  }
}

export function createOrphanage(_req: Request, res: Response) {
  return res.render('create-orphanage');
}

export async function saveOrphanage(req: Request, res: Response) {
  const fields = req.body;
  console.log(fields);

  //Validar se todos os campos estão preenchidos
  if (Object.values(fields).includes('')) {
    return res.send('Todos os campos devem ser preenchidos!');
  }

  try {
    //Save orphanage
    const db = await dataBase;
    console.log(db, fields)
    await saveOrphanageDB(db, {
      lat: fields.lat,
      lng: fields.lng,
      name: fields.name,
      about: fields.about,
      whatsapp: fields.whatsapp,
      images: fields.images.toString(),
      instructions: fields.instructions,
      opening_hours: fields.opening_hours,
      open_on_weekends: fields.open_on_weekends,
    });

    //Redirect
    return res.redirect('/orphanages');
  } catch (error) {
    console.log(error);
    return res.send('Erro no banco de dados! Erro para salvar um novo orfanato!');
  }
}
