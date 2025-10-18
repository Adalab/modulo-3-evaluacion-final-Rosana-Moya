import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getCharacter from "../services/api";

const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    Promise.all([
      getCharacter("gryffindor"),
      getCharacter("slytherin"),
      getCharacter("ravenclaw"),
      getCharacter("hufflepuff"),
    ]).then((results) => {
      const allCharacters = results.flat();
      const found = allCharacters.find((char) => char.id === id);
      setCharacter(found);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p>Cargando personaje...</p>;

  if (!character) return <p>Personaje no encontrado</p>;

  return (
    <div className="character-detail">
      <button onClick={() => navigate(-1)}>Volver</button>
      <img
        src={
          character.image ||
          "https://placehold.co/600x400?text=HarryPotter"
        }
        alt={character.name}
      />
      <h2>{character.name}</h2>
      <p><strong>Casa:</strong> {character.house}</p>
      <p><strong>Especie:</strong> {character.species}</p>
      <p><strong>Estado:</strong> {character.alive ? "Vivo" : "Muerto"}</p>
      <p><strong>Género:</strong> {character.gender}</p>
      {character.alternate_names && character.alternate_names.length > 0 && (
        <>
          <p><strong>Nombres alternativos:</strong></p>
          <ul>
            {character.alternate_names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CharacterDetail;

