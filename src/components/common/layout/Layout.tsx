import { FC } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';
import { QueryClientProvider } from '@/providers/query-client/QueryClientProvider';

export const Layout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider>
      <Header />
      {children}
      <Footer />
    </QueryClientProvider>
  );
};
