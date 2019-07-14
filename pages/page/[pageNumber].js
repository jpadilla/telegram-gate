import Head from 'next/head'
import { useRouter } from 'next/router';
import Header from '../../components/header';
import Page from '../../components/page';
import data from '../../static/chat.json';

function PageDetail() {
  const router = useRouter();
  let query = router.query.q;
  let pageNumber = router.query.pageNumber;

  if (!pageNumber) {
    return null;
  }

  let pageNumberInt = parseInt(router.query.pageNumber);
  let result = data.find((result) => result.page === pageNumberInt);

  return (
    <>
      <Head>
        <title>Página {result.page} | Las 889 páginas de Telegram entre Rosselló Nevares y sus allegados</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header query={query} />
      <div className="flex flex-col">
        <Page text={result.text} image={result.image} number={result.page} />
      </div>
    </>
  );
}

export default PageDetail;
