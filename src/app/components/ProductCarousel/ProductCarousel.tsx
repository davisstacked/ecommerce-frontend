import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ProductCarousel.module.scss';
import Image from 'next/image';

interface ImageProps {
  images: string[];
}

const ProductCarousel: React.FC<ImageProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
  };

  const firstThreeImages = images.slice(0, 3);

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {firstThreeImages.map((image, index) => (
          <div key={index} className={styles.slickSlide}>
            <Image
              src={image}
              alt='product carousel'
              height={375}
              width={546}
              objectFit='contain'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
