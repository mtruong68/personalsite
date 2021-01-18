import React from 'react'
import GenericLink from '../../components/GenericLink.js'
import Navigation from '../../components/Navigation.js'

import styles from './publications.module.css'

const pages = [
    { color: '#ce83af', img:"https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1538425968/collages/digital/c11.jpg", text: "hewwo pg 1"},
    { color: '#ce83af', img:"https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1538425969/collages/digital/c6.jpg", text: "hola pg 2"},
    { color: '#e2d7bb', img:"https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1538425943/collages/digital/c8.jpg", text: "this is pg 3 :)" },
    { color: '#e2d7bb', img:"https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1538425955/collages/digital/c5.jpg", text: "xoxoxo pg 4" },
    { color: '#ce83af', img:"https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1538425941/collages/digital/c7.jpg", text: "lolololol pg 5"  },
    { color: '#ce83af', img:"https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1538425934/collages/digital/c1.jpg", text: "hihihi pg 6" },
    { color: '#e2d7bb', img:"https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1538425963/collages/digital/c4.jpg", text: "ciao es pg 7" },
    { color: '#e2d7bb', img:"https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1538425972/collages/digital/c12.jpg", text: "keep going its pg 8"},
    { color: '#ce83af', img:"https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1538425933/collages/digital/c2.jpg", text: "almost there pg 9" },
    { color: '#ce83af', img:"https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1538425966/collages/digital/c10.jpg", text: "final pg 10" }
];

const artistStatement = [
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760462/publications/artiststatement/1.gif' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760462/publications/artiststatement/2.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760468/publications/artiststatement/3.gif' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760464/publications/artiststatement/4.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760467/publications/artiststatement/5.gif' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760465/publications/artiststatement/6.gif' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760472/publications/artiststatement/7.gif' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760470/publications/artiststatement/8.gif' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760470/publications/artiststatement/9.gif' }
];

const cropped = [
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760514/publications/cropped/1.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760523/publications/cropped/2.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760536/publications/cropped/3.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760541/publications/cropped/4.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760548/publications/cropped/5.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760531/publications/cropped/6.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760537/publications/cropped/7.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760548/publications/cropped/8.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760556/publications/cropped/9.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760559/publications/cropped/10.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760554/publications/cropped/11.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760572/publications/cropped/13.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760569/publications/cropped/14.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760573/publications/cropped/15.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760575/publications/cropped/16.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760575/publications/cropped/17.jpg' }
];


