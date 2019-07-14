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
    <form method="GET" onSubmit={handleSubmit}>
      <div className="flex items-center pt-4">
        <input
          name="q"
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full mr-3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          type="text"
          placeholder="Busca por términos en el chat de Telegram, ejemplo: twitter"
          defaultValue={props.query}
          ref={textInput}
        />
        <button
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}

export default Search;
