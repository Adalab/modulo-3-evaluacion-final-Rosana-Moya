import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterList = ({ characters = [] }) => {
  return (
    <ul className="character-list">
      {characters.map((character) => (
        <li key={character.id} className="character-card">
          <Link to={`/character/${character.id}`}>
            <img
              src={
                character.image
                  ? character.image
                  : "https://placehold.co/600x400?text=Harry+Potter"
              }
              alt={character.name}
            />
            <h3>{character.name}</h3>
            <p>{character.species}</p>
            <p>{character.house || "Sin casa"}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      species: PropTypes.string,
      house: PropTypes.string,
    })
  ),
};

CharacterList.defaultProps = {
  characters: [],
};

export default CharacterList;
