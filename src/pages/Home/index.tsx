import Button from 'components/Button';
import { Link } from 'react-router-dom';
import './styles.css'

const Home = () => {
  return (
    <div className="main-container">
      <h1>Desafio Github API</h1>
      <p>Bootcamp Spring React - DevSuperior</p>
      <Link to="/search">
        <Button text="Começar" />
      </Link>
    </div>
  );
};

export default Home;