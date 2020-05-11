exports.seed = function (knex) {
  return knex('Flats').insert([
    {
      title: 'theta',
      price: 50000,
      floorArea: '1st',
      country: 'Hungary',
      zip: 6449,
      city: 'Mélykút',
      street: 'Nagy'
    },
    {
      title: 'theta',
      price: 100000,
      floorArea: '3st',
      country: 'Hungary',
      zip: 6449,
      city: 'Mélykút',
      street: 'Petőfi'
    },
    {
      title: 'theta',
      price: 30000,
      floorArea: '2st',
      country: 'Hungary',
      zip: 6449,
      city: 'Szeged',
      street: 'Oskola'
    }
  ]);
}