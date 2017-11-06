import React from 'react'
import PropTypes from 'prop-types'
import Container from './Container'

export function Dashboard(props) {
  return (
    <Container tag='main'>
      <h1>Dashboard</h1>
      <p>
        <strong>Congratulations {props.name}!</strong>
        If you're seeing this page, you've logged in with your own smart contract successfully.
      </p>
    </Container>
  )
}

Dashboard.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Dashboard
