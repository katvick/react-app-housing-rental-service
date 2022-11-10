import { Offer } from '../types/mocks';

export const offers: Offer[] = [
  {
    id: 1,
    city: 'Amsterdam',
    header: 'Beautiful & luxurious studio at great location',
    picture: '../../public/img/apartment-01.jpg',
    photos: [
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg',
      '/img/room.jpg',
      '/img/apartment-01.jpg',
    ],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    premium: true,
    price: 120,
    type: 'apartment',
    ratingOffer: 4.6,
    bedrooms: 2,
    adults: 4,
    householdItems: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    owner: {
      avatar: `https://i.pravatar.cc/74?rnd=${Math.random()}`,
      name: 'Bony',
      statusPro: true,
    },
  },
  {
    id: 2,
    city: 'Paris',
    header: 'Wood and stone place',
    picture: '../../public/img/room.jpg',
    photos: [
      '/img/room.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/room.jpg',
      '/img/apartment-03.jpg',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper non dui vitae porttitor. Curabitur eu tristique justo. Duis in semper dui. Nunc eget tempus quam, quis interdum ligula. Nam non vestibulum nunc. Nunc scelerisque malesuada metus, a viverra ex maximus nec. Praesent nisi diam, elementum quis justo vitae, commodo vehicula arcu.',
    premium: false,
    price: 90,
    type: 'room',
    ratingOffer: 3.5,
    bedrooms: 1,
    adults: 2,
    householdItems: [
      'Wi-Fi',
      'Coffee machine',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    owner: {
      avatar: `https://i.pravatar.cc/74?rnd=${Math.random()}`,
      name: 'Karla',
      statusPro: true,
    },
  },
  {
    id: 3,
    city: 'Brussels',
    header: 'Canal View Prinsengracht',
    picture: '../../public/img/apartment-03.jpg',
    photos: [
      '/img/apartment-02.jpg',
      '/img/apartment-01.jpg',
      '/img/room.jpg',
      '/img/apartment-03.jpg',
    ],
    description: 'Nunc tempus consectetur posuere. In aliquam malesuada nisl, vel volutpat quam congue a. Etiam lorem dui, ullamcorper ac pellentesque id, pellentesque sit amet est. Mauris faucibus nisi id odio accumsan, eu venenatis ipsum convallis. Maecenas pulvinar est in augue malesuada viverra.',
    premium: true,
    price: 145,
    type: 'house',
    ratingOffer: 5,
    bedrooms: 3,
    adults: 6,
    householdItems: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    owner: {
      avatar: `https://i.pravatar.cc/74?rnd=${Math.random()}`,
      name: 'Penny',
      statusPro: true,
    },
  },
];
