import express from "express";

const PORT = 3001;
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});