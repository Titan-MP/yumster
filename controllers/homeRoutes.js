                                                                /* ===================== IMPORTS ====================== */
const router = require("express").Router();                     /* Import express.Router()                              */
const path = require("path");                                   /* Import path package                                  */


                                                                /* ====================== ROUTES ====================== */
router.get("/", async (req, res) => {
    res.render("home", { layout: "main" });                     /* Render home.handlebars with main.handlebars layout   */
});


                                                                /* ===================== EXPORTS ====================== */
module.exports = router;
