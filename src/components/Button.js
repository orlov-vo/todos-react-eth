import React from 'react'
import PropTypes from 'prop-types'
import block from 'bem-cn-lite'
import { Link as RouterLink } from 'react-router-dom'
import createElemProps from '../helpers/createElemProps'

import './Button.scss'

const b = block('btn')
export function Button(props) {
  const { elemProps, inner } = createElemProps(b, props)

  return props.to ? (
    <RouterLink {...elemProps} to={props.to}>
      {inner}
    </RouterLink>
  ) : props.href ? (
    <a {...elemProps} href={props.href}>
      {inner}
    </a>
  ) : (
    <button {...elemProps} type={props.type || 'button'}>
      {inner}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string,
  mod: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

Button.defaultProps = {
  mod: 'default',
}

export default Button
