                                                                /* ===================== IMPORTS ====================== */
const router = require("express").Router();                     /* Import express.Router()                              */
const path = require("path");                                   /* Import path package                                  */
// const withAuth = require("../utils/auth");                   // TODO: Uncomment when withAuth is needed


                                                                /* ====================== ROUTES ====================== */
router.get("/", async (req, res) => {                           /* Render home.handlebars with main.handlebars layout   */
    try {
        res.render("dashboard", { layout: "main" })
    } 
    catch (err) {
        res.status(500).json(err);
    }
});


                                                                /* ===================== EXPORTS ====================== */



module.exports = router;

