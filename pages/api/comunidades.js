import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
  if (request.method === 'POST') {
    // Full-access API token
    const TOKEN = '066771f857de28f90f2628f21756e5';
    const client = new SiteClient(TOKEN);

    // Validar os dados, antes de sair cadastrando
    const registroCriado = await client.items.create({
      itemType: '972661', // ID do Model de "Communities" criado pelo Dato
      ...request.body,
      // title: 'Comunidade de teste',
      // imageUrl: 'https://github.com/saranascimento.png',
      // creatorSlug: 'saranascimento',
    });

    response.json({
      dados: 'Algum dado qualquer',
      registroCriado: registroCriado,
    });

    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem!',
  });
}
