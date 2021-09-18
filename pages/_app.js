import "../public/tailwindcss.css";

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("ZUIMVZKC", {
      includedDomains: ["voices.help", "www.voices.help"],
    });

    function beforeHistoryChange() {
      Fathom.trackPageview();
      console.log('Fathom pageview tracked');
    }
    // Record a pageview when route changes
    router.events.on("beforeHistoryChange", beforeHistoryChange);

    // Unassign event listener
    return () => {
      router.events.off("beforeHistoryChange", beforeHistoryChange);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default App;
