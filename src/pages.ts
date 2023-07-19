import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { OrphanageAttrs, OrphanageInfos } from './types';

const prisma = new PrismaClient();

export function Home(_req: Request, res: Response) {
  return res.render('index');
}

export async function allOrphanages(_req: Request, res: Response) {
  try {
    const orphanages: OrphanageAttrs[] = await prisma.orphanage.findMany();
    // return res.status(200).json({ orphanages });
    return res.render('orphanages', { orphanages });
  } catch (error) {
    console.log(error);
    return res.send('Erro no banco de dados! Erro para selecionar todos os orfanatos!');
  }
}

export async function orphanageDetails(req: Request, res: Response) {
  const id = req.query.id;

  try {
    const db: OrphanageAttrs[] = await prisma.orphanage.findMany({
      where: {
        id: String(id),
      },
    });

    if (db.length > 0) {
      const orphanage = db[0];
      orphanage.firstImage = orphanage.images[0];

      return res.render('orphanage', { orphanage });
    }
    return res.render('orphanage', { orphanage: {} });
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
  let images = ['/images/sem-imagem.jpg'];
  let weeks = true;
  console.log(fields, 'meus campos');

  //Validar se todos os campos estão preenchidos
  if (Object.values(fields).includes('')) {
    return res.send('Todos os campos devem ser preenchidos!');
  }

  if (fields.images) {
    images = typeof fields.images === 'string' ? [fields.images] : fields.images;
  }
  if (fields.open_on_weekends.includes('0')) weeks = false;
  if (fields.open_on_weekends.includes('Não')) weeks = false;

  try {
    //Save orphanage
    const newInfos = OrphanageInfos.parse({
      lat: fields.lat,
      lng: fields.lng,
      name: fields.name,
      about: fields.about,
      whatsapp: fields.whatsapp,
      images,
      instructions: fields.instructions,
      opening_hours: fields.opening_hours,
      open_on_weekends: weeks,
    });

    console.log(newInfos, 'newInfos');

    await prisma.orphanage.create({
      data: newInfos,
    });

    // return res.status(201).json({ message: 'Orfanato criado com sucesso!' });

    //Redirect
    return res.redirect('/orphanages');
  } catch (error) {
    console.log(error);
    return res.send('Erro no banco de dados! Erro para salvar um novo orfanato!');
  }
}
