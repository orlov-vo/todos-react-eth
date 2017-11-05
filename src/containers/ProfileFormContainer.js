import { connect } from 'react-redux'

import ProfileForm from './ProfileForm'
import updateUser from '../helpers/updateUser'

const mapStateToProps = (state) => {
  return {
    name: state.user.data.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onProfileFormSubmit: (name) => {
      dispatch(updateUser(name))
    }
  }
}

export const ProfileFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm)

export default ProfileFormContainer
