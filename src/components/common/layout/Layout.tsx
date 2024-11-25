import { FC } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';
import { QueryClientProvider } from '@/providers/query-client/QueryClientProvider';
import { DehydratedState, HydrationBoundary } from '@tanstack/react-query';

type Props = React.PropsWithChildren<{
  dehydratedState: DehydratedState;
}>;

export const Layout: FC<Props> = ({ children, dehydratedState }) => {
  return (
    <QueryClientProvider>
      <HydrationBoundary state={dehydratedState}>
        <Header />
        {children}
        <Footer />
      </HydrationBoundary>
    </QueryClientProvider>
  );
};
