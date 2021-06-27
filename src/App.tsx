import React from 'react';
import './App.css';
import { Homepage, ShowDetails } from "./pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyles } from './utils/globalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components";
import MovieStore, { StoreProvider } from './stores/movies';

function App() {
    const movieStore = new MovieStore();
    const stores = { movieStore };

  return (
      <StoreProvider value={stores}>
          <Router>
              <div className="App">
                  <GlobalStyles />
                  <Header />
                  <Route path="/" exact component={Homepage} />
                  <Route path="/:id" component={ShowDetails} />
              </div>
          </Router>
      </StoreProvider>
  );
}

export default App;
