import { Router } from "express";

const castController = new Router();

castController.get("/", (req, res) => {
    res.end("Cast page.");
});

export default castController;  