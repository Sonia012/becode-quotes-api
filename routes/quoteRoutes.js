const mongoose = require(`mongoose`);
const Quote = require(`../models/Quote`);


module.exports = app => {

  app.get("/", (req, res) => {
    res.render('index');
  })

  app.get("/quotes", (req, res) => {
    console.log("fetching all quotes");

    mongoose.model(`Quote`).find((err, quotes) => {
      res.send(quotes)
    })
  })

  app.post("/quotes", (req, res) => {
    console.log("Posting a new quote")
    console.log(req.body)

    const quote = new Quote({
      quote: req.body.quote,
      author: req.body.author
    });
    quote.save((err, quote) => {
      if(err) {
        res.send(err)
      }
      res.send(200, quote)
    })
  })

  app.delete("/quotes/:quoteId", (req, res) => {
    console.log("deleting a quote");
    let id = req.params.quoteId;

    Quote.findOneAndDelete({
        _id: id
      },
      function(err) {
        if (err) {
          console.log(err);
          return res.sendStatus(5000);
        }
        console.log("quote deleted");
        res.sendStatus(200)
      })
  })

  app.put("/quotes/:quoteId", (req, res) => {
    console.log("updating a quote");
    let id = req.params.quoteId;

    Quote.findOneAndUpdate({
      _id: id
    }, {
      quote: req.body.quote,
      author: req.body.author
    }, (err, result) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      console.log("quote updated");
      res.sendStatus(200)
    })
  })

  app.get("/quotes/:quoteId", (req, res) => {
    console.log("getting a quote");
    let id = req.params.quoteId;

    Quote.find({
      _id: id
    }).then(result => {
      console.log(result);
      res.send(result);
    })
  })

}
