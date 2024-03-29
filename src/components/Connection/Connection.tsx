// Hooks
import { FormEvent, useContext, useEffect, useState } from 'react'
import useConnectToBroker from '../../hooks/useConnectToBroker'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Context
import ClientContext from '../../context/ClientContext'
import { MQTTClientContextType } from '../../@types/mqtt'

// Components
import Client from '../Client/Client'
import FormButton from './FormButton'
import Loading from '../Loading/Loading';

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
        <div className='grid'>

            <div className='grid gap-1'>

                {/* CONNECT FORM */}
                <form onSubmit={handleConnect} className='grid bg-zinc-100 gap-1'>

                    <div className='text-xl text-zinc-100 bg-zinc-800 text-center font-bold py-5 px-3 rounded-lg'>
                        <p>
                            Connect to an MQTT broker
                        </p>
                    </div>

                    <div className='grid grid-rows-2 py-5 px-3 bg-zinc-800 rounded-lg text-zinc-100'>
                        <label 
                        htmlFor="conString" 
                        className='text-lg font-bold'>
                            Enter the broker URL:
                        </label>

                        <input 
                        type="text" 
                        name='conString'
                        onChange={(e) => setConnectionString(e.target.value)}
                        value={connectionString}
                        className='text-base p-1 text-black bg-zinc-100 rounded-lg'
                        />
                        
                    </div>

                    <div className='py-5 px-3 grid gap-1 bg-zinc-600 border-2 rounded-lg border-zinc-800'>
                        <p className='text-lg text-zinc-100 font-bold'>Example of broker URLs:</p>
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
            <div className='grid place-items-center gap-1 px-1'>

                {connectLoading && !client && 
                    <>
                       <Loading message='Connecting...'/>
                    </>
                }

                {disconnectLoading && client && 
                    <>
                        <Loading message='Disconnecting...'/>
                    </>
                }

                {client && <Client/>} 

            </div>

        </div>
    )
}

export default Connection