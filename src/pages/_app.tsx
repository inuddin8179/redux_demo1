
import { Provider } from 'react-redux';
import { createStore } from '../store/createStore';
import { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
  const store = createStore();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
