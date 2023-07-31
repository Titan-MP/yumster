const router = require("express").Router();

router.get("/", async (req, res) => {
    res.render("signup", { layout: "main" });
});

module.exports = router;
