import React from 'react'
import PropTypes from 'prop-types'
import block from 'bem-cn-lite'
import Container from './Container'

import './Navbar.scss'

const b = block('navbar')
export function Navbar({ left, middle, right }) {
  return (
    <div className={b()}>
      <Container>
        <div className={b('wrap')}>
          <div className={b('menu', { left: true })}>{left}</div>
          <div className={b('menu', { middle: true })}>{middle}</div>
          <div className={b('menu', { right: true })}>{right}</div>
        </div>
      </Container>
    </div>
  )
}

Navbar.propTypes = {
  left: PropTypes.node,
  middle: PropTypes.node,
  right: PropTypes.node,
}

export default Navbar
