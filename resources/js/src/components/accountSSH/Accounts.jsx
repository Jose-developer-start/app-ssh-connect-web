import React from 'react'
import ListAccount from '../home/ListAccount'
import Toronto from './Toronto'
import Usa1 from './Usa1'

export default function Accounts() {
    return (

        <ListAccount title={"Servidores gratis 3 días"}>
            {/*<Usa1 /> */}
            <Toronto />
        </ListAccount>
    )
}
