import express from "express";
import cors from "cors";
import index from "./index";
import peopleListPost from "./people";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", index);

app.post("/people/", peopleListPost)

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
