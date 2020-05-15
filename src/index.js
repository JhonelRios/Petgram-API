import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from './Context';

import App from './App';

const client = new ApolloClient({
  uri: 'https://petgram-api-jhonel.now.sh/graphql',
});

ReactDOM.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('app'),
);
