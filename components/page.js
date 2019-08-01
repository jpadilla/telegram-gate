import Link from 'next/link';
import LazyLoad from 'react-lazy-load';

function Page(props) {
  let linkAs =
    props.source === 'otro'
      ? `/el-otro/page/${props.number}`
      : `/page/${props.number}`;

  let linkHref =
    props.source === 'otro'
      ? `/el-otro/page/[pageNumber]`
      : `/page/[pageNumber]`;

  if (props.query) {
    linkAs = `${linkAs}?q=${props.query}`;
  }

  return (
    <div className="border border-gray-200 bg-gray-200 p-2 mb-4 page-container relative">
      <Link href={linkHref} as={linkAs}>
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
      <span className="block text-right text-sm text-gray-500 absolute bottom-0 right-0 p-4">
        {props.number}
      </span>
    </div>
  );
}

export default Page;
