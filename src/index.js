import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/createStore';
import { ApolloProvider } from 'react-apollo';
import ApolloClient  from 'apollo-boost';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'

const client = new ApolloClient({
  uri: "http://127.0.0.1/magento24/graphql/",
  fetchOptions: {
    mode: 'no-cors',
    headers: {
      "Content-Type": "application-json"
    }
  }
  
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

