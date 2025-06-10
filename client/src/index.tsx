import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { Setting } from "./const";
import { offers } from "./mocks/offers";
import { offersList } from "./mocks/offers-list";
import 'leaflet/dist/leaflet.css';


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      rentalOffersCount={Setting.RentalOffersCount}
      offers={offers}
      offersList={offersList}
    />
  </React.StrictMode>
);
