import { TOffer } from '../../types/offers.ts';
import { name, image, datatype, helpers, internet, date, lorem } from 'faker';
import { OfferType } from '../../constants/offer.ts';
import { City } from '../../constants/city.ts';
import { TReview } from '../../types/review.ts';

export const makeFakeOffer = (): TOffer => ({
  id: crypto.randomUUID(),
  title: name.title(),
  type: helpers.randomize(Object.values(OfferType).map((type) => type)),
  price: datatype.number({ precision: 1 }),
  city: helpers.randomize(Object.values(City).map((item) => item)),
  location: {
    latitude: datatype.number(),
    longitude: datatype.number(),
    zoom: datatype.number()
  },
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  rating: datatype.number({ min: 1, max: 5, precision: 1 }),
  previewImage: image.imageUrl(),
  description: datatype.string(),
  bedrooms: datatype.number(),
  goods: helpers.randomize([['Wi-Fi', 'Heating'], ['Washing machine', 'Air conditioning'], ['Breakfast']]),
  images: [image.imageUrl(), image.imageUrl(), image.imageUrl(), image.imageUrl()],
  maxAdults: datatype.number(),
  host: {
    email: internet.email(),
    token: crypto.randomUUID()
  }
});

export const makeFakeReview = (): TReview => ({
  id: crypto.randomUUID(),
  date: date.soon(),
  user: {
    email: internet.email(),
    token: crypto.randomUUID()
  },
  comment: lorem.text(),
  rating: datatype.number({ precision: 1 })
});
