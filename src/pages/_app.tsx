import Layout from '@/components/layout/Layout';
import store from '@/store/';
import { uiActions } from '@/store/';
import '@/styles/globals.css';
import { getSystem } from '@/utils/core';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath;
  const lastScrollPosition = useRef<number[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleBeforeHistoryChange = () => {
      /**
       * Save the scroll position on page leave, to restore
       * it on back/popstate navigation. Use an array instead
       * of useState to have directly the value updated, everywhere.
       */
      lastScrollPosition.current[0] = window.scrollY;
    };

    const handlePopState = () => {
      /**
       * On back/popstate navigation, override the scroll
       * restoration position to the previously saved position.
       */
      setScrollPosition(lastScrollPosition.current[0]);
    };

    router.events.on('beforeHistoryChange', handleBeforeHistoryChange);
    router.beforePopState((state) => {
      /**
       * Deactive Next's scroll restoration on back/popstate navigation.
       */
      state.options.scroll = false;
      return true;
    });
    window.addEventListener('popstate', handlePopState);
    /**
     * Deactivate completely the scroll restoration
     * of the browser, necessary for custom scroll
     * restoration on back/popstate navigation.
     */
    window.history.scrollRestoration = 'manual';

    return () => {
      router.events.off('beforeHistoryChange', handleBeforeHistoryChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router, router.events]);

  useEffect(() => {
    const system = getSystem();

    document.body.classList.add(system.os);
    document.body.classList.add(system.browser);

    store.dispatch(
      uiActions.setSystem({
        os: system.os,
        browser: system.browser,
      }),
    );
  });

  const handleExitComplete = () => {
    /**
     * Add a delay for the scroll restoration to be sure that the
     * the page height is updated across all browsers, after
     * the animation-out of the page. Necessary for the scroll
     * restoration on back/popstate navigation.
     */
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
      setScrollPosition(0);
    }, 100);
  };

  return (
    <Provider store={store}>
      <Layout {...pageProps}>
        <AnimatePresence mode='wait' initial={false} onExitComplete={handleExitComplete}>
          <Component key={pageKey} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </Provider>
  );
}
