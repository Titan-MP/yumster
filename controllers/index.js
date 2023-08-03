                                                                /* ===================== IMPORTS ====================== */
const router = require("express").Router();                     /* Import express.Router()                              */
const apiRoutes = require("./api");                             /* Import apiRoutes from api/index.js                   */
const homeRoutes = require("./homeRoutes.js");                  /* Import homeRoutes from homeRoutes.js                 */
const loginRoutes = require("./loginRoutes.js")                 /* Import loginRoutes from loginRoutes.js               */
const signupRoutes = require("./signupRoutes.js")               /* Import signupRoutes from signupRoutes.js             */
const recipeRoutes = require("./recipeRoutes.js")               /* Import recipeRoutes from recipeRoutes.js             */


                                                                /* ====================== ROUTES ====================== */
router.use("/api", apiRoutes);                                  /* Use apiRoutes from api/index.js                      */
router.use("/", homeRoutes);                                    /* Use homeRoutes from homeRoutes.js                    */
router.use("/login", loginRoutes);                              /* Use loginRoutes from loginRoutes.js                  */
router.use("/signup", signupRoutes);                            /* Use signupRoutes from signupRoutes.js                */
router.use("/recipe", recipeRoutes);                            /* Use recipeRoutes from recipeRoutes.js                */


                                                                /* ===================== EXPORTS ====================== */
module.exports = router;
