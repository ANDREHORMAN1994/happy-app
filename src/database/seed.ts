import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    await prisma.orphanage.deleteMany({});
    await prisma.orphanage.createMany({
      data: [
        {
          lat: '-7.334105419406578',
          lng: '-35.33928519718761',
          name: 'Lar das Crianças',
          about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
          whatsapp: '+55 83 12345-6789',
          images: [
            'https://lunetas.com.br/wp-content/uploads/2018/10/qto-criancas-inesantich-ds-f-45.jpg.webp',
            'https://i1.wp.com/arquidiocesedeteresina.org.br/wp-content/uploads/2019/10/acolhimento.jpg?fit=1600%2C1200&ssl=1',
            'https://fundacaolasalle.org.br/wp-content/uploads/2018/08/Evento-TS-Guajuviras-2.jpeg',
          ],
          instructions: 'Venha nos visitar e traga muito amor e paciência para dar.',
          opening_hours: 'Horário de visitas Das 18h até 8h',
          open_on_weekends: false,
        },
        {
          lat: '-7.3404096424018475',
          lng: '-35.34554588918545',
          name: 'Orfanato Feliz',
          about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
          whatsapp: '+55 83 12345-6789',
          images: [
            'https://lunetas.com.br/wp-content/uploads/2018/10/qto-criancas-inesantich-ds-f-45.jpg.webp',
            'https://i1.wp.com/arquidiocesedeteresina.org.br/wp-content/uploads/2019/10/acolhimento.jpg?fit=1600%2C1200&ssl=1',
            'https://fundacaolasalle.org.br/wp-content/uploads/2018/08/Evento-TS-Guajuviras-2.jpeg',
          ],
          instructions: 'Venha nos visitar e traga muito amor e paciência para dar.',
          opening_hours: 'Horário de visitas Das 18h até 8h',
          open_on_weekends: true,
        },
        {
          lat: '-7.322859827040445',
          lng: '-35.34768996178746',
          name: 'Casa da Alegria',
          about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
          whatsapp: '+55 83 12345-6789',
          images: [
            'https://lunetas.com.br/wp-content/uploads/2018/10/qto-criancas-inesantich-ds-f-45.jpg.webp',
            'https://i1.wp.com/arquidiocesedeteresina.org.br/wp-content/uploads/2019/10/acolhimento.jpg?fit=1600%2C1200&ssl=1',
            'https://fundacaolasalle.org.br/wp-content/uploads/2018/08/Evento-TS-Guajuviras-2.jpeg',
          ],
          instructions: 'Venha nos visitar e traga muito amor e paciência para dar.',
          opening_hours: 'Horário de visitas Das 18h até 8h',
          open_on_weekends: true,
        },
      ],
    });

    console.log('Dados de exemplo inseridos no banco de dados.');
  } catch (error) {
    console.error('Erro ao inserir os dados no banco de dados:', error);
  }
}

seedDatabase();
