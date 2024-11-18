const getNameSurname = require("./utils/names.js");
const getHobbies = require("./utils/hobbies.js");

const getPerson = () => {
  const person = {
    ...getNameSurname("Angelo", "Gemelli"),
    ...getHobbies("videogames", "sport", "books"),
  };
  return person;
};

console.log(getPerson());
