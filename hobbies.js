const getHobbies = (...hobby) => {
  const activities = {
    hobbies: [],
  };
  activities.hobbies.forEach((hobby) => activities.hobbies.push(hobby));
  return activities;
};

module.exports(getHobbies);
