import React from 'react'
import ListAccount from '../home/ListAccount'
import Toronto from '../cardsAccount/CardFreeCA'
import Usa1 from '../cardsAccount/CardFreeUsa1'
import CardFreeV2rayUsa1 from '../cardsAccount/CardFreeV2rayUsa1'

export default function Accounts() {
    return (
        <>
        <ListAccount title={"Servidores gratis 3 días"}>
            <Usa1 />
            <Toronto />
        </ListAccount>
        <ListAccount title={"v2ray de 3 días"}>
            <CardFreeV2rayUsa1 />
        </ListAccount>
        </>
    )
}
