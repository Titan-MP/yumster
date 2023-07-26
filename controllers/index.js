                                                                /* ===================== IMPORTS ====================== */
const router = require("express").Router();                     /* Import express.Router()                              */
const homeRoutes = require("./homeRoutes.js");                  /* Import homeRoutes from homeRoutes.js                 */


                                                                /* ====================== ROUTES ====================== */
router.use("/", homeRoutes);                                    /* Use homeRoutes from homeRoutes.js                    */


                                                                /* ===================== EXPORTS ====================== */
module.exports = router;
