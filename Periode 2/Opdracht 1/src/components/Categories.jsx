
import { useEffect, useState } from 'react';

function Categories() {
  const [categorieen, setCategorieen] = useState([]);
  const [laden, setLaden] = useState(true);
  const [foutmelding, setFoutmelding] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function haalCategorieenOp() {
      try {
        const antwoord = await fetch('/categories.json', {
          signal: controller.signal,
        });

        if (!antwoord.ok) {
          throw new Error('Ophalen van categorieën mislukt.');
        }

        const gegevens = await antwoord.json();
        setCategorieen(gegevens);

      } catch (fout) {
        if (fout.name !== 'AbortError') {
          console.error(fout);
          setFoutmelding(
            'De categorieën konden niet worden geladen.'
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLaden(false);
        }
      }
    }

    haalCategorieenOp();

    return () => controller.abort();
  }, []);

  return (
    <section
      id="categories"
      className="categorieen row"
      aria-label="Bloemencategorieën"
    >
      {laden && <p>Categories loading...</p>}

      {foutmelding && (
        <p role="alert">{foutmelding}</p>
      )}

      {categorieen.map((categorie) => (
        <div
          key={categorie.id}
          className="col-12 col-sm-6 col-lg-4"
        >
          <article
            id={categorie.id}
            className="categorie-kaart h-100"
          >
            <h2>{categorie.title}</h2>
            <p>{categorie.description}</p>
          </article>
        </div>
      ))}
    </section>
  );
}

export default Categories;
