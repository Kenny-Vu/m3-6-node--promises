// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------
const { getIssPosition } = require("./exercise-3.1");
const { getPositionFromAddress } = require("./exercise-3.2");

// EUCLADIAN DISTANCE BETWEEN TWO POINTS
const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

//FIRST WAY BY WRITING NEW PROMISE
// const getDistanceFromIss = (address) => {
//   return new Promise((resolve, reject) => {
//     let pos1;
//     getIssPosition()
//       .then((data) => {
//         pos1 = data;
//       })
//       .then(() => getPositionFromAddress(address))
//       .then((pos2) => {
//         resolve(getDistance(pos1, pos2));
//       })
//       .catch((err) => console.log(err));
//   });
// };

//SECOND WAY WITHOUT WRITING A NEW PROMISE
const getDistanceFromIss = (address) => {
  return getIssPosition().then((pos1) => {
    return getPositionFromAddress(address).then((pos2) => {
      return getDistance(pos1, pos2);
    });
  });
};

getDistanceFromIss("5 Avenue Anatole France, 75007 Paris, France").then(
  (data) => {
    console.log(data);
  }
);
