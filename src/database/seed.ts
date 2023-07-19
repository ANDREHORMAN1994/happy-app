import dataBase from './db';

async function seedDatabase() {
  try {
    const db = await dataBase;
    await db.run(`
      INSERT INTO orphanages (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
      ) VALUES (
        '-7.334105419406578',
        '-35.33928519718761',
        'Lar das Crianças',
        'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
        '+55 83 12345-6789',
        'https://lunetas.com.br/wp-content/uploads/2018/10/qto-criancas-inesantich-ds-f-45.jpg.webp,https://i1.wp.com/arquidiocesedeteresina.org.br/wp-content/uploads/2019/10/acolhimento.jpg?fit=1600%2C1200&ssl=1,https://fundacaolasalle.org.br/wp-content/uploads/2018/08/Evento-TS-Guajuviras-2.jpeg',
        'Venha nos visitar e traga muito amor e paciência para dar.',
        'Horário de visitas Das 18h até 8h',
        '0'
      ),
      (
        '-7.3404096424018475',
        '-35.34554588918545',
        'Orfanato Feliz',
        'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
        '+55 83 12345-6789',
        'https://lunetas.com.br/wp-content/uploads/2018/10/qto-criancas-inesantich-ds-f-45.jpg.webp,https://i1.wp.com/arquidiocesedeteresina.org.br/wp-content/uploads/2019/10/acolhimento.jpg?fit=1600%2C1200&ssl=1,https://fundacaolasalle.org.br/wp-content/uploads/2018/08/Evento-TS-Guajuviras-2.jpeg',
        'Venha nos visitar e traga muito amor e paciência para dar.',
        'Horário de visitas Das 18h até 8h',
        '1'
      ),
      (
        '-7.322859827040445',
        '-35.34768996178746',
        'Casa da Alegria',
        'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
        '+55 83 12345-6789',
        'https://lunetas.com.br/wp-content/uploads/2018/10/qto-criancas-inesantich-ds-f-45.jpg.webp,https://i1.wp.com/arquidiocesedeteresina.org.br/wp-content/uploads/2019/10/acolhimento.jpg?fit=1600%2C1200&ssl=1,https://fundacaolasalle.org.br/wp-content/uploads/2018/08/Evento-TS-Guajuviras-2.jpeg',
        'Venha nos visitar e traga muito amor e paciência para dar.',
        'Horário de visitas Das 18h até 8h',
        '1'
      );
    `);

    console.log('Dados de exemplo inseridos no banco de dados.');
  } catch (error) {
    console.error('Erro ao inserir os dados no banco de dados:', error);
  }
}

seedDatabase();
