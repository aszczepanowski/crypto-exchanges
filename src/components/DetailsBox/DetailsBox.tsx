import { Link } from 'react-router-dom';
import ScoreBar from 'components/ScoreBar';
import type { DetailsBoxProps } from './types';
import DetailsBoxSocial from './DetailsBoxSocial';

const DetailsBox = ({ data }: DetailsBoxProps): JSX.Element => {
  return (
    <div
      className="overflow-hidden bg-white text-slate-900 shadow sm:rounded-lg -mx-4 sm:mx-0"
      data-testid="details-box"
    >
      <div className="flex px-4 py-5 sm:px-6">
        <div className="flex items-center">
          <img
            className="w-7 h-7 rounded mr-3"
            src={data.image}
            alt={data.name}
          />
          <h2 className="xs:text-lg font-medium leading-6 mr-4">
            Exchange details
          </h2>
        </div>
        <Link
          className="inline-flex items-center font-medium text-blue-600 hover:text-blue-500 whitespace-nowrap ml-auto"
          to="/"
          data-testid="go-back-link"
        >
          Back to list
          <svg
            className="w-4 h-4 fill-current ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <dl className="border-t border-slate-200 text-sm">
        {!!data.description && (
          <div className="odd:bg-slate-50 even:bg-white sm:grid sm:grid-cols-3 sm:gap-4 py-5 px-4 sm:px-6">
            <dt className="text-slate-500 font-medium">About</dt>
            <dd className="leading-6 sm:col-span-2 mt-1 sm:mt-0">
              {data.description}
            </dd>
          </div>
        )}
        <div className="odd:bg-slate-50 even:bg-white sm:grid sm:grid-cols-3 sm:gap-4 py-5 px-4 sm:px-6">
          <dt className="text-slate-500 font-medium">Official website</dt>
          <dd className="sm:col-span-2 mt-1 sm:mt-0">
            <a
              className="hover:text-blue-500 hover:underline"
              href={data.url}
              target="_blank"
              rel="noreferrer"
              data-testid="visit-website"
            >
              {data.url}
            </a>
          </dd>
        </div>
        <div className="odd:bg-slate-50 even:bg-white sm:grid sm:grid-cols-3 sm:gap-4 py-5 px-4 sm:px-6">
          <dt className="text-slate-500 font-medium">Year of establishment</dt>
          <dd className="sm:col-span-2 mt-1 sm:mt-0">
            {data.year_established || '-'}
          </dd>
        </div>
        <div className="odd:bg-slate-50 even:bg-white sm:grid sm:grid-cols-3 sm:gap-4 py-5 px-4 sm:px-6">
          <dt className="text-slate-500 font-medium">Country</dt>
          <dd className="sm:col-span-2 mt-1 sm:mt-0">{data.country || '-'}</dd>
        </div>
        <div className="odd:bg-slate-50 even:bg-white sm:grid sm:grid-cols-3 sm:gap-4 py-5 px-4 sm:px-6">
          <dt className="text-slate-500 font-medium">Trust Rank</dt>
          <dd className="sm:col-span-2 mt-1 sm:mt-0">
            #{data.trust_score_rank}
          </dd>
        </div>
        <div className="odd:bg-slate-50 even:bg-white sm:grid sm:grid-cols-3 sm:gap-4 py-5 px-4 sm:px-6">
          <dt className="text-slate-500 font-medium">Trust Score</dt>
          <dd className="sm:col-span-2 mt-1 sm:mt-0">
            <div className="flex items-center">
              <div className="mr-3">{data.trust_score}</div>
              <ScoreBar value={data.trust_score} />
            </div>
          </dd>
        </div>
        <DetailsBoxSocial
          facebook={data.facebook_url}
          reddit={data.reddit_url}
          twitter={data.twitter_handle}
        />
      </dl>
    </div>
  );
};

export default DetailsBox;
