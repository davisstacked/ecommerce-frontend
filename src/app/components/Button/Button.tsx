import styles from './Button.module.scss';
import Image from 'next/image';

interface ButtonProps {
  text: string;
  width: number;
  height: number;
  iconSrc?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  width,
  height,
  iconSrc
}) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <button className={styles.button} style={style}>
      <span>{text}</span>
      {iconSrc && <Image src={iconSrc} alt='' width={24} height={24} />}
    </button>
  );
};

export default Button;