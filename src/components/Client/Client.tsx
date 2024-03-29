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
            e.target.classList.add('bg-zinc-700')
            updateMessage(`Current topic.`,`${selectedTopic}`, 'addSystem')
        } else {
            if (chosenTopic === selectedTopic) {
                e.target.classList.remove(`bg-zinc-700`)
                setChosenTopic('')
                updateMessage(`No topic.`, '', 'addSystem')
            } else {
                /* UNSELECT PREVIOUS */
                document.querySelector(`form#select_${chosenTopic}`)?.classList.remove(`bg-zinc-700`)

                /* SELECT CURRENT */
                e.target.classList.add(`bg-zinc-700`)
                setChosenTopic(selectedTopic)
                updateMessage('Current topic.', `${selectedTopic}`, 'addSystem')

            }
        }
    }

    return (

        <div className='w-full grid gap-1 mt-1 sm:mt-0'>

            {client && client.options &&
                <>
                    <div className='border-2 grid gap-1 py-6 px-4 rounded-lg border-zinc-800 bg-zinc-900'>

                        <div className='grid grid-rows-2 gap-2 '>

                            <table className='border-2 border-collapse w-full'>
                                <tbody>
                                    <tr className='h-1'>
                                        <th className='table-list bg-zinc-100 border-zinc-600 text-zinc-800'>User</th>
                                        <th className='table-list bg-zinc-100 border-zinc-600 text-zinc-800'>Server</th>
                                    </tr>
                                    <tr className='h-1'>
                                        <td className='table-list text-sm bg-zinc-100 border-zinc-800 text-zinc-800 text-center sm:text-base'>
                                            {client.options.clientId}
                                        </td>
                                        <td className='table-list text-sm bg-zinc-100 border-zinc-800 text-zinc-800 text-center sm:text-base'>
                                            {client.options.host}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <form onSubmit={handleSubscribe} className='grid gap-1'>

                                <div className='grid gap-2 text-zinc-100'>

                                    <label htmlFor="topic">
                                        Enter the topic you want to subscribe: 
                                    </label>

                                    <input 
                                        type="text"
                                        name='topic'
                                        onChange={(e) => setTopic(e.target.value)}
                                        value={topic}
                                        className='border-2 border-zinc-800 rounded-lg text-lg p-1 text-black w-full'
                                    />

                                </div>

                                {subLoading && 
                                    <input type="submit" 
                                    readOnly
                                    value='Subscribing to topic...' 
                                    disabled 
                                    className='form-button mt-2 hover:border-zinc-100'
                                    />
                                }

                                {unsubLoading && 
                                    <input type="submit" 
                                    readOnly
                                    value='Unsubscribing from topic...' 
                                    disabled 
                                    className='form-button mt-2 hover:border-zinc-100'
                                    />
                                }

                                {!subLoading && !unsubLoading && 
                                    <input type="submit" 
                                    readOnly
                                    value='Subscribe to topic' 
                                    className='form-button mt-2 bg-zinc-100 hover:border-zinc-100'
                                    />
                                }

                            </form>

                        </div>
                    </div>
                    
                    <div className='border-2 border-zinc-800 rounded-lg py-6 px-4 bg-zinc-900'>

                            <table className='border-2 border-black border-collapse w-full table-fixed'>

                                <tbody>
                                    <tr>
                                        <th className='table-list bg-zinc-100 border-zinc-600 text-zinc-800'>Topic</th> 
                                        <th className='table-list bg-zinc-100 border-zinc-600 text-zinc-800'>Unsub</th>
                                        <th className='table-list bg-zinc-100 border-zinc-600 text-zinc-800'>Use</th>
                                    </tr>

                                    {topics && topics.map((topic) => (
                                        <tr key={topic}>

                                            <td className='table-list text-sm whitespace-nowrap overflow-hidden text-ellipsis bg-zinc-100 border-zinc-600 text-zinc-800 xl:text-base'>
                                                {topic}
                                            </td>

                                            <td className='table-list bg-zinc-100 border-zinc-600 text-zinc-800'>
                                                <form onSubmit={handleUnsubscribe} id={topic}>
                                                    <input 
                                                    type="submit" 
                                                    value='unsub' 
                                                    className='menu-icon border-zinc-600 text-zinc-800 hover:text-zinc-100 hover:bg-zinc-600'/>       
                                                </form>
                                                
                                            </td>
                                            
                                            <td className='table-list bg-zinc-100 border-zinc-600 text-zinc-800'>
                                                <form onSubmit={handleSelect} id={`select_`+topic}>                                          
                                                    <input 
                                                    type="submit" 
                                                    value='use' 
                                                    className='menu-icon  border-zinc-600 text-zinc-800 hover:text-zinc-100 hover:bg-zinc-600'/>                 
                                                </form>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>

                            </table>


                            <div className='grid place-items-center gap-1 px-1 text-zinc-100'>

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

                    <div className='border-2 bg-zinc-700 text-zinc-100 border-zinc-800 rounded-lg max-w-[100vw] overflow-hidden'>

                        <div className='border-b-2 border-zinc-600'>
                            <p className='text-center py-2 break-words font-bold'>CHAT</p>
                        </div>

                        <Chat chosenTopic={chosenTopic}/>

                    </div>
                </>
            }
            
        </div>
    )
}

export default Client