import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./features/MovieSearch/pages/LandingPage";
import { MoviesProvider } from "./features/Providers/MoviesProvider";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import FavoritesPage from './features/FavoriteMovies/pages/FavoritesPage';
import Navbar from "./features/Navbar/Navbar";
import Footer from "./features/Footer/Footer"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoviesProvider>
        <Navbar />

        <Switch>
          <Route path="/react-movie-app" component={LandingPage} />

          <Route path="/favorites" component={FavoritesPage} />
          <Redirect to="/react-movie-app"/>
        </Switch>

        <Footer/>

      </MoviesProvider>
    </BrowserRouter>

  </React.StrictMode>
);
