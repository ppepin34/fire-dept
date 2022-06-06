const path = require("path");
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
// set up Handlebars as our template of choice
const exphbs = require("express-handlebars");

const hbs = exphbs.create({});
const sequelize = require("./config/connection");

// model controllers (routes)
const routes = require('./controllers/api');
const session = require("express-session");


const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// turn on routes
app.use(routes);

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

// app.use(session(sess));

// const helpers = require('./utils/helpers');

// const hbs = exphbs.create({ helpers });

// code to set up handlebars 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/api"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
