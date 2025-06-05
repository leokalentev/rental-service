import { FavoriteCardList } from "../../components/favorite-card-list/favorite-card-list";
import { FavoritesByCity } from "../../types/favorite";

const MOCK_FAVORITES: FavoritesByCity[] = [
  {
    city: "Amsterdam",
    offers: [
      {
        id: "1",
        title: "Nice, cozy, warm big bed apartment",
        type: "apartment",
        price: 180,
        rating: 5,
        isPremium: true,
        previewImage: "/img/apartment-small-03.jpg",
      },
      {
        id: "2",
        title: "Wood and stone place",
        type: "private room",
        price: 80,
        rating: 4,
        isPremium: false,
        previewImage: "/img/room-small.jpg",
      },
    ],
  },
  {
    city: "Cologne",
    offers: [
      {
        id: "3",
        title: "White castle",
        type: "apartment",
        price: 180,
        rating: 5,
        isPremium: false,
        previewImage: "/img/apartment-small-04.jpg",
      },
    ],
  },
];

export function Favorites(): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteCardList favoritesByCity={MOCK_FAVORITES} />
        </section>
      </div>
    </main>
  );
}
