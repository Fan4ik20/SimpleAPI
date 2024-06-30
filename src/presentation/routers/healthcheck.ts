import express, {Router, Request, Response} from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");

    res.json({"status": "OK"});
})

module.exports = router;
