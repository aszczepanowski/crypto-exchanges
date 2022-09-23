import Container from 'components/Container';

const Footer = (): JSX.Element => {
  return (
    <footer className="mt-auto pt-6 pb-16">
      <Container>
        <div className="text-slate-400 text-center">
          Made with &hearts; for stakefish.{' '}
          <a
            className="hover:underline"
            href="https://github.com/aszczepanowski/crypto-exchanges"
            target="_blank"
            rel="noreferrer"
          >
            Source code
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
