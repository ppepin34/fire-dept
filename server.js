const express = require('express');
// const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({});

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('PORT LISTENING'));
// });