import React, { ReactNode, FC } from 'react';
import styles from './MainContent.module.scss';

interface MainContentProps {
  children: ReactNode;
}

const MainContent: FC<MainContentProps> = ({ children }) => {
  const { main } = styles;
  return <main className={main}>{children}</main>;
};

export default MainContent;
