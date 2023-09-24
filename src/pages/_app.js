import '@/styles/globals.css'
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    
    <Script type='text/javascript'>
        {`window._tfa = window._tfa || [];
      window._tfa.push({notify: 'event', name: 'page_view', id: 1607964});
      !function (t, f, a, x) {
             if (!document.getElementById(x)) {
                t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
             }
      }(document.createElement('script'),
      document.getElementsByTagName('script')[0],
      '//cdn.taboola.com/libtrc/unip/1607964/tfa.js',
      'tb_tfa_script');`}
    </Script>

  </>;
}
