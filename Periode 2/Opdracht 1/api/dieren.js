
const toegestaneDieren = [
  'hedgehog',
  'squirrel',
  'rabbit',
  'fox',
  'sparrow',
  'robin',
  'snail',
  'butterfly',
];

export default async function handler(verzoek, antwoord) {
  if (verzoek.method !== 'GET') {
    return antwoord.status(405).json({
      fout: 'Methode niet toegestaan',
    });
  }

  const naam = verzoek.query.name;

  if (!toegestaneDieren.includes(naam)) {
    return antwoord.status(400).json({
      fout: 'Ongeldige dierennaam',
    });
  }

  const apiKey = process.env.API_NINJAS_KEY;

  if (!apiKey) {
    return antwoord.status(500).json({
      fout: 'API-key ontbreekt',
    });
  }

  try {
    const reactie = await fetch(
      `https://api.api-ninjas.com/v1/animals?name=${encodeURIComponent(naam)}`,
      {
        headers: {
          'X-Api-Key': apiKey,
        },
      }
    );

    if (!reactie.ok) {
      return antwoord.status(reactie.status).json({
        fout: 'Dieren ophalen mislukt',
      });
    }

    const gegevens = await reactie.json();

    return antwoord.status(200).json(gegevens);
  } catch (fout) {
    console.error(fout);

    return antwoord.status(500).json({
      fout: 'Verbinding met API mislukt',
    });
  }
}
