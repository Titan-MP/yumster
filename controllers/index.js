                                                                /* ===================== IMPORTS ====================== */
const router = require("express").Router();                     /* Import express.Router()                              */
const apiRoutes = require("./api");                             /* Import apiRoutes from api/index.js                   */
const homeRoutes = require("./homeRoutes.js");                  /* Import homeRoutes from homeRoutes.js                 */
const dashboardRoutes = require("./dashboardRoutes.js")         /* Import dashboardRoutes from dashboardRoutes.js       */
const loginRoutes = require("./loginRoutes.js")                 /* Import loginRoutes from loginRoutes.js               */


                                                                /* ====================== ROUTES ====================== */
router.use("/api", apiRoutes);                                  /* Use apiRoutes from api/index.js                      */
router.use("/", homeRoutes);                                    /* Use homeRoutes from homeRoutes.js                    */
router.use("/dashboard", dashboardRoutes);                      /* Use dashboardRoutes from dashboardRoutes.js          */
router.use("/login", loginRoutes);                              /* Use loginRoutes from loginRoutes.js                  */


                                                                /* ===================== EXPORTS ====================== */
module.exports = router;
