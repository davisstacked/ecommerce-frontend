import React, { FC, ReactNode } from 'react';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </div>
  );
};

export default Layout;
