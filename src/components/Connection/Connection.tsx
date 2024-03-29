// Hooks
import { FormEvent, useContext, useEffect, useState } from 'react'
import useConnectToBroker from '../../hooks/useConnectToBroker'

// Context
import ClientContext from '../../context/ClientContext'
import { MQTTClientContextType } from '../../@types/mqtt'

// Components
import Client from '../Client/Client'
import FormButton from './FormButton'

const Connection = () => {

    // Context
    const {client} = useContext(ClientContext) as MQTTClientContextType

    useEffect(() => {
        console.log(client)
    }, [client])

    // Connect hook
    const {connect, connectLoading, disconnect, disconnectLoading} = useConnectToBroker()

    // Component states
    const [connectionString, setConnectionString] = useState<string>('')
    
    const handleConnect = (e:FormEvent<HTMLFormElement>):void => {
        e.preventDefault()
        //const tempConectionStringForTesting = 'ws://broker.hivemq.com:8000/mqtt'
        const tempConectionStringForTesting = 'ws://test.mosquitto.org:8081'
        //connect(connectionString)
        console.log('connecting')
        connect(tempConectionStringForTesting)
    }

    const handleDisconnect = async(e:FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault()
        console.log('diconnecting')
        await disconnect()
    }

    const fillConnect = (e:any):void => {
        setConnectionString(e.target.innerText)
    }

    return (
        <div className='grid-cols-2'>
            <div className='grid px-1'>

                {/* CONNECT FORM */}
                <form onSubmit={handleConnect} className='grid border-x-2 border-amber-600'>

                    <div className='text-xl py-4 px-2 bg-amber-200 text-black text-center'>
                        <p>
                            Connect to an MQTT broker
                        </p>
                    </div>

                    <div className='grid grid-rows-2 py-4 px-2 bg-amber-400 border-y-2 border-amber-600 text-black'>
                        <label 
                        htmlFor="conString" 
                        className='text-lg'>
                            Enter the broker URL:
                        </label>

                        <input 
                        type="text" 
                        name='conString'
                        onChange={(e) => setConnectionString(e.target.value)}
                        value={connectionString}
                        className='border-2 border-amber-600 text-lg p-1 text-black'
                        />
                        
                    </div>

                    <div className='py-4 px-2 bg-amber-200'>
                        <p className='text-lg text-slate-900'>Example of broker URLs:</p>
                        <ul className='grid gap-1'>
                            <li className='item-list text-slate-900' onClick={fillConnect}>
                                ws://broker.hivemq.com:8884/mqtt
                            </li>
                            <li className='item-list text-slate-900' onClick={fillConnect}>
                                ws://test.mosquitto.org:8081
                            </li>
                        </ul>
                    </div>

                    <div>
                        {/* CONNECT BUTTONS */}   
                        {client === null &&
                            <div>
                                {connectLoading && <FormButton value='LC'></FormButton>}
                                {disconnectLoading && <FormButton value='LD'></FormButton>}
                                {!connectLoading  && !disconnectLoading && <FormButton value='C'></FormButton>}
                            </div>
                        }
                    </div>

                </form>

                {/* DISCONNECT FORM */}
                <form onSubmit={handleDisconnect}>
                    {/* DISCONNECT BUTTONS */}   
                    {client !== null && 
                        <div>
                            {connectLoading && <FormButton value='LC'></FormButton>}
                            {disconnectLoading && <FormButton value='LD'></FormButton>}
                            {!connectLoading  && !disconnectLoading && <FormButton value='D'></FormButton>}
                        </div>
                    }
                </form>

            </div>

            {/* STATES FROM CONNECTION */}
            <div>
                {connectLoading && !client && <div><p>Connecting to server...</p></div>}
                {disconnectLoading && client && <div><p>Disconnecting from server...</p></div>}
                {client && <Client/>} 
            </div>
            
        </div>
    )
}

export default Connection