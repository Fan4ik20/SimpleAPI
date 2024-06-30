import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env.PORT || 3000;

const mainRouter = require("./routers/mainRouter");

app.use("/", mainRouter);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
