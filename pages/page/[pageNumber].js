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
      <Header headTitle={`Página ${result.page}`} query={query} />
      <div className="flex flex-col">
        <Page text={result.text} image={result.image} number={result.page} />
      </div>
    </>
  );
}

export default PageDetail;
