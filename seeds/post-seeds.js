const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    context: 'This is the description about the first post',
    user_id: 3
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'https://nasa.gov/donec.json',
    context: 'This is the description about the second post',
    user_id: 2
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    context: 'This is the description about the third post',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;