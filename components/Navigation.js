import Link from 'next/link'
import styles from './navigation.module.css'
import styled from 'styled-components'

const TempLink = ({ as, children, className, href }) => (
  <Link href="/">
    <a className={className}>💻🐯🖍️</a>
  </Link>
)

const Navigation = styled(TempLink)`
  color: white;
  text-decoration: none;
  font-size: 26px;
  padding-bottom: 2px;
  &:hover {
    color: #59feff;
  }
`

export default Navigation;
