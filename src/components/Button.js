import React from 'react'

export function Button(props) {
  return (
    <li className="pure-menu-item">
      <a href="#" className="pure-menu-link" onClick={props.onClick}>{props.name || props.children}</a>
    </li>
  )
}

export default Button
