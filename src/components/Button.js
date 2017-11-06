import React from 'react'
import PropTypes from 'prop-types'

export function Button(props) {
  return (
    <li className='pure-menu-item'>
      <a href='#' className='pure-menu-link' onClick={props.onClick}>
        {props.name || props.children}
      </a>
    </li>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default Button
