import Head from 'next/head';
import Header from '../components/header';
import Page from '../components/page';
import data from '../static/chat.json';

function Home(props) {
  return (
    <>
      <Header query={props.query} />
      <div className="flex flex-col">
        {props.query && props.results.length > 0 && (
          <p className="p-4 mb-4 bg-green-500 text-white font-medium">
            Se encontraron {props.results.length} página(s) para el término "{props.query}".
          </p>
        )}

        {props.query && props.results.length === 0 && (
          <p className="p-4 mb-4 bg-green-500 text-white font-medium">
            No se encontraron resultados para el término "{props.query}".
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
    let normalizedQuery = query.toLowerCase();
    let results = data.filter((result) =>
      result.text.includes(normalizedQuery)
    );

    return { results, query };
  }

  return { results: data, query: '' };
};

export default Home;
