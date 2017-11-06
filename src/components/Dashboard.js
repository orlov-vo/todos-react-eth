import React from 'react'
import PropTypes from 'prop-types'

export function Dashboard(props) {
  return (
    <main className='container'>
      <div className='pure-g'>
        <div className='pure-u-1-1'>
          <h1>Dashboard</h1>
          <p>
            <strong>Congratulations {props.name}!</strong>
            If you're seeing this page, you've logged in with your own smart contract successfully.
          </p>
        </div>
      </div>
    </main>
  )
}

Dashboard.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Dashboard
