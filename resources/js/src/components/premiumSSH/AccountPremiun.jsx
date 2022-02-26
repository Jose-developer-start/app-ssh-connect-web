import React from 'react'
import ListAccount from '../home/ListAccount'
import Usa1 from '../cardsAccount/CardPremUsa1'
import CardPremUsa2 from '../cardsAccount/CardPremUsa2'
import CardPremCA from '../cardsAccount/CardPremCA'

export default function AccountPremiun() {
    return (
        <>
        
        <ListAccount title={"Servidores premium 31 días"}>
            {/*<CardPremUsa2 />*/}
            {/*<CardPremCA />*/}
        </ListAccount>
        <ListAccount title={"Servidores premium 15 días"}>
            {/*<Usa1 />*/}
        </ListAccount>
    </>
    )
}
