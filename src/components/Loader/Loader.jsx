import React from "react";
import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  );
};

export default Loader;
