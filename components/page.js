import Link from 'next/link';
import LazyLoad from 'react-lazy-load';

function Page(props) {
  let linkAs = `/page/${props.number}`;

  if (props.query) {
    linkAs = `${linkAs}?q=${props.query}`;
  }

  return (
    <div
      className="border border-g ray-300 p-4 mb-4"
      style={{
        display: 'block',
        maxWidth: '672px',
        maxHeight: '881px',
        minWidth: '359px',
        minHeight: '652px'
      }}
    >
      <Link href="/page/[pageNumber]" as={linkAs}>
        <a className="block">
          <LazyLoad debounce={false} offsetVertical={500}>
            <img
              className="block max-w-full h-auto"
              alt={props.text}
              title={props.text}
              src={`https://d355efj0j563i.cloudfront.net/images/${props.image}`}
            />
          </LazyLoad>
        </a>
      </Link>
      <span className="block text-right text-sm text-gray-500">
        {props.number}
      </span>
    </div>
  );
}

export default Page;
