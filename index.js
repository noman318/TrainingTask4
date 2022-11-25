const express = require("express");
const expHbs = require("express-handlebars");
const port = 3000;
const app = express();

app.engine("handlebars", expHbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

const mainRoutes = require("./routes/mainRoutes");
const { json } = require("body-parser");
app.use("/", mainRoutes);

app.get("*", (req, res) => {
  res.status(404).render("notFound");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running ${port}`);
  }
});
