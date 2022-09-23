import Container from 'components/Container';
import type { HeadingProps } from './types';

const Heading = ({ title }: HeadingProps): JSX.Element => {
  return (
    <header className="relative bg-black text-white pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-16 lg:pb-20 overflow-hidden z-[1]">
      <img
        className="absolute -bottom-40 left-0 w-full min-w-[1280px] z-[-1]"
        src="/assets/images/shape.svg"
        alt="Background shape"
      />
      <Container>
        <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
      </Container>
    </header>
  );
};

export default Heading;
