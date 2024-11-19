const getHobbies = (...hobby) => {
  return {
    hobbies: [...hobby],
  };
};

module.exports = getHobbies;
