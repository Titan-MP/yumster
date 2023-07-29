/* ===================== IMPORTS ====================== */
const express = require('express');                             /* Import express package                               */
const routes = require('./controllers');                        /* Import routes from controllers folder                */
const exphbs = require("express-handlebars");                   /* Import express-handlebars package                    */
const path = require("path");                                   /* Import path package                                  */
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
/* ============== SERVER INITIALIZATION =============== */
const app = express();                                          /* Create express object                                */
const PORT = process.env.PORT || 3001;                          /* Set port to 3001 if no port is specified             */

/* ===================== MIDDLEWARE =================== */
app.use(express.json());                                        /* Parse incoming JSON data                             */
app.use(express.urlencoded({ extended: true }));                /* Parse incoming urlencoded data                       */
app.use(express.static(path.join(__dirname, 'public')));        /* Serve static files from the public folder            */
app.use(routes);                                                /* Use routes from controllers folder                   */

const sess = {                                                  /* Session for express middle parts                     */
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,

  }),
};

app.use(session(sess));

/* ============ HANDLEBARS INITIALIZATION ============= */
const hbs = exphbs.create({});                                  /* Create handlebars object                             */
app.engine("handlebars", hbs.engine);                           /* Register handlebars as the view engine               */
app.set("view engine", "handlebars");                           /* Set handlebars as the default view engine            */

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
  });
});                                                               /* =================== APP LISTENER =================== */