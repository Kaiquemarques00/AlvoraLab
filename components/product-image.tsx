import Image from "next/image";
import styles from "./product-image.module.css";

type ProductImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className: string;
  loading?: "eager" | "lazy";
};

export function ProductImage({ src, alt, sizes, className, loading = "lazy" }: ProductImageProps) {
  return <div className={`${styles.frame} ${className}`}>
    <Image className={styles.image} src={src} alt={alt} fill sizes={sizes} loading={loading} draggable={false} />
  </div>;
}
