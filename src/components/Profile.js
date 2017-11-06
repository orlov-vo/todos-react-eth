import React from 'react'
import ProfileFormContainer from '../containers/ProfileFormContainer'
import Container from './Container'

export function Profile() {
  return (
    <Container tag='main'>
      <h1>Profile</h1>
      <p>Edit your account details here.</p>
      <ProfileFormContainer />
    </Container>
  )
}

export default Profile
