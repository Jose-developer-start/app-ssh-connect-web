import React from 'react'
import Accounts from '../components/accountsFree/Accounts'
import Cards from '../components/home/Cards'

import Header from '../components/home/Header'
import Info from '../components/home/Info'
import AccountPremiun from '../components/premiumSSH/AccountPremiun'

export default function Home() {
    return (
        <>
            <Header />
            <Info />
            
            <AccountPremiun />
            <Accounts />

            <Cards />
        </>
    )
}
