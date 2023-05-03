import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch }) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <button>
        <Link to="/About">About</Link>
      </button>
      <button>
        <Link to="/Home">Home</Link>
      </button>
    </nav>
  );
};

export default Nav;
