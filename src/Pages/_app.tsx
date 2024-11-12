// pages/_app.tsx or app/layout.tsx
'use client'
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider } from 'react-redux'; 
import { store } from '../store/store';
import '../app/page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Import Bootstrap JS on the client side only
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

