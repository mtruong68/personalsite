import Link from 'next/Link'
import styled from 'styled-components'

const Temp2Link = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

const GenericLink = styled(Temp2Link)`
  color: white;
  text-decoration: none;
  border-bottom: solid 1px white;
  padding-bottom: 2px;
  &:hover {
    color: #59feff;
    border-bottom: solid 1px #59feff;
  }
`

export default GenericLink;
