import { ImgHTMLAttributes } from 'react';
import styles from './banner.module.scss';

interface BannerProps extends ImgHTMLAttributes<HTMLImageElement> {
  bannerImgUrl: string;
}

export default function Banner({ bannerImgUrl, alt, ...rest }: BannerProps) {
  return (
    <img src={bannerImgUrl} alt={alt} className={styles.banner} {...rest} />
  );
}
