import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
// Load DM Sans typeface
import 'typeface-dm-sans';

// Load other package css file
import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
import 'assets/css/slick.min.css';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Component {...pageProps} />
      </StickyProvider>
    </ThemeProvider>
  );
}
