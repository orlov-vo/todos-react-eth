import React from 'react'
import ProfileFormContainer from '../containers/ProfileFormContainer'
import Container from './Container'
import PageTitle from './PageTitle'

export function Profile() {
  return (
    <Container tag='main'>
      <PageTitle title='Profile' />
      <p>Edit your account details here.</p>
      <ProfileFormContainer />
    </Container>
  )
}

export default Profile
