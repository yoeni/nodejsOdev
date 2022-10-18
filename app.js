const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const middleware = function (req, res, next) {
  console.log("Yeni bir istek geldi.");
  next();
};

app.use(middleware);

app.get("/hello", middleware, function (req, res) {
  console.log("Merhaba, GET isteği attınız" );
  res.json("Merhaba, GET isteği attınız" );
});
app.post("/hello", middleware, function (req, res) {
  console.log("POST isteği için istek gönderildi" );
  res.json( "Merhaba, POST isteği attınız" );
});
app.put("/hello", middleware, function (req, res) {
  console.log("Merhaba, PUT isteği attınız");
  res.json("Merhaba, PUT isteği attınız");
});
app.delete("/hello", middleware, function (req, res) {
  console.log("Merhaba, DELETE isteği attınız");
  res.json("Merhaba, DELETE isteği attınız");
});

app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
});
