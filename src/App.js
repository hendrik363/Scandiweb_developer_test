import React from "react";
import { Switch, Route } from 'react-router-dom';
import './default.scss';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// layouts 
import MainLayout from "./layouts/MainLayout";

// pages
import HomePage from './pages/HomePage/HomePage'
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductDetails from "./pages/ProductDetails";

//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000'
})

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => (
              <MainLayout>
                <HomePage />
              </MainLayout>
            )} />
            <Route path="/products" render={() => (
              <MainLayout>
                <ProductPage />
              </MainLayout>
            )} />
            <Route path="/product/:productID" render={() => (
              <MainLayout>
                <ProductDetails />
              </MainLayout>
            )} />
          </Switch>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
