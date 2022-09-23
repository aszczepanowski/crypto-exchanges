import { Link } from 'react-router-dom';

const NotFound = (): JSX.Element => {
  return (
    <main
      className="relative flex items-center min-h-screen bg-black text-white z-[1] overflow-hidden"
      role="main"
      data-testid="not-found"
    >
      <img
        className="absolute w-full min-w-[1280px] opacity-50 z-[-1]"
        src="/assets/images/shape.svg"
        alt="Background shape"
      />
      <div className="max-w-md sm:max-w-xl py-12 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center">
          <svg
            className="inline w-10 sm:w-12 h-10 sm:h-12 fill-transparent stroke-blue-600 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            Sorry, the page can’t be found
          </h1>
          <div className="text-slate-400 sm:text-lg font-medium">
            The page you were looking for appears to have been moved, deleted or
            doesn't exist.
          </div>
          <Link
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 sm:text-lg text-white font-medium rounded-md py-3 px-8 mt-8"
            to="/"
            data-testid="home-button"
          >
            Go back home
            <svg
              className="w-4 h-4 ml-1 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
