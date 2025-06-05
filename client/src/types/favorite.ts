export type FavoriteOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  isPremium: boolean;
  previewImage: string;
};

export type FavoritesByCity = {
  city: string;
  offers: FavoriteOffer[];
};
