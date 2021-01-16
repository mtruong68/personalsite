import React, { useState, useEffect } from 'react'
import styles from './LoadingImage.module.css'

const LoadImage = (props) => {
  const [blur, setBlur] = React.useState(true);
  const loadingImage = React.useRef();

  React.useEffect(() => {
    if (loadingImage.current.complete) {
      setBlur(false);
    }

    loadingImage.current.addEventListener('load', () => {
      setBlur(false);
    });
  }, []);

  return (
    <div className={`${styles.image_container} ${props.className} ${blur ? styles.blur : styles.unblur}`}>
      <img className={styles.placeholder_image} src={props.smallImgSrc} alt={props.alt}/>
      <img className={styles.real_image} ref={loadingImage} src={props.largeImgSrc} alt={props.alt}/>
    </div>
  )
}

export default LoadImage;
