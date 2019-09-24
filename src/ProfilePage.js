import React from 'react'
import styled from 'styled-components/macro'

export default function ProfilePage({user, onLogout}) {
  function handleLogout(event) {
    event.preventDefault()
    onLogout()
  }
  return (
    <ProfileStyled>
    <h2>Profile</h2>
    <p>{user.email}</p>
    <button onClick={handleLogout}>Logout</button>

    </ProfileStyled>
  )

}
const ProfileStyled = styled.div`
  background-color: lightgray;
  text-align: center;
  button {
    padding: 5px;
    border-radius: 10%
  }
` 