import React, {useState, useEffect} from 'react';
//import styled from 'styled-components/macro'
import ProfilePage from './ProfilePage'
import LoginPage from './LoginPage'

export default function App() {
  const [user, setUser] = useState(getFromLocalStorage('user') || {})
  const isLoggedIn = user.password === '1234'
  const isEmpty = user.password == null
  
  function getFromLocalStorage(key) {
    const jsonString = localStorage.getItem(key)
    let data
    try {
      data = JSON.parse(jsonString)
    } catch (error) {}
    return data
  }

  useEffect(() => {(isLoggedIn || isEmpty) && localStorage.setItem('user', 
    JSON.stringify(user))}, [user, isLoggedIn, isEmpty])
    

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


