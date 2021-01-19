import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import styles from './index.module.css'
import styled from 'styled-components'


const PassLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

const StyledLink = styled(PassLink)`
	color: ${props => props.color};
	background-image: ${props => props.gradient};
  background-repeat: no-repeat;
  background-size: 100% 0em;
  background-position: 0 100%;
	text-decoration: none;
  transition: background-size 0.25s ease-in, color .1s ease-in;
	padding: 0px 5px;
  &:hover {
    color: ${props => props.hoverColor};
		background-size: 100% 100%;
	  cursor: pointer;
  }
`

class Index extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', this.scrollHandler);
    console.log(`(●´∀｀）ノ♡ hi!! thank u for visiting my site. you can see the code here:
https://github.com/mtruong68/personalsite`);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler() {
    let left = document.querySelectorAll(`[data-scroll='left']`);
    let right = document.querySelectorAll(`[data-scroll='right']`);
    let left_translate = window.pageYOffset * -.7;
    let right_translate = window.pageYOffset * .7;

    left.forEach( (el) => {
      el.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${left_translate}, 0, 0, 1)`
    });
    right.forEach( (el) => {
      el.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${right_translate}, 0, 0, 1)`
    });
  }

  scrollDown(id){
    let el = document.getElementById(id);
    switch (id){
      case "bio":
        el.scrollIntoView({behavior: "smooth", block:"center"});
        break;
      case "resume":
        el.scrollIntoView({behavior: "smooth", block:"start"});
        break;
    };
  }

	render() {
    return (
  		<div className={styles.indexContainer}>
        <Head>
          <title>marytruong.com</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Mary Truong is an artist, coder, and writer. Her site documents various things she makes." />
          <link rel="canonical" href="http://marytruong.com" />
        </Head>
  			<div className={styles.navigation}>
  			</div>

        <div className={styles.mainLinks}>
        <div data-scroll="left" className={styles.line}>
  				<div className={styles.font3}>
  					MARY
  				</div>
          <div className={styles.circle}></div>
  				<div className={styles.font3}>
  					TRUONG
  				</div>
  			</div>

  			<div data-scroll="right" className={styles.line}>
  			<StyledLink href={{pathname: "/projects", query: { filter: "art"}}}
  				className={styles.font1}
  				color={`white`}
  				hoverColor={`#f5b7c2`}
          gradient={"linear-gradient(0deg, rgba(119,47,167,1) 10%, rgba(179,55,55,1) 50%, rgba(224,139,19,1) 100%)"}
  			>
  				ART
  			</StyledLink>
        <div className={styles.triangle}></div>
				<StyledLink href={{pathname: "/projects", query: { filter: "code"}}}
					className={styles.font2}
					color={`white`}
					hoverColor={`#ffa8fc`}
          gradient={"linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(91,169,185,1) 100%)"}
				>
					TECHNOLOGY
				</StyledLink>
  			</div>

  			<div data-scroll="left" className={styles.line}>
  				<div className={`${styles.font2} ${styles.topLink}`} onClick={this.scrollDown.bind(this, 'resume')}>
  					RESUMÉ
  				</div>
          <div className={styles.rightTriangle}></div>
  				<div className={`${styles.font4} ${styles.topLink}`} onClick={this.scrollDown.bind(this, 'bio')}>
  					ABOUT
  				</div>
  			</div>

				<div data-scroll="right">
					<span className={styles.font5}>THANK YOU</span>
					<span className={styles.font6}>THANK YOU</span>
					<span className={styles.font5}>THANK YOU<br/></span>
					<div className={styles.font7}>
						HAVE A NICE DAY!
					</div>
				</div>
        </div>

        <div className={styles.squiggleOuterWrapper}>
          <div className={styles.squiggleWrapper}>
            <div className={styles.squiggle}></div>
          </div>
        </div>
        <div className={styles.arrow}>▼</div>

  			<div className={styles.bioContainer} id="bio">
        <div className={styles.topBar}>
          <button className={styles.bioExit}><span className={"material-icons"} style={{fontSize: "18px"}}>close</span></button>
        </div>
        <div className={styles.bioText}>
          Welcome to my website! (●’ᴗ’σ)و ̑̑♡<br/><br/>
          I’m Mary (she/hers). I like creating things, so I make art
          (various media: drawing, painting, printmaking, installation),
          code (primarily web apps/games), and write (theoretical essays,
          interviews, and fanfiction). I studied computer science and art
          in undergrad. I usually have a weird project or two on the
          boiler; currently, I'm working on a Marxist web-based incremental game.
          <br/><br/>
          I strongly believe in exposing the means of making so that we can
          learn collectively. This includes making almost all of my code
          publicly available (either on <a href="https://glitch.com/@mtruong68" target="_blank">Glitch</a> or <a href="https://github.com/mtruong68" target="_blank">Github</a>), making art that
          appeals to more than just academics and gallerists (and <i>explaining</i> it),
          and supporting work that is free and accessible
          (fanfiction/Vaporwave/open-source software).
          <br/><br/>
          I also like experimental things: I’ve played around with VR/AR games and apps,
          and I enjoy non-traditional interfaces (miss me with those Bootstrap templates).
          I hope I become known for making weird(ly moving) websites.
          <br/><br/>
          Current likes:
          <a href="https://mangadex.org/title/34327/blue-period" target="_blank">Blue Period</a>,
          <a href="https://open.spotify.com/album/3JX0hnu8b55RtbtEdUSYor" target="_blank">Day6</a>,
          GA (my home state 🍑) flipping <span style={{color:`blue`}}>Blue</span> for Biden & 2 senators,
          <a href="https://www.novelupdates.com/" target="_blank">Chinese webnovels</a>,
          and <a href="https://www.netlify.com/" target="_blank">Netlify</a> for hosting this website for free!
          <br/><br/>
          Contact me @ mtruong68@gmail.com. Thank you for reading, and have a nice day!
        </div>
  			</div>

        <div className={styles.squiggleOuterWrapper}>
          <div className={styles.squiggleWrapper}>
            <div className={styles.squiggle}></div>
          </div>
        </div>
        <div className={styles.arrow}>▼</div>

        <div className = {styles.resume} id="resume">
          <div className={styles.resumeHead}>Resumé</div>

          <div className={styles.resumeHead}>Education & Skills</div>
          <div className={styles.resumePoint}>
            <div className={styles.resumeLoc}>Northwestern University <span className={styles.resumeDate}>2016 - 2020</span></div>
            <div className={styles.resumeTitle}>GPA: 3.95. BA in Computer Science and Art Theory and Practice</div>
            <div className={styles.resumeDesc}>Relevant Coursework: Data Structures, Algorithms, HCI, Machine Learning, Computer Networks, Operating Systems</div>
          </div>

          <div className={styles.resumePoint}>
            <div className={styles.resumeLoc}>Coding</div>
            <div className={styles.resumeDesc}>JS (React, Gatsby, Next, Meteor) & HTML/CSS, Python, C#, Unity</div>
          </div>

          <div className={styles.resumePoint}>
          <div className={styles.resumeLoc}>Art/Design</div>
          <div className={styles.resumeDesc}>Adobe Photoshop, InDesign, Premiere, Game Dev & Design</div>
          </div>

          <div className={styles.resumeHead}>Work Experience</div>
          <div className={styles.resumePoint}>
            <div className={styles.resumeLoc}>Study Hall LLC <span className={styles.resumeDate}>May 2020 - Present</span></div>
            <div className={styles.resumeTitle}>Freelance Interactive Developer</div>
            <div className={styles.resumeDesc}>Coding various news interactives to accompany articles including the interface for a text based game, a branching decision tree, and designing pop-ups for articles</div>
          </div>

          <div className={styles.resumePoint}>
            <div className={styles.resumeLoc}>Institute of Creative Technologies <span className={styles.resumeDate}>June 2019 - Sep 2019</span></div>
            <div className={styles.resumeTitle}>HCI Research Intern</div>
            <div className={styles.resumeDesc}>Designing and developing several VR games for upper extremity physical therapy using handtracking from the Leap Motion SDK on Unity. Iterating on development based on playtesting results. Playable on Oculus Rift and Oculus Quest.</div>
          </div>

          <div className={styles.resumePoint}>
            <div className={styles.resumeLoc}>Knight Lab <span className={styles.resumeDate}>Sep 2016 - March 2020</span></div>
            <div className={styles.resumeTitle}>Student Fellow</div>
            <div className={styles.resumeDesc}>Educating students on emergent media through development of AR and VR games & applications, instructional use, and informational explanatory material.</div>
          </div>

          <div className={styles.resumePoint}>
            <div className={styles.resumeLoc}>Northwestern EECS Department <span className={styles.resumeDate}>Sep 2018 - June 2020</span></div>
            <div className={styles.resumeTitle}>Peer Mentor: Computer Networks & Introduction to Systems</div>
            <div className={styles.resumeDesc}>Hosted weekly office hours, Assistant to grading homework and exams</div>
          </div>

          <div className={styles.resumePoint}>
            <div className={styles.resumeLoc}>DeltaLab <span className={styles.resumeDate}>Jan 2019 - June 2020</span></div>
            <div className={styles.resumeTitle}>Undergraduate Researcher</div>
            <div className={styles.resumeDesc}>HCI researcher studying the development of friendship through a context-aware, mobile applications. Iteratively developed prototypes to facilitate research.</div>
          </div>

          <div className={styles.resumePoint}>
            <div className={styles.resumeLoc}>Virtual Reality Applications Center <span className={styles.resumeDate}>May 2018 - Aug 2018</span></div>
            <div className={styles.resumeTitle}>HCI Intern</div>
            <div className={styles.resumeDesc}>Development of interface to user fatigue while watching a drone swarm.</div>
          </div>

          <div className={styles.resumePoint}>
            <div className={styles.resumeLoc}>University of Chicago Game Changer Design Lab <span className={styles.resumeDate}>June 2017 - Aug 2017</span></div>
            <div className={styles.resumeTitle}>Game Programmer Intern</div>
            <div className={styles.resumeDesc}>Lead designer in a team developing Unity auto-scroller game</div>
          </div>

          <div className={styles.resumeHead}>Projects</div>
          <div className={styles.resumePoint}>
            <div className={styles.resumeLoc}>Art Discontent <span className={styles.resumeDate}>July 2020 - Jan 2021</span></div>
            <div className={styles.resumeTitle}>Web Developer, Designer, Writer</div>
            <div className={styles.resumeDesc}>Created <a href="https://art-discontent.com" target="_blank">Art-Discontent</a> using Gatsby.js, Contentful CMS, and Netlify for deployment. Interviewed 35 artists and wrote articles about their practices.</div>
          </div>
        </div>

          <div>
        </div>
  		</div>
    )
	}
}


export default Index;
