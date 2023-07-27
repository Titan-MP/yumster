                                                                /* ===================== IMPORTS ====================== */
const express = require('express');                             /* Import express package                               */
const routes = require('./controllers');                        /* Import routes from controllers folder                */
const exphbs = require("express-handlebars");                   /* Import express-handlebars package                    */
const path = require("path");                                   /* Import path package                                  */


                                                                /* ============== SERVER INITIALIZATION =============== */
const app = express();                                          /* Create express object                                */
const PORT = process.env.PORT || 3001;                          /* Set port to 3001 if no port is specified             */


                                                                /* ===================== MIDDLEWARE =================== */
app.use(express.json());                                        /* Parse incoming JSON data                             */
app.use(express.urlencoded({ extended: true }));                /* Parse incoming urlencoded data                       */
app.use(express.static(path.join(__dirname, 'public')));        /* Serve static files from the public folder            */
app.use(routes);                                                /* Use routes from controllers folder                   */


                                                                /* ============ HANDLEBARS INITIALIZATION ============= */
const hbs = exphbs.create({});                                  /* Create handlebars object                             */
app.engine("handlebars", hbs.engine);                           /* Register handlebars as the view engine               */
app.set("view engine", "handlebars");                           /* Set handlebars as the default view engine            */


                                                                /* =================== APP LISTENER =================== */
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});