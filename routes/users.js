const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ type: "get all users" });
});

router.post("/:id", (req, res) => {
    res.status(200).json({ type: "post a new user" });
});

router.delete("/:id", (req, res) => {
    res.status(200).json({ type: "delete a user", id: req.params.id });
});

router.get("/new", (req, res) => {
    res.status(200).json({ type: "new user form"});
});

router.get("/:id", (req, res) => {
    res.status(200).json({ 
        type: "get a single user",
        id: req.params.id    
    });
});



module.exports = router;
