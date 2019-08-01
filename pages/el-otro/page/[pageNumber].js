import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../../components/header';
import Page from '../../../components/page';
import data from '../../../static/chat-otro.json';

function PageDetail() {
  const router = useRouter();
  let query = router.query.q;
  let pageNumber = router.query.pageNumber;

  if (!pageNumber) {
    return null;
  }

  let currentPageNumber = parseInt(router.query.pageNumber);
  let previousPageNumber = null;
  let nextPageNumber = null;

  if (currentPageNumber > 1) {
    previousPageNumber = currentPageNumber - 1;
  }

  if (currentPageNumber < data.length) {
    nextPageNumber = currentPageNumber + 1;
  }

  let result = data.find((result) => result.page === currentPageNumber);

  return (
    <>
      <Header
        source="otro"
        headTitle={`Página ${result.page}`}
        query={query}
        sticky={false}
      />
      <div className="flex mb-4">
        <div className="flex-1 text-left text-gray-800 hover:text-gray-700 bg-gray-200 hover:bg-gray-300">
          <Link href="/el-otro/page/[pageNumber]" as={`/el-otro/page/${previousPageNumber}`}>
            <a className="block p-2">
              <div className="relative">
                <div
                  className="arrow-left absolute left-0"
                  style={{ top: '5px' }}
                />
                <div className="ml-4">
                  <span className="hidden sm:block">Ver anterior</span>
                  <span className="sm:hidden block">Anterior</span>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="flex-1 mx-1 text-center">
          <span className="block p-2 text-gray-800">
            Página {currentPageNumber}
          </span>
        </div>
        <div className="flex-1 text-right bg-gray-200 hover:bg-gray-300">
          <Link href="/el-otro/page/[pageNumber]" as={`/el-otro/page/${nextPageNumber}`}>
            <a className="block p-2">
              <div className="relative">
                <div className="mr-4">
                  <span className="hidden sm:block">Ver próxima</span>
                  <span className="sm:hidden block">Próxima</span>
                </div>
                <div
                  className="arrow-right absolute right-0"
                  style={{ top: '5px' }}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <Page
          source="otro"
          text={result.text}
          image={result.image}
          number={result.page}
        />
      </div>
    </>
  );
}

export default PageDetail;
