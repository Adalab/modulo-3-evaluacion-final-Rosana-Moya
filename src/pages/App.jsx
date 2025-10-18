import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomeFilter from "./HomeFilter.jsx";
import DetailPage from "./CharacterDetail.jsx";
import NotFoundPage from "./NotFoundPages.jsx";
import getCharacter from "../services/api";
import "../styles/app.css";

const App = () => {
  const [name, setName] = useState("");
  const [house, setHouse] = useState("gryffindor");
  const [allCharacters, setAllCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    getCharacter(house.toLowerCase()).then((data) => {
      setAllCharacters(data);
    });
  }, [house]);

  useEffect(() => {
    const filtered = allCharacters.filter((char) =>
      char.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredCharacters(filtered);
  }, [name, allCharacters]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "house") {
      setHouse(value.toLowerCase());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomeFilter
            name={name}
            house={house}
            onChange={handleChange}
            onSubmit={handleSubmit}
            filteredCharacters={filteredCharacters}
          />
        }
      />
      <Route path="/character/:id" element={<DetailPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
