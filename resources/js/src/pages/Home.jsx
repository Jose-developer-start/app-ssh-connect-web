import React from 'react'
import Accounts from '../components/accountSSH/Accounts'

import Header from '../components/home/Header'
import Info from '../components/home/Info'
import Info_ssh from '../components/home/Info_ssh'

export default function Home() {
    return (
        <>
            <Header />
            <Info />
            
            <Accounts />

            <Info_ssh />
        </>
    )
}
