import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import MustWatchPage from "./pages/mustWatchPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import FavouriteTvShowsPage from "./pages/favouriteTvShowsPage";
import TvShowPage from "./pages/tvShowDetailsPage";
import TvShowsPage from "./pages/tvShowsPage";
import TvShowReviewPage from "./pages/tvShowReviewPage";
import TvShowsContextProvider from "./contexts/tvShowsContext";
import AddTvShowReviewPage from './pages/addTvShowReviewPage';
import LoginPage from "./loginPage";
import AuthProvider from "./contexts/authContext";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./components/authHeader";
import SignUpPage from "./signUpPage";
import MoviesProvider from "./moviesContext";
import ActorsContextProvider from "./contexts/actorsContext";
import ActorsPage from "./pages/actorsPage";
import FavouriteActorsPage from "./pages/favouriteActorsPage";
import ActorPage from "./pages/actorDetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthProvider>
        <AuthHeader />
        <SiteHeader />
        <MoviesContextProvider>
        <TvShowsContextProvider>
        <ActorsContextProvider>
        <MoviesProvider>
        <Routes>
          <Route path="/movies/:id/similar" element={<PrivateRoute> <SimilarMoviesPage /> </PrivateRoute> } />
          <Route path="/movies/must-watch" element={ <PrivateRoute> <MustWatchPage /> </PrivateRoute> } />
          <Route path="/movies/now-playing" element={ <PrivateRoute> <NowPlayingPage /> </PrivateRoute> } />
          <Route path="/movies/trending" element={ <PrivateRoute> <TrendingMoviesPage /> </PrivateRoute> } />
          <Route path="/reviews/form" element={ <PrivateRoute> <AddMovieReviewPage /> </PrivateRoute> } />
          <Route path="/movies/upcoming" element={ <PrivateRoute> <UpcomingMoviesPage /> </PrivateRoute> } />
          <Route path="/reviews/:id" element={ <PrivateRoute> <MovieReviewPage /> </PrivateRoute> } />
          <Route path="/movies/favorites" element={ <PrivateRoute> <FavoriteMoviesPage /> </PrivateRoute> } />
          <Route path="/movies/:id" element={ <PrivateRoute> <MoviePage /> </PrivateRoute> } />
          <Route path="/tvshows/favourites" element={<PrivateRoute> <FavouriteTvShowsPage /> </PrivateRoute>} />
          <Route path="/tvshows" element={<PrivateRoute> <TvShowsPage /> </PrivateRoute>} />
          <Route path="/tvShowReviews/:id" element={<PrivateRoute> <TvShowReviewPage /> </PrivateRoute> } />
          <Route path="/reviews/tvform" element={<PrivateRoute> <AddTvShowReviewPage/> </PrivateRoute> } />
          <Route path="/tvshows/:id" element={<PrivateRoute> <TvShowPage />  </PrivateRoute>} />
          <Route exact path="/actors/favourites" element={<PrivateRoute> <FavouriteActorsPage /> </PrivateRoute>} />
          <Route path="/actors" element={<PrivateRoute> <ActorsPage /> </PrivateRoute>} />
          <Route path="/actors/:id" element={<PrivateRoute> <ActorPage /> </PrivateRoute>} />
          <Route path="/" element={ <PrivateRoute> <HomePage /> </PrivateRoute> } />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/movies/upcoming"
              element={
                <PrivateRoute>
                  <UpcomingMoviesPage />
                </PrivateRoute>
              }
              />
        </Routes>
        </MoviesProvider>
        </ActorsContextProvider>
        </TvShowsContextProvider>
        </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);