import { AppProps } from 'next/app';
import { Layout } from '@/components/common/layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout dehydratedState={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </Layout>
  );
}
