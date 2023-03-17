import '../styles/globals.css';
import {
  createClient,
  Provider,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from 'urql';

const client = createClient({
  url: 'https://api.escuelajs.co/graphql',
  exchanges: [dedupExchange, cacheExchange, fetchExchange],
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
