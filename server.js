// ---------- PAGE TO CONNECT FILES TO SERVER ------------

// create path for stylesheet to connect to client
const path = require('path');
const express = require('express');
//  express session allows us to connect to the backend
const session = require('express-session');
// set up express-handlebars as template engine of choice
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3004;

const sequelize = require("./config/connection");
// automatically stores sessions created by express-session
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// const helpers = require('./utils/helpers');

// const hbs = exphbs.create({ helpers });

// create express handlebars
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// express.static method is middleware to take contents of folder and serve them as static
app.use(express.static(path.join(__dirname, 'public')));
// routes
app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});