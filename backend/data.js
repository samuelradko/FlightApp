const data = {
    flights: [
      {
        name: 'san-francisco',
        slug: 'san-francisco',
        category: 'Flights',
        image: '/images/flight1.jpg',
        price: getRandomPrice(100, 500),
        seatsavailable: getRandomNumber(1, 20),
        brand: getRandomBrand(),
        rating: getRandomRating(1, 5),
        numReviews: getRandomNumber(1, 50),
        description: 'This is Flight to san-francisco.',
      },
      {
        name: 'tel-aviv',
        slug: 'tel-aviv',
        category: 'Flights',
        image: '/images/flight2.jpg',
        price: getRandomPrice(100, 500),
        seatsavailable: getRandomNumber(1, 20),
        brand: getRandomBrand(),
        rating: getRandomRating(1, 5),
        numReviews: getRandomNumber(1, 50),
        description: 'This is Flight to tel-aviv.',
      },
      {
        name: 'tokyo',
        slug: 'tokyo',
        category: 'Flights',
        image: '/images/flight3.jpg',
        price: getRandomPrice(100, 500),
        seatsavailable: getRandomNumber(1, 20),
        brand: getRandomBrand(),
        rating: getRandomRating(1, 5),
        numReviews: getRandomNumber(1, 50),
        description: 'This is Flight to tokyo.',
      },
      {
        name: 'shanghai',
        slug: 'shanghai',
        category: 'Flights',
        image: '/images/flight4.jpg',
        price: getRandomPrice(100, 500),
        seatsavailable: getRandomNumber(1, 20),
        brand: getRandomBrand(),
        rating: getRandomRating(1, 5),
        numReviews: getRandomNumber(1, 50),
        description: 'This is Flight to shanghai.',
      },
    ],
  };
  
  function getRandomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomBrand() {
    const brands = ['American-Express'];
    const randomIndex = Math.floor(Math.random() * brands.length);
    return brands[randomIndex];
  }
  
  function getRandomRating(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1);
  }
  
  export default data;
  