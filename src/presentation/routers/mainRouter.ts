import express, {Express, Router} from "express";

const healthCheckRouter: Router = require("./healthcheck.ts");

const router: Router = express.Router();

router.use("/health", healthCheckRouter);

module.exports = router;
