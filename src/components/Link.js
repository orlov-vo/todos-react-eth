import React from 'react'
import PropTypes from 'prop-types'
import block from 'bem-cn-lite'
import { Link as RouterLink } from 'react-router-dom'
import createElemProps from '../helpers/createElemProps'

import './Link.scss'

const b = block('link')
export function Link(props) {
  const { elemProps, inner } = createElemProps(b, props)

  return props.to ? (
    <RouterLink {...elemProps} to={props.to}>
      {inner}
    </RouterLink>
  ) : (
    <a {...elemProps} href={props.href || '#'}>
      {inner}
    </a>
  )
}

Link.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  mod: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

Link.defaultProps = {
  mod: 'default',
}

export default Link
