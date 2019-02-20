fetch('https://becodequotes-api.herokuapp.com/quotes')
  .then((response) => {
    return response.json();
  })
  .catch((error) => {
    console.log(error);
  })
  .then((myJson) => {
    displayOnScreen(myJson)
  }
  );

  function displayOnScreen(myJson) {
  $("#quote").text(JSON.stringify(myJson.quote));
  $("#author").text(JSON.stringify(myJson.author));
}
