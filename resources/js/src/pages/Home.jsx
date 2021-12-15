import React from 'react'
import Header from '../components/home/Header'
import Info from '../components/home/Info'
import ListAccount from '../components/home/ListAccount'
import WebsocketAccount from '../components/home/WebsocketAccount'

export default function Home() {
    return (
        <>
            <Header />
            <Info />
            <ListAccount />
        </>
    )
}
