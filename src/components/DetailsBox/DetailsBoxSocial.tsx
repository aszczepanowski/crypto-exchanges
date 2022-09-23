import type { DetailsBoxSocialProps } from './types';
import { getTwitterUrl } from './utils';

const DetailsBoxSocial = ({
  facebook,
  reddit,
  twitter
}: DetailsBoxSocialProps): JSX.Element | null => {
  const data = [
    {
      title: 'Facebook',
      url: facebook
    },
    {
      title: 'Reddit',
      url: reddit
    },
    {
      title: 'Twitter',
      url: getTwitterUrl(twitter)
    }
  ];
  // Filter out items with empty URLs
  // (we don't know what data the API will return)
  const items = data.filter((item) => item.url !== '');

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className="odd:bg-slate-50 even:bg-white sm:grid sm:grid-cols-3 sm:gap-4 py-5 px-4 sm:px-6"
      data-testid="social-media"
    >
      <dt className="text-slate-500 font-medium">Social media</dt>
      <dd className="sm:col-span-2 mt-1 sm:mt-0">
        <ul className="list-disc text-sm text-slate-400 space-y-2 pl-4">
          {items.map((item) => (
            <li key={item.title}>
              <span className="text-slate-900">
                <a
                  href={item.url}
                  className="hover:text-blue-500 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="social-media-link"
                >
                  {item.title}
                </a>
              </span>
            </li>
          ))}
        </ul>
      </dd>
    </div>
  );
};

export default DetailsBoxSocial;
