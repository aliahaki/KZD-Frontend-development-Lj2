
import { useEffect, useState } from 'react';

const tuinDieren = [
  { zoeknaam: 'hedgehog', naam: 'Egel', icoon: '🦔' },
  { zoeknaam: 'squirrel', naam: 'Eekhoorn', icoon: '🐿️' },
  { zoeknaam: 'rabbit', naam: 'Konijn', icoon: '🐰' },
  { zoeknaam: 'fox', naam: 'Vos', icoon: '🦊' },
  { zoeknaam: 'sparrow', naam: 'Mus', icoon: '🐦' },
  { zoeknaam: 'robin', naam: 'Roodborstje', icoon: '🐦' },
  { zoeknaam: 'snail', naam: 'Slak', icoon: '🐌' },
  { zoeknaam: 'butterfly', naam: 'Vlinder', icoon: '🦋' },
];

function Animals() {
  const [dieren, setDieren] = useState([]);
  const [laden, setLaden] = useState(true);
  const [foutmelding, setFoutmelding] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function haalDierenOp() {
      try {
        const resultaten = await Promise.allSettled(
          tuinDieren.map(async (tuinDier) => {
            const antwoord = await fetch(
              `/api/dieren?name=${encodeURIComponent(tuinDier.zoeknaam)}`,
              { signal: controller.signal }
            );

            if (!antwoord.ok) {
              throw new Error('API-fout: ' + antwoord.status);
            }

            const gegevens = await antwoord.json();

            if (!Array.isArray(gegevens) || gegevens.length === 0) {
              throw new Error('Geen dier gevonden');
            }

            const gevondenDier =
              gegevens.find(
                (dier) =>
                  dier.name?.toLowerCase() === tuinDier.zoeknaam
              ) || gegevens[0];

            return {
              ...tuinDier,
              informatie: gevondenDier,
            };
          })
        );

        if (controller.signal.aborted) return;

        const gevondenDieren = resultaten
          .filter((resultaat) => resultaat.status === 'fulfilled')
          .map((resultaat) => resultaat.value);

        setDieren(gevondenDieren);

        if (gevondenDieren.length < 8) {
          setFoutmelding(
            'Niet alle dieren konden worden opgehaald.'
          );
        }
      } catch (fout) {
        if (fout.name !== 'AbortError') {
          console.error(fout);
          setFoutmelding('Dieren ophalen mislukt.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLaden(false);
        }
      }
    }

    haalDierenOp();

    return () => controller.abort();
  }, []);

  return (
    <section className="dieren-sectie" id="dieren">
      <h2>Animals in Our Garden</h2>

      <p className="dieren-beschrijving">
        Discover animals that can live in our garden.
      </p>

      {laden && <p>Animals loading...</p>}

      {foutmelding && (
        <p role="alert">{foutmelding}</p>
      )}

      <div className="row g-3">
        {dieren.map((dier) => (
          <div
            key={dier.zoeknaam}
            className="col-12 col-sm-6 col-lg-4"
          >
            <article className="dier-kaart h-100">
              <span className="dier-icoon">
                {dier.icoon}
              </span>

              <h3>{dier.naam}</h3>

              <p>
                <strong>Animal: </strong>
                {dier.informatie.name}
              </p>

              <p>
                <strong>Habitat: </strong>
                {dier.informatie.characteristics?.habitat || 'Unknown'}
              </p>

              <p>
                <strong>Diet: </strong>
                {dier.informatie.characteristics?.diet || 'Unknown'}
              </p>

              <p>
                <strong>Lifespan: </strong>
                {dier.informatie.characteristics?.lifespan || 'Unknown'}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Animals;
