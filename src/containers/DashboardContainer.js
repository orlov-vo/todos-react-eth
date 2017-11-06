import { connect } from 'react-redux'

import Dashboard from '../components/Dashboard'

const mapStateToProps = state => {
  return {
    name: state.user.data.name,
  }
}

export const DashboardContainer = connect(mapStateToProps)(Dashboard)

export default DashboardContainer
