import React, { ReactNode, FC } from 'react';
import styles from './MainContent.module.scss';

interface MainContentProps {
  children: ReactNode;
}

const MainContent: FC<MainContentProps> = ({ children }) => {
  const { main, mainContent } = styles;
  return (
    <main className={main}>
      {/* <div className={mainContent}> */}
        {children}
      {/* </div> */}
    </main>
  );
};

export default MainContent;
