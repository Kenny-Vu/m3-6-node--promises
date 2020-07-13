// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");
// Returns the current position of the ISS
const getIssPosition = () => {
  // write some code...
  return request("http://api.open-notify.org/iss-now.json")
    .then((response) => {
      let parsedResponse = JSON.parse(response);
      let newResponse = {
        lat: parsedResponse.iss_position.latitude,
        lng: parsedResponse.iss_position.longitude,
      };
      return newResponse;
    })
    .catch((err) => {
      return err;
    });
};

// getIssPosition().then((result) => {
//   console.log(result);
// });

module.exports = { getIssPosition };
