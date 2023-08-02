                                                                /* ===================== IMPORTS ====================== */
const router = require("express").Router();                     /* Import express.Router()                              */
// const withAuth = require("../utils/auth");                   // TODO: Uncomment when withAuth is needed


                                                                /* ====================== ROUTES ====================== */
router.get("/", async (req, res) => {                           /* Render recipe.handlebars with main.handlebars layout */
    try {
        res.render("recipe", { layout: "main" })
    } 
    catch (err) {
        res.status(500).json(err);
    }
});


                                                                /* ===================== EXPORTS ====================== */
module.exports = router;
