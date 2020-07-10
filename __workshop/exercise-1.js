// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  // write some code
  let newPromise = new Promise((resolve, reject) => {
    const checkStrings = array.every((word) => {
      return typeof word === "string";
    });
    if (checkStrings) {
      const newWordArray = array.map((word) => {
        return word.toUpperCase();
      });
      resolve(newWordArray);
    } else {
      reject("Needs to be a string!");
    }
  });
  return newPromise;
};

const sortWords = (array) => {
  // write some code
  array.sort();
  return array;
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
