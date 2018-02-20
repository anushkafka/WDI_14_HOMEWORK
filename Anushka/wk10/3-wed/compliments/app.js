let express = require("express");

let apiController = require("./apiController");
let app = express();
const PORT = 8080;

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => res.send("hellooooo"));
app.get("/api", apiController.index);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
