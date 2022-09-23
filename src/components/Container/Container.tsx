import type { ContainerProps } from './types';

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">{children}</div>
  );
};

export default Container;
