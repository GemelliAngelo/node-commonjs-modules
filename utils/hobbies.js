const getHobbies = (...hobby) => {
  const activities = {
    hobbies: [],
  };
  hobby.forEach((hobby) => {
    activities.hobbies.push(hobby);
  });
  return activities;
};

module.exports = getHobbies;
