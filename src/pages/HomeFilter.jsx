import UserList from "../components/UserList";

const HomeFilter = ({ name, house, onChange, onSubmit, filteredCharacters }) => {
  return (
    <>
      <h1>Harry Potter</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="name" className="label-name">Busca por personaje:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Escribe un nombre"
        />

        <label htmlFor="house" className="label-house">Selecciona la casa:</label>
        <select name="house" id="house" value={house} onChange={onChange}>
          <option value="gryffindor">Gryffindor</option>
          <option value="slytherin">Slytherin</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="hufflepuff">Hufflepuff</option>
        </select>
      </form>

      {filteredCharacters.length > 0 ? (
        <UserList characters={filteredCharacters} />
      ) : (
        <p>No hay ningún personaje que coincida con la palabra "{name}"</p>
      )}
    </>
  );
};

export default HomeFilter;
