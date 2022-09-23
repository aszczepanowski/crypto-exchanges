import { Link } from 'react-router-dom';
import Container from 'components/Container';

const Navbar = (): JSX.Element => {
  return (
    <nav className="menu absolute top-0 left-0 w-full z-10">
      <Container>
        <div className="flex items-center h-16 md:h-20">
          <Link to="/">
            <svg
              className="w-8 h-8 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 220 190"
            >
              <path d="M157.27 107.26a1 1 0 0 1 .82 1.42l-46.75 80.85a1 1 0 0 1-.82.47H81.94a.94.94 0 0 1-.81-1.42l46.75-80.85a.94.94 0 0 1 .81-.47Zm-27.79-23.17a1 1 0 0 1-.82-.47L81.13 1.42A.94.94 0 0 1 81.94 0h28.58a1 1 0 0 1 .82.47l47.53 82.2a.94.94 0 0 1-.81 1.42Z"></path>
              <path d="M135.13 1.42A.94.94 0 0 1 136 0h28.62a.93.93 0 0 1 .81.47l54.49 94.06a.93.93 0 0 1 0 .94l-54.49 94.06a.93.93 0 0 1-.81.47H136a.94.94 0 0 1-.82-1.42L189.34 95Zm-23.26 93.1a1 1 0 0 1 0 1l-54.74 94.01a1 1 0 0 1-1.65 0L.13 95.48a1 1 0 0 1 0-1L54.87.47a1 1 0 0 1 1.65 0Z"></path>
            </svg>
            <span className="sr-only">Homepage</span>
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
