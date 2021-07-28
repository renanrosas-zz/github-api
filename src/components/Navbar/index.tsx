import { Link } from 'react-router-dom';
import './styles.css'

const Navbar = () => {
  return (
    <nav className="navbar main-nav">
      <Link to="/">
        <h3>Github API</h3>
      </Link>
    </nav>
  );
};

export default Navbar;