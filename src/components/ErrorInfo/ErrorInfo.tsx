import type { ErrorInfoProps } from './types';

const ErrorInfo = ({ title, description }: ErrorInfoProps): JSX.Element => {
  return (
    <div className="max-w-md sm:max-w-lg text-center pt-6 sm:pt-8 md:pt-10 lg:pt-12 mx-auto">
      <svg
        className="inline w-10 sm:w-12 h-10 sm:h-12 fill-transparent stroke-slate-300 mb-4"
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
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
      <h2 className="text-slate-400 sm:text-lg font-medium">{description}</h2>
    </div>
  );
};

export default ErrorInfo;
