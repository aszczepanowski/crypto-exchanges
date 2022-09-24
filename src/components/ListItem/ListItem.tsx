import clsx from 'clsx';
import { Link } from 'react-router-dom';
import ScoreBar from 'components/ScoreBar';
import type { ListItemProps } from './types';

const ListItem = ({ data, isLast }: ListItemProps): JSX.Element => {
  const id = data.trust_score_rank.toString().padStart(2, '0');

  return (
    // Important: nested <a> tags are semantically incorrect
    // <div> with onClick handlers doesn't allow us to the open page in a new tab
    <Link
      className={clsx('group block', isLast !== true && 'mb-5')}
      to={`/details/${data.id}`}
      data-testid="list-item"
    >
      <div className="bg-white text-slate-900 border border-white group-hover:border-slate-900 rounded-lg shadow py-5 md:py-3 px-4 cursor-pointer transition-colors">
        <div className="md:flex md:items-center">
          <div className="float-right md:float-none md:w-12 text-5xl md:text-4xl text-slate-300 group-hover:text-slate-900 font-bold md:mr-4 transition-colors">
            {id}
          </div>
          <img
            className="rounded-md mb-2 md:mb-0 md:mr-4"
            src={data.image}
            alt={data.name}
          />
          <div className="md:mr-12">
            <h2 className="text-md font-bold leading-7 mr-2">{data.name}</h2>
            <dl className="xs:flex text-sm text-slate-500">
              <div>
                <dt className="sr-only">Country</dt>
                <dd>{data.country || 'Unknown'}</dd>
              </div>
              <div>
                <dt className="sr-only">Official website</dt>
                <dd className="xs:flex xs:items-center mt-1 xs:mt-0">
                  <svg
                    className="hidden xs:block text-slate-400 fill-current mx-2"
                    width="2"
                    height="2"
                    aria-hidden="true"
                  >
                    <circle cx="1" cy="1" r="1"></circle>
                  </svg>
                  <a
                    className="hover:text-blue-500 hover:underline"
                    href={data.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    data-testid="visit-website"
                  >
                    Visit website
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex items-center mt-6 md:mt-0 ml-auto">
            <div className="text-sm font-bold mr-4">
              Trust Score: {data.trust_score}
            </div>
            <div className="ml-auto md:ml-0">
              <ScoreBar value={data.trust_score} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
