import { CityOffer } from "./types/offer";

export const AppRoute = {
  Main: "/",
  Login: "/login",
  Favorites: "/favorites",
  Offer: "/offer",
} as const;

export const AuthorizationStatus = {
  Auth: "AUTH",
  NoAuth: "NO_AUTH",
  Unknown: "UNKNOWN",
} as const;

export const Setting = {
  RentalOffersCount: 10,
} as const;

export const CITIES_LOCATION : CityOffer[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 8
    }
  },
  {
    name: "Amsterdam",
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 8,
      }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.85045,
      longitude: 4.34878,
      zoom: 8
    }
  },
  {
    name: "Hamburg",
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 8
    }
  }
]

export const SortOffersType = {
  Popular: 'Popular',
  PriceToHigh: 'Price: low to high',
  PriceToLow: 'Price: high to low',
  TopRated: 'Top rated first',
};