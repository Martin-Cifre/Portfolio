/*rutas*/
const usersRoutes = require("./routes/usersRoutes.js");

const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use("/", usersRoutes);

app.listen(3030, () => {
  console.log("Servidor corriendo");
});