import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import block from 'bem-cn-lite'

import './Logotype.scss'

const b = block('logotype')
export function Logotype(props) {
  return (
    <Link to='/' className={b({ [props.mod]: true })}>
      TODO List D-App
    </Link>
  )
}

Logotype.propTypes = {
  mod: PropTypes.string,
}

export default Logotype
