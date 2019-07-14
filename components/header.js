import Head from 'next/head';
import Link from 'next/link';
import Search from './search';

const TITLE = 'El chat de Telegram';
const DESCRIPTION =
  'Las 889 páginas de Telegram entre Rosselló Nevares y sus allegados';
const URL = 'https://telegram-gate.jpadilla.com';
const SHARE_IMAGE_URL = `${URL}/static/share.png`;

function Header(props) {
  let headTitle = TITLE;

  if (props.headTitle) {
    headTitle = `${props.headTitle} | ${TITLE}`;
  }

  return (
    <>
      <Head>
        <title>{headTitle}</title>

        <meta name="title" content={headTitle} />
        <meta name="description" content={DESCRIPTION} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={headTitle} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={SHARE_IMAGE_URL} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={URL} />
        <meta property="twitter:title" content={headTitle} />
        <meta property="twitter:description" content={DESCRIPTION} />
        <meta property="twitter:image" content={SHARE_IMAGE_URL} />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        className="py-4 mb-4 border-b border-gray-100 sm:sticky static top-0 bg-white z-10"
        style={{ boxShadow: '0 4px 3px -2px rgba(0, 0, 0, 0.1)' }}
      >
        <h1 className="text-xl text-gray-900">
          <Link href="/index" as="/">
            <a>{TITLE}</a>
          </Link>
        </h1>
        <h2 className="text-md text-gray-700">{DESCRIPTION}</h2>
        <h3 className="text-sm text-gray-600">
          Documento original compartido por el{' '}
          <a
            className="underline"
            href="http://periodismoinvestigativo.com/2019/07/las-889-paginas-de-telegram-entre-rossello-nevares-y-sus-allegados/"
          >
            Centro de Periodismo Investigativo
          </a>
          .
        </h3>
        <h4 className="text-xs text-gray-500">
          Desarrollado por{' '}
          <a className="underline" href="https://twitter.com/jpadilla_">
            José Padilla
          </a>.{' '}
          Código abierto en{' '}
          <a
            className="underline"
            href="https://github.com/jpadilla/telegram-gate"
          >
            GitHub
          </a>
        </h4>

        <Search query={props.query} />
      </div>
    </>
  );
}

export default Header;
