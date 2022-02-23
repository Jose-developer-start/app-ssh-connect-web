import React, { useState, useRef, useEffect } from 'react'
import InfoAccount from '../components/premiumSSH/InfoAccount'

const Payment = () => {
    const [loaded, setLoaded] = useState(false)
    const [accountCreate, setAccountCreate] = useState("");
    const [ssh, setSsh] = useState(sessionStorage.getItem('ssh') || "")
    let payPalRef = useRef()
    const product = {
        price: sessionStorage.getItem('payment') + '.00',
        description: 'Pago de usuario SSH a hive-vpn.tk'
    }
    
    useEffect(() => {
        const script = document.createElement('script')
        script.src =
            'https://www.paypal.com/sdk/js?client-id=ATYhHQHQmLSuWb91fq6uAIBQXW3vmnAPbKJvVkdz9o85qsoI4MB0sG9QOk6IWPBbSj3BkrWrp0hFdsZ4'
        script.addEventListener('load', () => setLoaded(true))
        document.body.appendChild(script)

        if (loaded) {
            setTimeout(() => {
                window.paypal
                    .Buttons({
                        createOrder: (data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        description: product.description,
                                        amount: {
                                            currency_code: 'USD',
                                            value: product.price
                                        }
                                    }
                                ]
                            })
                        },
                        onApprove: async (data, actions) => {
                            const order = await actions.order.capture()
                            if (order.status === 'COMPLETED') {
                                //console.log(order)
                                
                                let data = sessionStorage.getItem('ssh');
                                const BASE_URL_API = location.origin;
                                //Validation create server $2 or $4
                                if(product.price === "2.00"){
                                    const fetchCreatedAccount = async () => {
                                        const result = await fetch(BASE_URL_API + "/api/websockets/premium/usa/us1", {
                                            "method": "POST",
                                            "body": data,
                                            "headers": {
                                                "Accept": "application/json",
                                                "Content-Type": "application/json"
                                            }
                                        });
                                        const dataJson = await result.json();
                                        setAccountCreate(dataJson);
                                        //console.log('CREATED')
                                    }
                                    fetchCreatedAccount();
                                }else{
                                    if(sessionStorage.getItem('country') === "canada"){
                                        const fetchCreatedAccount = async () => {
                                            const result = await fetch(BASE_URL_API + "/api/websockets/premium/ca/toronto1", {
                                                "method": "POST",
                                                "body": data,
                                                "headers": {
                                                    "Accept": "application/json",
                                                    "Content-Type": "application/json"
                                                }
                                            });
                                            const dataJson = await result.json();
                                            setAccountCreate(dataJson);
                                            //console.log('CREATED')
                                        }
                                        fetchCreatedAccount();
                                    }else{
                                        const fetchCreatedAccount = async () => {
                                            const result = await fetch(BASE_URL_API + "/api/websockets/premium/usa/us2", {
                                                "method": "POST",
                                                "body": data,
                                                "headers": {
                                                    "Accept": "application/json",
                                                    "Content-Type": "application/json"
                                                }
                                            });
                                            const dataJson = await result.json();
                                            setAccountCreate(dataJson);
                                            //console.log('CREATED')
                                        }
                                        fetchCreatedAccount();
                                    }
                                    
                                }
                                sessionStorage.removeItem('ssh');
                                setSsh("");
                            }
                        }
                    })
                    .render(payPalRef)
            })
        }
    }, [loaded, product.price, product.description])
    if(accountCreate != ""){
        return (
            <InfoAccount data={accountCreate} />
        )
    }
    //Comprabacion si hay datos de compra
    if(ssh != ""){
        return (
            <div className="img-login">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 mx-auto">
                            <div className="card shadow-lg my-5">
                                <h4 className="text-muted card-header bg-green pb-2">
                                    Estas a punto de pagar la cantidad de : <b>${product.price}</b>
                                </h4>
                                <div className="card-body">
                                    <div ref={v => (payPalRef = v)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className="container">
                <div className="my-5">
                    <div className="alert alert-warning">
                        <h5>No hay compra seleccionada</h5>
                    </div>
                </div>
            </div>
        )
    }

}

export default Payment