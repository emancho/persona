import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/contact">Contact Me</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
}

export default NavBar;