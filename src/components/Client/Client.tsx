import { FormEvent, useContext, useEffect, useState } from 'react'
import useSubscribeToTopic from '../../hooks/useSubscribeToTopic'
import Chat from '../Chat/Chat'
import ClientContext from '../../context/ClientContext'
import { MQTTClientContextType } from '../../@types/mqtt'
import Loading from '../Loading/Loading'

// STYLES ARES USED DYNAMICALLY

const Client = () => {

    // Client context
    const {client, topics, updateMessage} = useContext(ClientContext) as MQTTClientContextType
    useEffect(() => {
        console.log('topics: ', topics)
    }, [topics])

    // Sub hook
    const {subscribe, subLoading, unsubscribe, unsubLoading} = useSubscribeToTopic()

    // Component states
    const [topic, setTopic] = useState<string>('')
    const [chosenTopic, setChosenTopic] = useState<string>('')
    useEffect(() => {
        console.log('chosenTopic: ', chosenTopic)
    }, [chosenTopic])

    const handleSubscribe = async(e:FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault()
        await subscribe(topic)
    }

    const handleUnsubscribe = async(e:any):Promise<void> => {
        e.preventDefault()
        const selectedTopic = e.target.id

        if (chosenTopic === selectedTopic) {
            setChosenTopic('')
        }

        await unsubscribe(selectedTopic)
    }

    const handleSelect = (e:any):void => {
        e.preventDefault()
        
        const selectedId:string = e.target.id
        const selectedTopic:string = selectedId.replace('select_', '') 

        if (chosenTopic === '') {
            setChosenTopic(selectedTopic)
            e.target.classList.add('bg-amber-600')
            updateMessage(`Current topic.`,`${selectedTopic}`, 'addSystem')
        } else {
            if (chosenTopic === selectedTopic) {
                e.target.classList.remove(`bg-amber-600`)
                setChosenTopic('')
                updateMessage(`No topic.`, '', 'addSystem')
            } else {
                /* UNSELECT PREVIOUS */
                document.querySelector(`form#select_${chosenTopic}`)?.classList.remove(`bg-amber-600`)

                /* SELECT CURRENT */
                e.target.classList.add(`bg-amber-600`)
                setChosenTopic(selectedTopic)
                updateMessage('Current topic.', `${selectedTopic}`, 'addSystem')

            }
        }
    }

    return (

        <div className='w-full grid gap-1 relative'>

            {client && client.options &&
                <>
                    <div className='border-2 p-1 mt-1 grid gap-1 border-amber-600 bg-amber-400'>

                        <div className='bg-white p-1 border-2 grid grid-rows-2 gap-2'>

                            <table className='border-2 border-black border-collapse w-full'>
                                <tbody>
                                    <tr className='h-1'>
                                        <th className='table-list border-black'>User</th>
                                        <th className='table-list border-black'>Server</th>
                                    </tr>
                                    <tr className='h-1'>
                                        <td className='table-list text-sm'>
                                            {client.options.clientId}
                                        </td>
                                        <td className='table-list text-sm'>
                                            {client.options.host}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <form onSubmit={handleSubscribe} className='grid gap-1'>

                                <div className='grid gap-1'>

                                    <label htmlFor="topic">
                                        Enter the topic you want to subscribe: 
                                    </label>

                                    <input 
                                        type="text"
                                        name='topic'
                                        onChange={(e) => setTopic(e.target.value)}
                                        value={topic}
                                        className='border-2 border-amber-600 text-lg p-1 text-black w-full'
                                    />

                                </div>

                                {subLoading && 
                                    <input type="submit" 
                                    readOnly
                                    value='Subscribing to topic...' 
                                    disabled 
                                    className='form-button mt-1'
                                    />
                                }

                                {unsubLoading && 
                                    <input type="submit" 
                                    readOnly
                                    value='Unsubscribing from topic...' 
                                    disabled 
                                    className='form-button mt-1'
                                    />
                                }

                                {!subLoading && !unsubLoading && 
                                    <input type="submit" 
                                    readOnly
                                    value='Subscribe to topic' 
                                    className='form-button mt-1'
                                    />
                                }

                            </form>

                        </div>

                        <div className='bg-white border-2 '>

                            <table className='border-2 border-black border-collapse w-full table-fixed'>

                                <tbody>
                                    <tr>
                                        <th className='table-list border-black'>Topic</th>
                                        <th className='table-list border-black'>Unsub</th>
                                        <th className='table-list border-black'>Use</th>
                                    </tr>

                                    {topics && topics.map((topic) => (
                                        <tr key={topic}>

                                            <td className='table-list text-sm whitespace-nowrap overflow-hidden text-ellipsis'>
                                                {topic}
                                            </td>

                                            <td className='table-list'>
                                                <form onSubmit={handleUnsubscribe} id={topic}>
                                                    <input 
                                                    type="submit" 
                                                    value='unsub' 
                                                    className='menu-icon'/>       
                                                </form>
                                                
                                            </td>
                                            
                                            <td className='table-list'>
                                                <form onSubmit={handleSelect} id={`select_`+topic}>                                          
                                                    <input 
                                                    type="submit" 
                                                    value='use' 
                                                    className='menu-icon'/>                 
                                                </form>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>

                            </table>


                            <div className='grid place-items-center gap-1 px-1'>

                                {subLoading && 
                                    <>
                                        <Loading message='Subscribing...'/>
                                    </>
                                }

                                {unsubLoading && 
                                    <>
                                        <Loading message='Unsubscribing...'/>
                                    </>
                                }

                            </div>

                        </div>

                    </div>
                    
                    <div 
                        className='border-2 border-amber-600 max-w-[97vw]'>

                        <div className='border-b-2 border-amber-600'>
                            <p className='text-center py-2 break-words'>CHAT</p>
                        </div>

                        <Chat chosenTopic={chosenTopic}/>

                    </div>
                </>
            }
            
        </div>
    )
}

export default Client