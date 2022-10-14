const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/t", function(req, res){
    res.json({
        "name": "nask",
        "location": "adkj"
    })
});

app.get("/", (req, res) => {
    res.send("Express");
  });

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;