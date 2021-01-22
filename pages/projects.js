import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router"

import Link from 'next/link'
import Head from 'next/head'
import LoadImage from '../components/LoadingImage.js'
import Navigation from '../components/Navigation.js'
import styles from './projects.module.css'
import styled from 'styled-components'

const Temp3Link = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

const ProjectLink = styled(Temp3Link)`
  font-family: 'Josefin Sans', sans-serif;
  letter-spacing: 2px;
  font-size: 24px;
  color: #0e19a9;
  &:hover {
    color: blue;
  }
`

const allProjects = [{
    name: "Copy/Paste",
    year: "2018",
    desc: "Series of mixed media collages made from children's books then digitally altered",
    image: "https://res.cloudinary.com/dftvewldz/image/upload/h_250/v1538425934/collages/digital/c1.jpg",
    smallImage:"https://res.cloudinary.com/dftvewldz/image/upload/h_25/v1538425934/collages/digital/c1.jpg",
    alt: "collage",
    tags: ["art"],
    mary: '4',
    link: {internal: true, href:"/gallery", query: {filter: "1"}}
  },{
    name: "ICT VR Research",
    year: "2019",
    desc: "VR Games created for the Institute of Creative Technology for physical therapy resesarch. Uses hand tracking to track how patients practice various arm motions.",
    image: "https://res.cloudinary.com/dftvewldz/image/upload//c_scale,w_667/v1609780336/games/make-it-neat-preview.gif",
    smallImage: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,h_25/v1609780336/games/make-it-neat-preview.gif",
    tags: ["code", "research", "game"],
    mary: '2',
    link: {internal: false, href:"https://www.youtube.com/watch?v=Dvz5tDsmNiM&feature=youtu.be"}
  },{
    name: "Art-Discontent",
    year: "2020",
    desc: "Profiles on young artistic practices. Website, interviews, and articles all created by me.",
    image: "https://res.cloudinary.com/dftvewldz/image/upload//c_scale,w_667/v1609866701/previews/art-discontent-preview.gif",
    smallImage: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,h_25/v1609866701/previews/art-discontent-preview.gif",
    tags: ["art", "code", "writing"],
    mary: '1',
    link: {internal: false, href:"https://art-discontent.com/"}
  },{
    name: "Off the Record",
    year: "2020",
    desc: "Text based game about the experience of journalists of color for Study Hall. Interface created by me.",
    image: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_667/v1609866836/off-the-record-preview.png",
    smallImage: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,h_25/v1609866836/off-the-record-preview.png",
    tags: ["freelance", "games", "code"],
    mary: '2',
    link: {internal: false, href:"https://studyhall.xyz/off-the-record/"}
  },{
    name: "Vaporsquare",
    year: "2018",
    desc: "An interactive installation exploring promised technological paradise, obsolescense, and unknown systems.",
    image: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_667/v1535237063/vaporsquare/cmr2.gif",
    smallImage: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,h_25/v1535237063/vaporsquare/cmr2.gif",
    tags: ["art"],
    mary: '1',
    link: {internal: true, href:"/gallery", query: {filter: "0"}}
  },{
    name: "Publications",
    year: "2020",
    desc: "Various prints, zines, and sketchbooks in an online format.",
    image: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_667/v1610603060/publicationsPreview.png",
    smallImage: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,h_25/v1610603060/publicationsPreview.png",
    tags: ["art", "writing"],
    mary: '3',
    link: {internal: true, href:"/projects/publications", query: {}}
  },{
    name: "Alexa, the Acousmatic Voice",
    year: "2020",
    desc: "Web sound sequencer and essay about the source of Amazon's Alexa",
    image: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_667/v1609867855/games/acousmaticalexa.png",
    smallImage: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,h_25/v1609867855/games/acousmaticalexa.png",
    tags: ["art", "writing", "code"],
    mary: '5',
    link: {internal: false, href:"https://acousmatic-alexa.glitch.me/"}
  },{
    name: "Vaporwave, the Eclectic Aesthetic about Time",
    year: "2019",
    desc: "Web Image Generator and essay about the visual inspirations of Vaporwave aesthetics",
    image: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_667/v1580524622/games/vaporwavegen.png",
    smallImage: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,h_25/v1580524622/games/vaporwavegen.png",
    tags: ["art", "writing", "code"],
    mary: '3',
    link: {internal: false, href:"https://vaporwave-generator.glitch.me/"}
}];

const tags = ["art", "code", "freelance", "research", "games", "vr/ar", "writing"];

function init_filterTags(tag){
  if (tag && tags.includes(tag)){
    return [tag];
  } else {
    return [];
  }
}

function init_filters(tag){
  if (tag && tags.includes(tag)){
    let projs = allProjects.filter((p) =>  p.tags.includes(tag));
    return projs;
  } else {
    return allProjects;
  }
}

function init_filterButtonStates(tag){
  let a = new Array(tags.length);
  for (let i = 0; i < a.length; ++i) { a[i] = false; }
  if (tag && tags.includes(tag)){
    a[tags.indexOf(tag)] = true
  }
  return a;
}

