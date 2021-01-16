import Link from 'next/link'
import styles from './404.module.css'
import styled from 'styled-components'

const Link404 = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: #59feff;
    text-decoration: underline;
  }
`

const ErrorPage = () => {
  return (
    <div className={styles.container404}>
      <div className={styles.title}>404 ERROR!</div>
      <img className={styles.errorImage} src="https://res.cloudinary.com/dftvewldz/image/upload/v1610068685/cryingcat.jpg" />
      <div>Did you get lost?</div>
      <div>Here's the way back home!</div>
      <Link404 href="/">⬅ HOME ⬅</Link404>
    </div>
  )
}

export default ErrorPage;
