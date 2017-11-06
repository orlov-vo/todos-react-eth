import React from 'react'
import PropTypes from 'prop-types'
import block from 'bem-cn-lite'

import './Container.scss'

const b = block('container')
export function Container(props) {
  const Tag = props.tag || 'div'
  return <Tag className={b()}>{props.children}</Tag>
}

Container.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Container
