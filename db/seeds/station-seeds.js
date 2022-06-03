
const { Category } = require('../models');

const categoryData = [
  {
    station_name: 'Belmopan',
  },
  {
    station_name: 'Santa Elena',
  },
  {
    station_name: 'San Ignacio',
  },
  {
    station_name: 'Benque Viejo',
  },
 
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;