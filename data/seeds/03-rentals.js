
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rentals').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('rentals').insert([
        {
          user_id: 1,
          title: 'Audio Mixer',
          description: 'This is an Audio Mixer for parties and events',
          category_id: 3,
          checked_out: false,
          image: 'https://images-na.ssl-images-amazon.com/images/I/71NouKjXqQL._AC_SX425_.jpg',
          price_per_day: 40,
          location: 'Salt Lake City, UT'
        },
        {
          user_id: 2,
          title: '12.1MP Sony Camera',
          description: 'New 12.1MP Camera',
          category_id: 1,
          checked_out: false,
          image: 'https://images-na.ssl-images-amazon.com/images/I/71lSWGIESqL._AC_SX355_.jpg',
          price_per_day: 20,
          location: 'Athens, GA'
        },
        {
          user_id: 4,
          title: '75" LG UHD TV',
          description: 'This is an amazing tv with sharp quality',
          category_id: 2,
          checked_out: false,
          image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6290/6290163_sd.jpg',
          price_per_day: 75,
          location: 'Vancouver, WA'
        },
        {
          user_id: 1,
          title: '2x Event ASP 6 Studio speaker',
          description: 'This is 2 speakers for your event',
          category_id: 4,
          checked_out: false,
          image: 'https://audio-reviews.com/wp-content/content/event-asp-6-studio_0.jpg',
          price_per_day: 120,
          location: 'Las Vegas, NV'
        },
        {
          user_id: 3,
          title: '2012 Macbook Pro',
          description: '2012 Macbook pro with 16GB of RAM',
          category_id: 5,
          checked_out: false,
          image: 'https://images-na.ssl-images-amazon.com/images/I/71qVOM%2BlgnL._AC_SL1500_.jpg',
          price_per_day: 35,
          location: 'Waco, TX'
        },
        {
          user_id: 3,
          title: 'Skullcandy Crusher Headphones',
          description: 'Beige headphones with bass slider',
          category_id: 5,
          checked_out: false,
          image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5589/5589004_rd.jpg',
          price_per_day: 15,
          location: 'Athens, GA'
        },
      ]);
    });
};
