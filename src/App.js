import Home from './pages/Home';
import DefaultLayout from './layouts/Default';
import Profile from './pages/Profile';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import TVSeries from './pages/TVSeries';
import TVSeriesDetails from './pages/TVSeriesDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <DefaultLayout>
      <Home></Home>
    </DefaultLayout>
  },
  {
    path: '/movies',
    main: () => <DefaultLayout>
      <Movies></Movies>
    </DefaultLayout>
  },
  {
    path: '/movie/:id',
    main: () => <DefaultLayout>
      <MovieDetails></MovieDetails>
    </DefaultLayout>
  },
  {
    path: '/tvseries',
    exact: true,
    main: () => <DefaultLayout>
      <TVSeries></TVSeries>
    </DefaultLayout>
  },
  {
    path: '/tv/:id',
    main: () => <DefaultLayout>
      <TVSeriesDetails></TVSeriesDetails>
    </DefaultLayout>
  },
  {
    path: '/profile',
    main: () => <DefaultLayout>
      <Profile></Profile>
    </DefaultLayout>
  },
  
]

const getRoutes = () => {
  const routeComponents = routes.map((route, index) => {
    return <Route
      key={index}
      exact={route.exact}
      path={route.path}
    >
      {route.main}
    </Route>
  })
  return routeComponents
}


function App() {
  return (
    <Router>
        <Switch>
          {getRoutes()}
        </Switch>
    </Router>
  );
}

export default App;
