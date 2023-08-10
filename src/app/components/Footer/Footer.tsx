import React from 'react';
import ExternalLink from '../ExternalLink/ExternalLink';
import styles from './Footer.module.scss'; 

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <Link href='/'>
            <Image
              src='/icons/footerLogo.svg'
              alt='Sun Co. Logo'
              width={100}
              height={24}
            />
          </Link>
        </div>
        <p>© dot.cards task. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <ExternalLink
            url='https://www.instagram.com/officialgretagerwig/'
            icon='instagram'
          />
          <ExternalLink url='https://twitter.com/InternetH0F' icon='twitter' />
          <ExternalLink
            url='https://www.youtube.com/shorts/4bWbWJnX_Vs'
            icon='youtube'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