const blaze = [
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767947/publications/blaze/1.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767944/publications/blaze/2.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767956/publications/blaze/3.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767959/publications/blaze/4.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767949/publications/blaze/5.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767961/publications/blaze/6.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767951/publications/blaze/7.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767962/publications/blaze/8.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767969/publications/blaze/9.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767962/publications/blaze/10.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767971/publications/blaze/11.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767971/publications/blaze/12.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767973/publications/blaze/13.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767974/publications/blaze/14.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767971/publications/blaze/15.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767976/publications/blaze/16.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535767978/publications/blaze/17.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760298/publications/blaze/18.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760290/publications/blaze/19.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760303/publications/blaze/20.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760299/publications/blaze/21.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760304/publications/blaze/22.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760305/publications/blaze/23.jpg' },
{ color: "#262626", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760304/publications/blaze/24.jpg' },
{ color: "#1f2021", img: 'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760306/publications/blaze/25.jpg' }
];

const recede = [
{ color: "#1f2021", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764129/publications/recede/Page_1.jpg' },
{ color: "#262626", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764127/publications/recede/Page_2.jpg' },
{ color: "#1f2021", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764154/publications/recede/Page_3.jpg' },
{ color: "#262626", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764162/publications/recede/Page_4.jpg' },
{ color: "#1f2021", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764231/publications/recede/Page_5.jpg' },
{ color: "#262626", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764220/publications/recede/Page_6.jpg' },
{ color: "#1f2021", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764221/publications/recede/Page_7.jpg' },
{ color: "#262626", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764199/publications/recede/Page_8.jpg' },
{ color: "#1f2021", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764219/publications/recede/Page_9.jpg' },
{ color: "#262626", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764232/publications/recede/Page_10.jpg' },
{ color: "#1f2021", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764234/publications/recede/Page_11.jpg' },
{ color: "#262626", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764270/publications/recede/Page_12.jpg' },
{ color: "#1f2021", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764273/publications/recede/Page_13.jpg' },
{ color: "#262626", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764272/publications/recede/Page_14.jpg' },
{ color: "#1f2021", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764277/publications/recede/Page_15.jpg' },
{ color: "#262626", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764275/publications/recede/Page_16.jpg' }
]

const sorry = [
{ color: "#1f2021", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764423/publications/sorryzine/Untitled-1.jpg'},
{ color: "#262626", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764423/publications/sorryzine/Untitled-2.jpg'},
{ color: "#1f2021", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764403/publications/sorryzine/3.jpg'},
{ color: "#262626", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764404/publications/sorryzine/4.jpg'},
{ color: "#1f2021", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764407/publications/sorryzine/5.jpg'},
{ color: "#262626", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764408/publications/sorryzine/6.jpg'},
{ color: "#1f2021", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764414/publications/sorryzine/7.jpg'},
{ color: "#262626", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764413/publications/sorryzine/8.jpg'},
{ color: "#1f2021", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764420/publications/sorryzine/9.jpg'},
{ color: "#262626", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764414/publications/sorryzine/10.jpg'},
{ color: "#1f2021", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764423/publications/sorryzine/11.jpg'},
{ color: "#262626", img:'https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535764417/publications/sorryzine/12.jpg'}
]

const books = [
  {name: "artist statement", book: artistStatement},
  {name: "sorry",book: sorry},
  {name: "blaze",book: blaze},
  {name: "recede",book: recede},
  {name: "cropped", book: cropped}
]

class Publications extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currIdx: 0,
      bookIdx: 0,
      isTurning: false
    }
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  turnRight(e) {
    if (e.target.parentNode.parentNode.parentNode.classList.contains(styles.left)){
      //this is a sad fix
      this.turnLeft()
      return
    }

    let bookIdx = this.state.bookIdx;

    if (!this.state.isTurning && !(this.state.currIdx >= books[bookIdx].book.length - 1)){
      this.setState({isTurning: true}, () => {

        let rightCard = document.querySelectorAll(`.${styles.card}.${styles.right}`)[0];
        let leftCard = document.querySelectorAll(`.${styles.card}.${styles.left}`)[0];
        let next = document.getElementById("next");
        let prev = document.getElementById("prev");

        rightCard.style.zIndex = 3;
        rightCard.classList.toggle(styles.is_flipped);
        next.classList.remove(styles.hidden);

        if (this.state.currIdx + 2 >= books[bookIdx].book.length){
          next.classList.add(styles.hidden);
          rightCard.classList.remove(styles.hidden)
        }

        //this.setBackgroundColors('right');

        setTimeout(() => {
          leftCard.classList.remove(styles.hidden);
          this.pageRight();
          this.setState({isTurning: false});
          if (this.state.currIdx >= books[bookIdx].book.length){
            prev.classList.remove(styles.hidden);
          }
        }, 800);
      });
    }
  }

  turnLeft() {
    if (!this.state.isTurning && this.state.currIdx > 0){
      this.setState({isTurning: true}, () => {
        let rightCard = document.querySelectorAll(`.${styles.card}.${styles.right}`)[0];
        let leftCard = document.querySelectorAll(`.${styles.card}.${styles.left}`)[0];
        let next = document.getElementById("next");
        let prev = document.getElementById("prev");

        leftCard.style.zIndex = 3;
        leftCard.classList.toggle(styles.is_flipped);

        if (this.state.currIdx - 2 > 0){
          prev.classList.remove(styles.hidden);
        } else {
          prev.classList.add(styles.hidden);
        }

        //this.setBackgroundColors('left');

        setTimeout(() => {
          rightCard.classList.remove(styles.hidden);
          this.pageLeft();
          this.setState({isTurning: false});
        }, 800);
      });
    }
  }


  pageLeft(){
    this.setState((prevState) => {
      return {currIdx: prevState.currIdx - 2}
    }, () => {
      let bookIdx = this.state.bookIdx;

      let rightCard = document.querySelectorAll(`.${styles.card}.${styles.right}`)[0];
      let leftCard = document.querySelectorAll(`.${styles.card}.${styles.left}`)[0];
      //if turning to first page, hide the left page
      //after the y rotation
      if (this.state.currIdx == 0){
          leftCard.classList.add(styles.hidden);
      }

      let nextContent = document.querySelectorAll(`#next>.${styles.content}`)[0];
      let rightBackFaceContent = document.querySelectorAll(`.${styles.right}>.${styles.card__face__back}>.${styles.content}`)[0];

      //next page now has the content of the current right page
      nextContent.parentNode.removeChild(nextContent);
      document.getElementById("next").appendChild(rightBackFaceContent)

      //right page has the content of the current left page
      let rightFrontFace = document.querySelectorAll(`.${styles.right}>.${styles.card__face__front}`)[0]
      let rightFrontFaceContent = document.querySelectorAll(`.${styles.right}>.${styles.card__face__front}>.${styles.content}`)[0];
      let rightBackFace = document.querySelectorAll(`.${styles.right}>.${styles.card__face__back}`)[0]

      let leftBackFace = document.querySelectorAll(`.${styles.left}>.${styles.card__face__back}`)[0];
      let leftFrontFace = document.querySelectorAll(`.${styles.left}>.${styles.card__face__front}`)[0];
      let leftBackFaceContent = document.querySelectorAll(`.${styles.left}>.${styles.card__face__back}>.${styles.content}`)[0];
      let leftFrontFaceContent = document.querySelectorAll(`.${styles.left}>.${styles.card__face__front}>.${styles.content}`)[0];

      if (rightFrontFaceContent)
        rightFrontFaceContent.parentNode.removeChild(rightFrontFaceContent);
      rightBackFace.appendChild(leftBackFaceContent);
      //rightBackFace.style.background = books[bookIdx].book[this.state.currIdx].color;
      rightFrontFace.appendChild(leftFrontFaceContent)

      leftFrontFace = document.querySelectorAll(`.${styles.left}>.${styles.card__face__front}`)[0];
      //left page has content of previous page
      let prevContent = document.querySelectorAll(`#prev>.${styles.content}`)[0]
      leftFrontFace.appendChild(prevContent);

      //create back face to left page
      leftBackFace = document.querySelectorAll(`.${styles.left}>.${styles.card__face__back}`)[0];
      let leftImage = this.createPageContent(this.state.currIdx - 2);
      leftBackFace.appendChild(leftImage);

      //reattach the left page
      let cardClone = leftCard.cloneNode(true);
      cardClone.classList.remove(styles.is_flipped);
      cardClone.style.zIndex = 0;

      if (books[bookIdx].book[this.state.currIdx - 1]){
        //cardClone.querySelectorAll(`.${styles.card__face__front}`)[0].style.background = books[bookIdx].book[this.state.currIdx - 1].color;
      }

      leftCard.parentNode.removeChild(leftCard);
      document.querySelectorAll(`.${styles.scene}`)[0].appendChild(cardClone);
      cardClone.onclick = () => this.turnLeft();

      //create the previous page
      let prevImage = this.createPageContent(this.state.currIdx - 3);
      document.getElementById("prev").appendChild(prevImage);
      if (this.state.currIdx - 3 >= 0){
        //document.getElementById("prev").style.background = books[bookIdx].book[this.state.currIdx-3].color;
      } else {
        prev.classList.add(styles.hidden);
      }
    })
  }

  pageRight() {
    this.setState((prevState) => {
      return {currIdx: prevState.currIdx + 2}
    }, () => {
      let bookIdx = this.state.bookIdx

      let rightCard = document.querySelectorAll(`.${styles.card}.${styles.right}`)[0];
      let leftCard = document.querySelectorAll(`.${styles.card}.${styles.left}`)[0];
      let prevContent = document.querySelectorAll(`#prev>.${styles.content}`)[0];
      let leftFrontFaceContent = document.querySelectorAll(`.${styles.left}>.${styles.card__face__front}>.${styles.content}`)[0];

      //if turning to the last page, hide the right page
      if (this.state.currIdx >= books[bookIdx].book.length){
        rightCard.classList.add(styles.hidden)
      }

      //previous page now has content of the current left page
      prevContent.parentNode.removeChild(prevContent);
      document.getElementById("prev").appendChild(leftFrontFaceContent);


      let rightFrontFace = document.querySelectorAll(`.${styles.right}>.${styles.card__face__front}`)[0]
      let rightBackFace = document.querySelectorAll(`.${styles.right}>.${styles.card__face__back}`)[0]
      let rightFrontFaceContent = document.querySelectorAll(`.${styles.right}>.${styles.card__face__front}>.${styles.content}`)[0];
      let rightBackFaceContent = document.querySelectorAll(`.${styles.right}>.${styles.card__face__back}>.${styles.content}`)[0];

      let leftBackFace = document.querySelectorAll(`.${styles.left}>.${styles.card__face__back}`)[0];
      let leftFrontFace = document.querySelectorAll(`.${styles.left}>.${styles.card__face__front}`)[0];
      let leftBackFaceContent = document.querySelectorAll(`.${styles.left}>.${styles.card__face__back}>.${styles.content}`)[0];
      leftFrontFaceContent = document.querySelectorAll(`.${styles.left}>.${styles.card__face__front}>.${styles.content}`)[0];

      //left page has content of current right page
      leftBackFaceContent.parentNode.removeChild(leftBackFaceContent);
      if (leftFrontFaceContent)
        leftFrontFaceContent.parentNode.removeChild(leftFrontFaceContent);
      leftBackFace.appendChild(rightBackFaceContent);
      //leftFrontFace.style.background = books[bookIdx].book[this.state.currIdx-1].color;
      leftFrontFace.appendChild(rightFrontFaceContent);

      //right page now has content of next page
      let nextContent = document.querySelectorAll(`#next>.${styles.content}`)[0]
      rightBackFace.append(nextContent);

      //create the back face of the right page (change the front face bc of transformY)
      let rightImage = this.createPageContent(this.state.currIdx + 1);
      rightFrontFace.appendChild(rightImage);


      //reattach the right page
      let cardClone = rightCard.cloneNode(true);
      cardClone.classList.add(styles.is_flipped);
      cardClone.style.zIndex = 0;

      if (books[bookIdx].book[this.state.currIdx]){
        //cardClone.querySelectorAll(`.${styles.card__face__back}`)[0].style.background = books[bookIdx].book[this.state.currIdx].color;
      }
      rightCard.parentNode.removeChild(rightCard);
      document.querySelectorAll(`.${styles.scene}`)[0].appendChild(cardClone);
      cardClone.onclick = (e) => this.turnRight(e);

      //create the next page
      let nextImage = this.createPageContent(this.state.currIdx + 2);
      document.getElementById("next").appendChild(nextImage);
      if (this.state.currIdx + 2 < books[bookIdx].book.length){
        //document.getElementById('next').style.background = books[bookIdx].book[this.state.currIdx + 2].color;
      }
    })
  }


  setBackgroundColors(direction){
    //currIdx indicates the left-most
    let bookIdx = this.state.bookIdx;

    if (direction == 'right'){
      document.querySelectorAll(`.${styles.right}>.${styles.card__face__back}`)[0].style.background = books[bookIdx].book[this.state.currIdx].color;
      document.querySelectorAll(`.${styles.right}>.${styles.card__face__front}`)[0].style.background = books[bookIdx].book[this.state.currIdx + 1].color;
      if (books[bookIdx].book[this.state.currIdx+2])
        document.querySelectorAll(`.${styles.left}>.${styles.card__face__front}`)[0].style.background = books[bookIdx].book[this.state.currIdx + 2].color;
      if (books[bookIdx].book[this.state.currIdx+3])
        document.getElementById("next").style.background = books[bookIdx].book[this.state.currIdx + 3].color;
    } else if (direction == 'left'){
      document.querySelectorAll(`.${styles.left}>.${styles.card__face__back}`)[0].style.background = books[bookIdx].book[this.state.currIdx - 2].color;
      document.querySelectorAll(`.${styles.left}>.${styles.card__face__front}`)[0].style.background = books[bookIdx].book[this.state.currIdx - 1].color;
      if (books[bookIdx].book[this.state.currIdx])
        document.querySelectorAll(`.${styles.right}>.${styles.card__face__back}`)[0].style.background = books[bookIdx].book[this.state.currIdx].color;
      if (books[bookIdx].book[this.state.currIdx - 3])
        document.getElementById("prev").style.background = books[bookIdx].book[this.state.currIdx - 3].color;
    }
  }

  createPageContent(idx) {
    let bookIdx = this.state.bookIdx;

    let div = document.createElement('div');
    let img = document.createElement('img');

    div.classList.add(styles.content);

    if (idx >= 0 && idx < books[bookIdx].book.length){
      img.src = books[bookIdx].book[idx].img;
    }

    div.append(img);
    return div;
  }

  changeBook(){
    let idx = document.getElementById('selectBook').value

    this.setState({bookIdx: idx}, () => {
      this.setState({currIdx: 0}, () => {
        let rightFrontFace = document.querySelectorAll(`.${styles.right}>.${styles.card__face__front}`)[0];
        let rightFrontFaceContent = document.querySelectorAll(`.${styles.right}>.${styles.card__face__front}>.${styles.content}`)[0];
        let rightBackFace = document.querySelectorAll(`.${styles.right}>.${styles.card__face__back}`)[0];
        let rightBackFaceContent = document.querySelectorAll(`.${styles.right}>.${styles.card__face__back}>.${styles.content}`)[0];

        let leftFrontFace = document.querySelectorAll(`.${styles.left}>.${styles.card__face__front}`)[0];
        let leftFrontFaceContent = document.querySelectorAll(`.${styles.left}>.${styles.card__face__front}>.${styles.content}`)[0];
        let leftBackFace = document.querySelectorAll(`.${styles.left}>.${styles.card__face__back}`)[0];
        let leftBackFaceContent = document.querySelectorAll(`.${styles.left}>.${styles.card__face__back}>.${styles.content}`)[0];

        let nextContent = document.querySelectorAll(`#next>.${styles.content}`)[0];
        let prevContent = document.querySelectorAll(`#prev>.${styles.content}`)[0];

        rightFrontFaceContent.parentNode.removeChild(rightFrontFaceContent);
        rightBackFaceContent.parentNode.removeChild(rightBackFaceContent);
        leftFrontFaceContent.parentNode.removeChild(leftFrontFaceContent);
        leftBackFaceContent.parentNode.removeChild(leftBackFaceContent);
        nextContent.parentNode.removeChild(nextContent);
        prevContent.parentNode.removeChild(prevContent);


        let rightBack = this.createPageContent(0)
        let rightFront = this.createPageContent(1)
        let next = this.createPageContent(2)
        let empty1 = this.createPageContent(-1)
        let empty2 = this.createPageContent(-1)
        let empty3 = this.createPageContent(-1)

        //prepare right side
        rightBackFace.appendChild(rightBack);
        rightFrontFace.appendChild(rightFront);
        document.getElementById('next').appendChild(next);
        //empty out left side
        leftBackFace.appendChild(empty1);
        leftFrontFace.appendChild(empty2);
        document.getElementById('prev').appendChild(empty3);

        document.querySelectorAll(`.${styles.card}.${styles.right}`)[0].classList.remove(styles.hidden);
        document.querySelectorAll(`.${styles.card}.${styles.left}`)[0].classList.add(styles.hidden);

      })
    });
  }

  render(){
    return (
      <div className={styles.publicationsContainer}>

      <div className={"navContainer"}>
        <Navigation/>
      </div>

      <div className={styles.galleryControls}>
        <GenericLink href="/projects">⬅ Projects</GenericLink>
        <div>
        <span>Publication: </span>
        <select className={styles.select} id="selectBook" onChange={() => this.changeBook()}>
          {books.map((b, i) => {
            return (
              <option value={i} key={b.name}>{b.name}</option>
            )
          })}
        </select>
        </div>
      </div>

      <div className={styles.widthWarning}>
      <div>
        Sorry!! This page is best viewed on a wider screen!
        Try looking at it on desktop or widen your browser window!
      </div>
        <img className={styles.errorImage} src="https://res.cloudinary.com/dftvewldz/image/upload/v1610068685/cryingcat.jpg" />
      </div>

      <div className={styles.book}>
        <div id="leftarrow" className={styles.arrow} onClick={() => this.turnLeft()}>
          <span className="material-icons">
            arrow_back
          </span>
        </div>

        <div className={styles.scene}>
          <div id="prev" className={`${styles.prev} ${styles.hidden}`}>
            <div className={styles.content}></div>
        </div>

          <div className={`${styles.card} ${styles.left} ${styles.hidden}`} onClick={() => this.turnLeft()}>
            <div className={`${styles.card__face} ${styles.card__face__front}`}>
              <div className={styles.content}></div>
            </div>
            <div className={`${styles.card__face} ${styles.card__face__back}`}>
              <div className={styles.content}></div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.right} ${styles.is_flipped}`} onClick={(e) => this.turnRight(e)}>
            <div className={`${styles.card__face} ${styles.card__face__front}`}>
              <div className={styles.content}>
                <img
                  src="https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760462/publications/artiststatement/2.jpg"
                />
              </div>
            </div>
            <div className={`${styles.card__face} ${styles.card__face__back}`}>
              <div className={styles.content}>
                <img
                  src="https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760462/publications/artiststatement/1.gif"
                />
              </div>
            </div>
          </div>

          <div id="next" className={styles.next}>
            <div className={styles.content}>
              <img
                src="https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_450/v1535760468/publications/artiststatement/3.gif"
              />
            </div>
          </div>
        </div>

        <div id="right-arrow" className={styles.arrow} onClick={(e) => this.turnRight(e)}>
          <span className="material-icons">
            arrow_forward
          </span>
        </div>
      </div>

    </div>
    )
  }
}

export default Publications;
