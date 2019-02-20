const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();


// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

require("./routes/quoteRoutes")(app);

mongoose.connect("mongodb+srv://root:root@becode-taakq.mongodb.net/quotesDB",{useNewUrlParser: true});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running`);
});
