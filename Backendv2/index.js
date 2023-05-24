import express from "express";
import ListOfProducts from "./routes/ProductsRoute.js";
import myDb from "./db/dbconfig.js"
import cors from "cors"

try {
  await myDb.authenticate();
  console.log('Database Connected...');
} catch (error) {
  console.error(error);
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
    await myDb.sync();
})();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(ListOfProducts);

var server = app.listen(3000, () => {
  //var host = server.address().address
  var port = server.address().port;

  // console.log("server is running at http://%s:%s", host, port);
  console.log("server is running at http://localhost:%s", port);
});
