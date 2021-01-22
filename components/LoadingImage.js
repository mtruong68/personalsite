import React, { useState, useEffect } from 'react'

const LoadImage = (props) => {
  /*
    code adapted form https://benhoneywill.com/progressive-image-loading-with-react-hooks/
  */
  const [blur, setBlur] = React.useState(true);
  const loadingImage = React.useRef();
  const [src, setSrc] = React.useState(props.smallImgSrc);

  React.useEffect(() => {
      setSrc(props.smallImgSrc);
      const img = new Image();
      img.src = props.largeImgSrc;
      img.onload = () => {
        setSrc(props.largeImgSrc);
        setBlur(false)
      };
    },
    [props.smallImgSrc, props.largeImgSrc]
  );

  return (
    <img
      className={props.className}
      src={src}
      style={{
        filter: blur ? "blur(20px)" : "none",
        transition: blur ? "none" : "filter 0.3s ease-out"
      }}
      alt={props.alt}/>
  )
}

export default LoadImage;
