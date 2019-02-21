fetch('https://becodequotes-api.herokuapp.com/quotes')
  .then(function(response) {
    return response.json();
  })
  .catch(function(error) {
    console.log(error);
  })
  .then(function(myJson) {
    console.log(myJson)
    // displayOnScreen(myJson)
  });

// function displayOnScreen(myJson) {
//   $("#quote").text(JSON.stringify(myJson.quote));
//   $("#author").text(JSON.stringify(myJson.author));
// }
