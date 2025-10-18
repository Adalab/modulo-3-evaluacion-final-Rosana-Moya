const getCharacter = (house) => {
  return fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character, index) => {
        return {
          id: character.name + index,
          name: character.name,
          species: character.species,
          house: character.house,
          gender: character.gender,
          alive: character.alive,
          image: character.image || "https://placehold.co/600x400?text=HarryPotter",
        };
      });
      return cleanData;
    });
};

export default getCharacter;
