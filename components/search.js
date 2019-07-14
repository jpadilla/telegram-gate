import Router from 'next/router';

function Search(props) {
  let textInput = React.createRef();

  function handleSubmit(e) {
    e.preventDefault();
    Router.push({
      pathname: '/',
      query: { q: textInput.current.value }
    });
  }

  return (
    <form className="mb-4" method="GET" onSubmit={handleSubmit}>
      <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
        <input
          name="q"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Busca por términos en el chat de Telegram, ejemplo: twitter"
          defaultValue={props.query}
          ref={textInput}
        />
        <button
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}

export default Search;
