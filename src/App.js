import "../src/App.css"
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

const email = "clay@gmail.com";
const password = "123asd";

function App() {
  const Location = useLocation();
  const navigate = useNavigate()
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false)

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true)
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/")
  }, [access])

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert('¡No hay personajes con este ID!');
        }
      }
    );
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App">
      {Location.pathname !== '/' && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
