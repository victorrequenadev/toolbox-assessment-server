import express from "express";
import cors from "cors";
import { filesRouter } from "./routes/files.js";

const PORT = 3001;
const app = express();

app.use(cors());

app.use("/files", filesRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

export default app;
