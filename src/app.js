
import express, { json } from "express";
import routes from "../src/routes/index.js";
const app = express()

import cors from "cors";
app.use(cors());

app.use(express.json())
routes(app);

export default app;