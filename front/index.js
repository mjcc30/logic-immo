
const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
const URL_SERVER = "http://localhost:3000";
const PORT = "4000";
const hostname = "localhost";

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res, next) => {
  res.render("home");
});

app.get('/annonce', (req, res) => {
  fetch(URL_SERVER, {
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      res.render("annonce", { annonce: json });
    })
    .catch((err) => console.log(err));
});

app.get('/annonce/:id', (req, res) => {
  fetch(`${URL_SERVER}/${req.params.id}`)
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      res.render("annonce", { annonce: json });
    })
    .catch((err) => console.log(err));
});

app.get('/create', (req, res) => {
  res.render('addAnnonce');
})

app.listen(PORT, hostname, () => {
  console.log(`Front is running at http://${hostname}:${PORT}/`);
});
