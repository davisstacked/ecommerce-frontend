import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ExternalLinkProps {
  url: string;
  icon: string;
  iconWidth?: number;
  iconHeight?: number;
}

const ExternalLink: FC<ExternalLinkProps> = ({
  url,
  icon,
  iconWidth = 24,
  iconHeight = 24,
}) => {
  const svgPath = `/icons/${icon}.svg`;

  return (
    <Link href={url} target='_blank' passHref>
      <Image src={svgPath} alt={icon} width={iconWidth} height={iconHeight} />
    </Link>
  );
};

export default ExternalLink;
