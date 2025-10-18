import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserList = ({ characters = [] }) => {
  return (
    <ul className="user-list">
      {characters.map((character) => (
        <li key={character.id} className="user-card">
          <Link
            to={`/character/${character.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={
                character.image
                  ? character.image
                  : "https://placehold.co/600x400?text=HarryPotter"
              }
              alt={character.name}
            />
            <h3>{character.name}</h3>
            <p>{character.species}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

UserList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      species: PropTypes.string,
    })
  ),
};

UserList.defaultProps = {
  characters: [],
};

export default UserList;
