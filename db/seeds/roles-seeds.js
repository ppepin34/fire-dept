const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'captain',
  },
  {
    tag_name: 'lieutenant',
  },
  {
    tag_name: 'firefighter',
  }
 
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;