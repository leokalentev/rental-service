import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
  {
    id: "bbb06a0e-3f92-446d-9a88-cb64b5d38e2b",
    title: "Wood and stone place",
    type: "apartment",
    price: 370,
    previewImage: "/img/wood-stone-1.jpg",
    city: {
      name: "Paris",
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.8686100000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
  },
  {
    id: "dcd5a4fc-7d3f-42b4-91d7-125b7b84e102",
    title: "Modern loft in Cologne",
    type: "apartment",
    price: 210,
    previewImage: "/img/loft-cologne-1.jpg",
    city: {
      name: "Cologne",
      location: {
        latitude: 50.93753,
        longitude: 6.960279,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.93861,
      longitude: 6.95997,
      zoom: 16,
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.7,
  },
  {
    id: "1af19e74-426f-4a88-9a3e-5df9b3341a32",
    title: "Canal view hotel suite",
    type: "hotel",
    price: 430,
    previewImage: "/img/amsterdam-hotel-1.jpg",
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.37554,
      longitude: 4.901975,
      zoom: 16,
    },
    isPremium: true,
    isFavorite: true,
    rating: 5.0,
  },
  {
    id: "fd34e212-f8a9-4b19-8a94-ea02b6d1fdc2",
    title: "Historic house in Brussels",
    type: "house",
    price: 310,
    previewImage: "/img/house-brussels.jpg",
    city: {
      name: "Brussels",
      location: {
        latitude: 50.85045,
        longitude: 4.34878,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.846557,
      longitude: 4.352136,
      zoom: 16,
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.2,
  },

  {
    id: "a3e7d75b-c9f8-41cb-96a0-5cf0e96b117d",
    title: "Cozy private room in Hamburg center",
    type: "room",
    price: 85,
    previewImage: "/img/hamburg-room-1.jpg",
    city: {
      name: "Hamburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 13,
      },
    },
    location: {
      latitude: 53.558,
      longitude: 9.998,
      zoom: 16,
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.0,
  },
  {
    id: "dcd5a4fc-7d3f-42b4-91d7-125b7b84e102",
    title: "Stylish apartment in Düsseldorf center",
    type: "apartment",
    price: 220,
    previewImage: "/img/apartment-dusseldorf-1.jpg",
    city: {
      name: "Dusseldorf",
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 13,
      },
    },
    location: {
      latitude: 51.2290,
      longitude: 6.7760,
      zoom: 16,
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.5,
  }  
];
