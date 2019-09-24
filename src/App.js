import React, {useState, useEffect} from 'react';
//import styled from 'styled-components/macro'
import ProfilePage from './ProfilePage'
import LoginPage from './LoginPage'

export default function App() {
  const [user, setUser] = useState({})

  useEffect(() => {

    user.password === '1234' && localStorage.setItem('user', JSON.stringify(user))
  }, [user])
    

  function onLogin(userData) {
    setUser(userData)
  }
  
  function refreshLoginPage() {
    setUser({}) 
  }
  return (
    <div>
      {user.password === '1234' ? (
        <ProfilePage user={user} onLogout={refreshLoginPage}/>
      ) : (
        <LoginPage onSubmit={onLogin} value={user} />
      )}
    </div>
  )
}


