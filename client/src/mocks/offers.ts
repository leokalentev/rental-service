import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
  {
    id: "bbb06a0e-3f92-446d-9a88-cb64b5d38e2b",
    title: "Wood and stone place",
    description:
      "A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families with children.",
    type: "apartment",
    price: 370,
    images: [
      "/img/wood-stone-1.jpg",
      "/img/wood-stone-1.jpg",
      "/img/wood-stone-1.jpg",
      "/img/wood-stone-1.jpg",
      "/img/wood-stone-1.jpg",
      "/img/wood-stone-1.jpg",
    ],
    city: {
      name: "Paris",
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.86861,
      longitude: 2.342499,
      zoom: 16,
    },
    goods: [
      "Heating",
      "Wi-Fi",
      "Fridge",
      "Laptop friendly workspace",
      "Baby seat",
      "Air conditioning",
      "Washer",
      "Towels",
      "Dishwasher",
      "Kitchen",
      "Washing machine",
      "Breakfast",
      "Coffee machine",
    ],
    host: {
      isPro: true,
      name: "Angelina",
      avatarUrl: "/img/avatar-angelina.jpg",
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.9,
    bedrooms: 2,
    maxAdults: 3,
  },

  {
    id: "dcd5a4fc-7d3f-42b4-91d7-125b7b84e102",
    title: "Modern loft in Cologne",
    description:
      "Stylish loft in the heart of Cologne with fast Wi-Fi and a large balcony.",
    type: "apartment",
    price: 210,
    images: [
      "/img/loft-cologne-1.jpg",
      "/img/loft-cologne-1.jpg",
      "/img/loft-cologne-1.jpg",
    ],
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
    goods: ["Wi-Fi", "Kitchen", "Heating", "Towels", "Washing machine"],
    host: {
      isPro: false,
      name: "Max",
      avatarUrl: "/img/avatar-max.jpg",
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.7,
    bedrooms: 1,
    maxAdults: 2,
  },

  {
    id: "1af19e74-426f-4a88-9a3e-5df9b3341a32",
    title: "Canal view hotel suite",
    description:
      "Luxury suite with a stunning canal view, room service and top-rated amenities.",
    type: "hotel",
    price: 430,
    images: [
      "/img/amsterdam-hotel-1.jpg",
      "/img/amsterdam-hotel-1.jpg",
      "/img/amsterdam-hotel-1.jpg",
    ],
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
    goods: [
      "Wi-Fi",
      "Breakfast",
      "Air conditioning",
      "Elevator",
      "24h Reception",
    ],
    host: {
      isPro: true,
      name: "Max",
      avatarUrl: "/img/avatar-max.jpg",
    },
    isPremium: true,
    isFavorite: true,
    rating: 5.0,
    bedrooms: 1,
    maxAdults: 2,
  },

  {
    id: "fd34e212-f8a9-4b19-8a94-ea02b6d1fdc2",
    title: "Historic house in Brussels",
    description:
      "Charming old house near the Grand Place. Perfect for a cultural vacation.",
    type: "house",
    price: 310,
    images: [
      "/img/house-brussels.jpg",
      "/img/house-brussels.jpg",
      "/img/house-brussels.jpg",
    ],
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
    goods: ["Heating", "Kitchen", "Dishwasher", "Washer", "Coffee machine"],
    host: {
      isPro: false,
      name: "Jean",
      avatarUrl: "/img/avatar-angelina.jpg",
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.2,
    bedrooms: 3,
    maxAdults: 5,
  },

  {
    id: "a3e7d75b-c9f8-41cb-96a0-5cf0e96b117d",
    title: "Cozy private room in Hamburg center",
    description:
      "Small but cozy room in the heart of Hamburg. Perfect for solo travelers or couples on a budget.",
    type: "room",
    price: 85,
    images: [
      "/img/hamburg-room-1.jpg",
      "/img/hamburg-room-1.jpg",
      "/img/hamburg-room-1.jpg",
      "/img/hamburg-room-1.jpg",
      "/img/hamburg-room-1.jpg",
      "/img/hamburg-room-1.jpg",
    ],
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
    goods: ["Wi-Fi", "Towels", "Coffee machine", "Heating"],
    host: {
      isPro: false,
      name: "Lena",
      avatarUrl: "/img/avatar-max.jpg",
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.0,
    bedrooms: 1,
    maxAdults: 2,
  },
  {
    id: "paris-2",
    title: "Small apartment in Paris",
    type: "apartment",
    price: 120,
    city: {
      name: "Paris",
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.86000,
      longitude: 2.35000,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
    description: "Уютная квартира в Париже",
    bedrooms: 1,
    goods: ["Wi-Fi", "Кухня"],
    host: {
      isPro: false,
      name: "Paul",
      avatarUrl: "/img/avatar-angelina.jpg",
    },
    images: ["/img/wood-stone-1.jpg"],
    maxAdults: 2,
  },
  {
    id: "paris-3",
    title: "Lovely studio near Eiffel Tower",
    type: "apartment",
    price: 150,
    city: {
      name: "Paris",
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.85837,
      longitude: 2.294481,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    description: "Студия с видом на Эйфелеву башню",
    bedrooms: 1,
    goods: ["Wi-Fi", "Кондиционер"],
    host: {
      isPro: true,
      name: "Marie",
      avatarUrl: "/img/avatar-angelina.jpg",
    },
    images: ["/img/wood-stone-1.jpg"],
    maxAdults: 2,
  },
  {
    id: "dcd5a4fc-7d3f-42b4-91d7-125b7b84e102",
    title: "Stylish apartment in Düsseldorf center",
    description:
      "Bright and modern apartment located in the heart of Düsseldorf, close to the Rhine and all main attractions. Fast Wi‑Fi and a fully equipped kitchen.",
    type: "apartment",
    price: 220,
    images: [
      "/img/aapartment-dusseldorf-1.jpg",
      "/img/apartment-dusseldorf-1.jpg",
      "/img/apartment-dusseldorf-1.jpg",
    ],
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
    goods: ["Wi‑Fi", "Kitchen", "Heating", "Towels", "Washing machine"],
    host: {
      isPro: false,
      name: "Lena",
      avatarUrl: "/img/avatar-angelina.jpg",
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.5,
    bedrooms: 1,
    maxAdults: 2,
  }  
];

export { offers };
