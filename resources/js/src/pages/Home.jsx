import React from 'react'
import Accounts from '../components/accountSSH/Accounts'

import Header from '../components/home/Header'
import Info from '../components/home/Info'
import Info_ssh from '../components/home/Info_ssh'
import AccountPremiun from '../components/premiumSSH/AccountPremiun'

export default function Home() {
    return (
        <>
            <Header />
            <Info />
            
            <AccountPremiun />
            <Accounts />

            <Info_ssh />
        </>
    )
}
