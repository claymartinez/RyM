import style from './SearchBar.module.css';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  }

  return (
    <div className={style.bar}>
      <input
        type="search"
        onChange={handleChange}
        value={id}
        className={style.searchInput}
      />
      <button className={style.searchButton} onClick={() => { onSearch(id); setId("") }}>
        Agregar
      </button>
    </div>
  );
}
export default SearchBar