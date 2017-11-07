import React from 'react'
import PropTypes from 'prop-types'
import block from 'bem-cn-lite'

import './Badge.scss'

const b = block('badge')
export function Badge({ title, text, icon, mod }) {
  return (
    <span className={b({ [mod]: true }, { 'is-icon-only': !text })} title={title}>
      {!!icon && (
        <span className={b('icon')}>
          <i className={`fa fa-${icon}`} />
        </span>
      )}
      {!!text && <span className={b('text')}>{text}</span>}
    </span>
  )
}

Badge.propTypes = {
  mod: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default Badge
