import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserState({children}) {
    const [user,setUser] = useState({});

    const login = (data)=>{
        setUser({...user, data})
    }

    return (
    <UserContext.Provider value={{
        user,login
    }}>
        {children}
    </UserContext.Provider>
  )
}