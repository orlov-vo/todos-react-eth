import React from 'react'
import PropTypes from 'prop-types'
import block from 'bem-cn-lite'
import { Link } from 'react-router-dom'

import './Button.scss'

const b = block('btn')
export function Button(props) {
  const mod = {}
  mod[props.mod] = true

  const inner = props.name || props.children
  const elemProps = {
    className: b(mod),
    onClick: props.onClick,
  }

  return props.to ? (
    <Link {...elemProps} to={props.to}>
      {inner}
    </Link>
  ) : props.type ? (
    <button {...elemProps} type={props.type}>
      {inner}
    </button>
  ) : (
    <a {...elemProps} href={props.href || '#'}>
      {inner}
    </a>
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
