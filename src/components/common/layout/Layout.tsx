import { FC } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';

export const Layout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
