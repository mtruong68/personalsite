import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import LoadImage from '../components/LoadingImage.js'
import GenericLink from '../components/GenericLink.js'
import Navigation from '../components/Navigation.js'
import Head from 'next/head'

import styles from './gallery.module.css'

const vaporwave = [{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/v1536242517/vaporsquare/hw1.png",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1536242517/vaporsquare/hw1.png",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/v1535237063/vaporsquare/cmr2.gif",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237063/vaporsquare/cmr2.gif",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/v1535237144/vaporsquare/cyg2.gif",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237144/vaporsquare/cyg2.gif"
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/v1535237108/vaporsquare/myr2.gif",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237108/vaporsquare/myr2.gif",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/v1535237096/vaporsquare/mrg2.gif",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237096/vaporsquare/mrg2.gif",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/v1535237148/vaporsquare/crg2.gif",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237148/vaporsquare/crg2.gif",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/v1535237131/vaporsquare/cmy2.gif",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237131/vaporsquare/cmy2.gif",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/v1535237079/vaporsquare/myg2.gif",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237079/vaporsquare/myg2.gif",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/v1535237135/vaporsquare/yrg2.gif",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237135/vaporsquare/yrg2.gif",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/v1535237056/vaporsquare/cyr2.gif",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237056/vaporsquare/cyr2.gif",
  },
]

const collages = [
  {
    img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1538425943/collages/digital/c8.jpg",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1538425943/collages/digital/c8.jpg",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1538426068/collages/digital2/c2.jpg",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1538426068/collages/digital2/c2.jpg",
  },{
    img:"https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1538425972/collages/digital/c12.jpg",
    smallImg:"https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1538425972/collages/digital/c12.jpg",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1538425934/collages/digital/c1.jpg",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1538425934/collages/digital/c1.jpg",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1538426061/collages/digital2/c1.jpg",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1538426061/collages/digital2/c1.jpg",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1538425963/collages/digital/c4.jpg",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1538425963/collages/digital/c4.jpg",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1538425962/collages/digital/c9.jpg",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1538425962/collages/digital/c9.jpg",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1538425969/collages/digital/c6.jpg",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1538425969/collages/digital/c6.jpg"
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1538425966/collages/digital/c10.jpg",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1538425966/collages/digital/c10.jpg",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1538426072/collages/digital2/c5.jpg",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1538426072/collages/digital2/c5.jpg",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1538425955/collages/digital/c5.jpg",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1538425955/collages/digital/c5.jpg",
  },{
    img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1538425941/collages/digital/c7.jpg",
    smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1538425941/collages/digital/c7.jpg"
  }]

const sketches = [{
  img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1535237389/sketches/tiger1.jpg",
  smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237389/sketches/tiger1.jpg",
},{
  img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1535237398/sketches/tiger3.jpg",
  smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237398/sketches/tiger3.jpg",
},{
  img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1535237390/sketches/tiger2.jpg",
  smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237390/sketches/tiger2.jpg",
},{
  img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1535237388/sketches/house1.jpg",
  smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237388/sketches/house1.jpg",
},{
  img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1535237386/sketches/house2.jpg",
  smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237386/sketches/house2.jpg",
},{
  img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1535237387/sketches/mix.jpg",
  smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237387/sketches/mix.jpg",
},{
  img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1535237394/sketches/vaporwave.jpg",
  smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237394/sketches/vaporwave.jpg",
},{
  img: "https://res.cloudinary.com/dftvewldz/image/upload/h_800/v1535237395/sketches/vaporwave1.jpg",
  smallImg: "https://res.cloudinary.com/dftvewldz/image/upload/h_12/v1535237395/sketches/vaporwave1.jpg",
}]

const art = [vaporwave, collages, sketches]

function initIdx(idx){
  if (idx){
    return idx
  } else {
    return 0
  }
}

const Gallery = () => {
  const router = useRouter()
  const [idx, setIdx] = useState(parseInt(initIdx(router.query.filter)))
  const [hoverL, setHoverLeft] = useState(false)
  const [hoverR, setHoverRight] = useState(false)

  const changeArtwork = () => {
    let projIdx = document.getElementById('selectProject').value
    document.getElementById('selectProject').value = projIdx;
    setIdx(parseInt(projIdx));
  }

  const hoverLeft = (cond) => {
    setHoverLeft(cond);
  }

  const hoverRight = (cond) => {
    setHoverRight(cond);
  }

  const clickLeft = (event) => {
    setHoverLeft(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  const clickRight = (e) => {
    setHoverRight(false);
    window.scrollTo({
      top: 0,
      left: document.body.scrollWidth,
      behavior: 'smooth'
    });
  }

  //allow scroll on hover
  useEffect(() => {
    const interval = setInterval(() => {
      let scrollPos = window.scrollX;
      if (hoverL && scrollPos > 0){
        window.scrollTo(scrollPos - 10, 0);
      } else if (hoverR && scrollPos < document.body.scrollWidth){
        window.scrollTo(scrollPos + 10, 0);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [hoverL, hoverR]);

  //initially set the correct dropdown value
  useEffect(() => {
    document.getElementById('selectProject').value = initIdx(router.query.filter);
  }, []);

  return (
    <div>
      <Head>
        <title>marytruong.com</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Mary Truong is an artist, coder, and writer. Her site documents various things she makes." />
        <link rel="canonical" href="http://marytruong.com/gallery" />
      </Head>

      <div className={styles.navContainer}>
        <Navigation/>
      </div>

      <div className={styles.galleryControls}>
        <GenericLink href="/projects">⬅ Projects</GenericLink>
        <div>
        <select className={styles.select} id="selectProject" onChange={() => {changeArtwork()}}>
            <option value="0">Vaporsquare</option>
            <option value="1">Copy/Paste</option>
            <option value="2">Sketches</option>
        </select>
        </div>
        <div>
          <span className={`material-icons ${styles.arrow}`}
            onMouseEnter={() => hoverLeft(true)}
            onMouseOut={() => hoverLeft(false)}
            onClick={(e) => clickLeft(e)}>
              arrow_back
          </span>
          <span className={`material-icons ${styles.arrow}`}
            onMouseEnter={() => hoverRight(true)}
            onMouseOut={() => hoverRight(false)}
            onClick={(e) => clickRight(e)}>
              arrow_forward
          </span>
        </div>
      </div>

      <div className={styles.imageContainer}>
        {
          art[idx].map((item, i) => {
            return (
              <LoadImage key={`art-item${i}`}  className={styles.x} smallImgSrc={item.smallImg} largeImgSrc={item.img} />
            )
          })
        }

      </div>
    </div>
  )
}

Gallery.getInitialProps = async (ctx) => {
  let x;
  if (ctx.query) {
    x = ctx.query
  } else {
    x = 0
  }
  return { query : x }
}

export default Gallery;
