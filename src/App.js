import React, {useState} from 'react';
//import styled from 'styled-components/macro'
import ProfilePage from './ProfilePage'
import LoginPage from './LoginPage'

export default function App() {
  const [user, setUser] = useState('')
  
  function refreshLoginPage() {
    setUser({}) 
  }
  return (
    <div>
      {user.password === '1234' ? (
        <ProfilePage user={user} onLogout={refreshLoginPage}/>
      ) : (
        <LoginPage onSubmit={setUser} value={user} />
      )}
    </div>
  )
}


