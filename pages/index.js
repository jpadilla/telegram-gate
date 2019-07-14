import Head from 'next/head'
import Header from '../components/header';
import Page from '../components/page';
import data from '../static/chat.json';

function Home(props) {
  return (
    <>
      <Head>
        <title>Las 889 páginas de Telegram entre Rosselló Nevares y sus allegados</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header query={props.query} />
      <div className="flex flex-col">
        {props.query && props.results.length > 0 && (
          <p className="mb-4 text-gray-600">
            Se encontraron {props.results.length} página(s).
          </p>
        )}

        {props.query && props.results.length === 0 && (
          <p className="mb-4 text-gray-600">
            No se encontraron resultados para la búsqueda.
          </p>
        )}

        {props.results.map((result) => (
          <Page
            key={result.image}
            text={result.text}
            image={result.image}
            number={result.page}
            query={props.query}
          />
        ))}
      </div>
    </>
  );
}

Home.getInitialProps = async function(context) {
  let query = context.query.q;
  if (query) {
    let results = data.filter((result) => result.text.includes(query));
    return { results, query };
  }

  return { results: data, query: '' };
};

export default Home;
