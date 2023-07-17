export const Offers: TOffer[] = [
  {
    id: crypto.randomUUID(),
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.64536342324233,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.64536342324233,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 3,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: crypto.randomUUID(),
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 200,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.64536342324233,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.64536342324233,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg'
  },
  {
    id: crypto.randomUUID(),
    title: 'Wood and stone place',
    type: 'Private room',
    price: 210,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.64536342324233,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.64536342324233,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    previewImage: 'img/apartment-04.jpg'
  },
  {
    id: crypto.randomUUID(),
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Private room',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.64536342324233,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.64536342324233,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 2,
    previewImage: 'img/apartment-04.jpg'
  }
];
