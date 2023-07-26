                                                                /* ===================== IMPORTS ====================== */
const router = require("express").Router();                     /* Import express.Router()                              */
const apiRoutes = require("./api");                             /* Import apiRoutes from api/index.js                   */
const homeRoutes = require("./homeRoutes.js");                  /* Import homeRoutes from homeRoutes.js                 */


                                                                /* ====================== ROUTES ====================== */
router.use("/api", apiRoutes);                                  /* Use apiRoutes from api/index.js                      */
router.use("/", homeRoutes);                                    /* Use homeRoutes from homeRoutes.js                    */


                                                                /* ===================== EXPORTS ====================== */
module.exports = router;