const Art = () => {
  const router = useRouter()

  const [filterTags, setFilterTags] = useState(init_filterTags(router.query.filter));
  const [filterButtonStates, setFilterButtonStates] = useState(init_filterButtonStates(router.query.filter));
  const projects= allProjects;
  const [filteredProjects, setFilteredProjects] = useState(init_filters(router.query.filter));

  const filterResults = (tag) => {
    let copy  = [...filterTags];
    let states = [...filterButtonStates]

    if (filterTags.includes(tag)){
      let index = copy.indexOf(tag);
      copy.splice(index, 1);
      states[tags.indexOf(tag)] = false;
    } else {
      copy.push(tag);
      states[tags.indexOf(tag)] = true;
    }

    let projs = allProjects.filter((p) => {
      return copy.every( t => p.tags.includes(t) )
    });

    setFilterTags(copy);
    setFilterButtonStates(states);
    setFilteredProjects(projs);
  }

  const filterOrder = () => {
    let filter = document.getElementById('filterOrder')
    let orderedProjects = [...filteredProjects];

    switch(filter.value){
      case "year_desc":
        orderedProjects = orderedProjects.sort(function(a,b) {
          return parseInt(b.year) - parseInt(a.year);
        })
        break;
      case "year_asc":
        orderedProjects = orderedProjects.sort(function(a,b) {
          return parseInt(a.year) - parseInt(b.year);
        })
        break;
      case "mary":
        orderedProjects = orderedProjects.sort(function(a,b) {
          return parseInt(a.mary) - parseInt(b.mary);
        });
        break;
      }

      setFilteredProjects(orderedProjects);
  }

  const clearFilters = () => {
    let a = [...filterButtonStates];
    for (let i = 0; i < a.length; ++i) {
      a[i] = false;
    }
    setFilterTags([]);
    setFilterButtonStates(a);
    setFilteredProjects(allProjects);
  }

  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Mary Truong is an artist, coder, and writer. Her site documents various things she makes." />
        <link rel="canonical" href="https://marytruong.com/projects" />
      </Head>
      <div className={"navContainer"}>
        <Navigation/>
      </div>

      <div className={styles.projectPageContainer}>

      <div>
      <div className={styles.filterTitle}>Filter Projects</div>
      <div className={styles.filterTagContainer}>
        <div className={styles.filterControls}>
        <select className={styles.filterOrder} id="filterOrder" onChange={() => filterOrder()}>
            <option value="year_desc">Year ▼</option>
            <option value="year_asc">Year ▲</option>
            <option value="mary">Mary's Favs</option>
        </select>
        <button className={styles.clearButton} onClick={() => clearFilters()}>Clear Filters</button>
        </div>
        <div className={styles.filterTags}>
        {tags.map((tag, i) => {
           return(
             <button
              key = {tag}
              className={filterButtonStates[i] ? `${styles.filterButton} ${styles.toggled}` : `${styles.filterButton} ${styles.untoggled}`}
              onClick={() => filterResults(tag)}
             >
               {tag}
               {filterButtonStates[i] &&
                 <i className={`material-icons ${styles.removeIcon}`}>close</i>
               }
             </button>
           )
         })}
         </div>
        </div>
      </div>

        <div className={styles.projectsContainer}>

       {filteredProjects.length == 0
         ? <div>
           <div className={styles.topBar}></div>
             <div className={styles.projectContainer}>
             <div className={styles.projectTextContainer}>
             <div className={styles.projectNameContainer}>
               <span></span>
             </div>
             <div className={styles.projectDesc}>
             Yikes! No project matches these filters! Try adjusting the filters ⬅ here ⬅ !
             </div>
             </div>
           <img className={styles.previewImage} src="https://res.cloudinary.com/dftvewldz/image/upload/v1610068685/cryingcat.jpg" />
           </div>
         </div>
         : filteredProjects.map((project, i) => {
           return (
             <div key={`${project.name}`} >
               <div className={styles.topBar}></div>
               <div className={styles.projectContainer}>
                 <div className={styles.projectTextContainer}>
                 <div className={styles.projectNameContainer}>
                  { project.link.internal
                    ? <ProjectLink
                        className={styles.projectName}
                        href={{pathname: project.link.href, query: project.link.query}}
                      >
                        {project.name}
                      </ProjectLink>
                    : <a className={styles.projectName} href={project.link.href} target="_blank">{project.name}</a>
                  }
                   <span className={styles.projectYear}>  {project.year}</span>
                 </div>
                 <div className={styles.projectDesc}>
                 {project.desc}
                 </div>
               </div>

                <LoadImage largeImgSrc={project.image} className={styles.projectImg} smallImgSrc={project.smallImage} alt={project.alt} />

               </div>
             </div>

           )
         })
       }
       </div>

      </div>
    </div>
  )
}

Art.getInitialProps = async ({query}) => {
  return { query : query }
}


export default Art;
