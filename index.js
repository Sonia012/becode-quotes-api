const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const dotenv = require(`dotenv`);
dotenv.config()

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(`public`));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require("./routes/quoteRoutes")(app);

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running`);
});
