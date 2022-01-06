import React, { useEffect } from 'react'

export default function ScannerHost() {
    const fethURL = async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await response.json()
        console.log(result)
    }
    useEffect(()=>{
        fethURL()
    },[])
    return (
        <>
            <div className="container">
                <h1>ESCANEAR HOST</h1>

            </div>
        </>
    )
}
