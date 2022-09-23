import { Link } from 'react-router-dom';

const DetailsBoxSkeleton = (): JSX.Element => {
  return (
    <div
      className="overflow-hidden bg-white text-slate-900 shadow sm:rounded-lg -mx-4 sm:mx-0"
      data-testid="details-box-skeleton"
    >
      <div className="flex px-4 py-5 sm:px-6">
        <div className="flex items-center">
          <div className="animate-[pulse_1s_ease-in-out_infinite] flex-shrink-0 w-7 h-7 bg-slate-200 rounded mr-3"></div>
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
            className="w-4 h-4 ml-1 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z"
            ></path>
          </svg>
        </Link>
      </div>
      <dl className="border-t border-slate-200 text-sm">
        <div className="odd:bg-slate-50 even:bg-white sm:grid sm:grid-cols-3 sm:gap-4 py-5 px-4 sm:px-6">
          <dt className="text-slate-500 font-medium">About</dt>
          <dd className="sm:col-span-2 mt-1 sm:mt-0">
            <div className="animate-[pulse_1s_ease-in-out_infinite] w-36 h-4 bg-slate-200 rounded"></div>
          </dd>
        </div>
        <div className="odd:bg-slate-50 even:bg-white sm:grid sm:grid-cols-3 sm:gap-4 py-5 px-4 sm:px-6">
          <dt className="text-slate-500 font-medium">Official website</dt>
          <dd className="sm:col-span-2 mt-1 sm:mt-0">
            <div className="animate-[pulse_1s_ease-in-out_infinite] w-36 h-4 bg-slate-200 rounded"></div>
          </dd>
        </div>
        <div className="odd:bg-slate-50 even:bg-white sm:grid sm:grid-cols-3 sm:gap-4 py-5 px-4 sm:px-6">
          <dt className="text-slate-500 font-medium">Year of establishment</dt>
          <dd className="sm:col-span-2 mt-1 sm:mt-0">
            <div className="animate-[pulse_1s_ease-in-out_infinite] w-36 h-4 bg-slate-200 rounded"></div>
          </dd>
        </div>
        <div className="odd:bg-slate-50 even:bg-white sm:grid sm:grid-cols-3 sm:gap-4 py-5 px-4 sm:px-6">
          <dt className="text-slate-500 font-medium">Country</dt>
          <dd className="sm:col-span-2 mt-1 sm:mt-0">
            <div className="animate-[pulse_1s_ease-in-out_infinite] w-36 h-4 bg-slate-200 rounded"></div>
          </dd>
        </div>
        <div className="odd:bg-slate-50 even:bg-white sm:grid sm:grid-cols-3 sm:gap-4 py-5 px-4 sm:px-6">
          <dt className="text-slate-500 font-medium">Trust Rank</dt>
          <dd className="sm:col-span-2 mt-1 sm:mt-0">
            <div className="animate-[pulse_1s_ease-in-out_infinite] w-36 h-4 bg-slate-200 rounded"></div>
          </dd>
        </div>
        <div className="odd:bg-slate-50 even:bg-white sm:grid sm:grid-cols-3 sm:gap-4 py-5 px-4 sm:px-6">
          <dt className="text-slate-500 font-medium">Trust Score</dt>
          <dd className="sm:col-span-2 mt-1 sm:mt-0">
            <div className="animate-[pulse_1s_ease-in-out_infinite] w-36 h-4 bg-slate-200 rounded"></div>
          </dd>
        </div>
        <div className="odd:bg-slate-50 even:bg-white sm:grid sm:grid-cols-3 sm:gap-4 py-5 px-4 sm:px-6">
          <dt className="text-slate-500 font-medium">Social media</dt>
          <dd className="sm:col-span-2 mt-1 sm:mt-0">
            <div className="animate-[pulse_1s_ease-in-out_infinite] w-36 h-4 bg-slate-200 rounded"></div>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default DetailsBoxSkeleton;
