import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = ({ src, alt }) => {
  return (
    <div className={styles.card}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default ImageCard;
