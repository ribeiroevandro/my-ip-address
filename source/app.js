import { router } from "./routes/index.js";
import express from "express";

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);

export { app };