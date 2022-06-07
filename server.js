const path = require("path");
const express = require("express");
// model controllers (routes)
//const routes = require('./controllers/api');
const routes = require('./controllers');
const session = require("express-session");
// set up Handlebars as our template of choice
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(session(sess));

// turn on routes
app.use(routes);
// code to set up handlebars 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// const helpers = require('./utils/helpers');

// const hbs = exphbs.create({ helpers });


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
