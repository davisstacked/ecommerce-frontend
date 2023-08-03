import React, { FC } from 'react';
import styles from './Button.module.scss';
import Image from 'next/image';

interface ButtonProps {
  text: string;
  width: number;
  height: number;
  onClick?: () => void;
  iconSrc?: string;
  iconWidth?: number;
  iconHeight?: number;
}

const Button: FC<ButtonProps> = ({
  text,
  width,
  height,
  onClick,
  iconSrc,
  iconWidth = 24, 
  iconHeight = 24
}) => {
  const style = {
    width: `${width}%`,
    height: `${height}rem`,
  };

  return (
    <button className={styles.button} style={style} onClick={onClick}>
      <span>{text}</span>
      {iconSrc && (
        <Image src={iconSrc} alt={text} width={iconWidth} height={iconHeight} />
      )}
    </button>
  );
};

export default Button;
