import React from 'react'
import PropTypes from 'prop-types'
import block from 'bem-cn-lite'

import './PageTitle.scss'

const b = block('page-title')
export function PageTitle({ title }) {
  return <h1 className={b()}>{title}</h1>
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitle
