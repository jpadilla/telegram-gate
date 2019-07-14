import Link from 'next/link';
import Search from './search';

function Header(props) {
  return (
    <div className="py-4 border-b border-gray-100 sm:sticky static top-0 bg-white" style={{boxShadow: '0 4px 3px -2px rgba(0, 0, 0, 0.1)'}}>
      <h1 className="text-3xl text-gray-900">
        <Link href="/index" as="/">
          <a>El chat de Telegram</a>
        </Link>
      </h1>
      <h2 className="text-xl text-gray-700">
        Las 889 páginas de Telegram entre Rosselló Nevares y sus allegados
      </h2>
      <h3 className="text-md text-gray-600">
        Documento original compartido por el{' '}
        <a
          className="underline"
          href="http://periodismoinvestigativo.com/2019/07/las-889-paginas-de-telegram-entre-rossello-nevares-y-sus-allegados/"
        >
          Centro de Periodismo Investigativo
        </a>
        .
      </h3>
      <h4 className="text-sm text-gray-500">
        Desarrollado por <a className="underline" href="https://jpadilla.com">José Padilla</a> (
        <a className="underline"  href="https://twitter.com/jpadilla_">@jpadilla_</a>)
      </h4>

      <Search query={props.query} />
    </div>
  );
}

export default Header;
