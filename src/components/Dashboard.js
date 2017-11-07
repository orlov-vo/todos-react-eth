import React from 'react'
import PropTypes from 'prop-types'
import Container from './Container'
import PageTitle from './PageTitle'

export function Dashboard(props) {
  return (
    <Container tag='main'>
      <p>
        <strong>Congratulations {props.name}!</strong>
        If you're seeing this page, you've logged in with your own smart contract successfully.
      </p>
      <PageTitle title='Dashboard' />
    </Container>
  )
}

Dashboard.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Dashboard
