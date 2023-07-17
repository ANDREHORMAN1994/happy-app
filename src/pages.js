// ANTES ESTAVA UTILIZANDO O FAKEDATA PARA INSERÇÃO DE DADOS NA MINHA PÁGINA
// const orphanages = require('./database/fakedata');

// INSERINDO AGORA O SQL COMO BANCO DE DADOS
import dataBase from './database/db.js';
import saveOrphanageDB from './database/saveOrphanageDB.js';

export function Home(_request, response) {
  return response.render('index');
}

export async function allOrphanages(_request, response) {
  try {
    const db = await dataBase;
    const orphanages = await db.all('SELECT * FROM orphanages');
    return response.render('orphanages', { orphanages });
  } catch (error) {
    console.log(error);
    return response.send('Erro no banco de dados! Erro para selecionar todos os orfanatos!');
  }
}

export async function orphanageDetails(request, response) {
  const id = request.query.id;
  try {
    const db = await dataBase;
    const results = await db.all(
      `SELECT * FROM orphanages WHERE id = "${id}"`
    );

    console.log(results);
    if (results.length > 0) {
      const orphanage = results[0];
      orphanage.images = orphanage.images ? orphanage.images.split(',') : ['/images/sem-imagem.jpg'];
      orphanage.firstImage = orphanage.images[0];
  
      orphanage.open_on_weekends === '0' || orphanage.open_on_weekends === 'Não'
        ? (orphanage.open_on_weekends = false)
        : (orphanage.open_on_weekends = true);
  
      return response.render('orphanage', { orphanage });
    }
  } catch (error) {
    console.log(error);
    return response.send('Erro no banco de dados! Erro para selecionar um orfanato pelo ID!');
  }
}

export function createOrphanage(_req, res) {
  return res.render('create-orphanage');
}

export async function saveOrphanage(req, res) {
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
