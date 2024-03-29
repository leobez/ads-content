import { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import usePublishToTopic from '../../hooks/usePublishToTopic'
import ClientContext from '../../context/ClientContext'
import { MQTTClientContextType, Message } from '../../@types/mqtt'

type Props = {
    chosenTopic:string
}

const Chat = ({chosenTopic}: Props) => {

    // Context
    const {messages} = useContext(ClientContext) as MQTTClientContextType
    const {loading, publish} = usePublishToTopic()

    // Component stuff
    const messagesRef:any = useRef()

    // Scroll message into view
    useEffect(() => {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
      }, [messages]);  

    const [chatMessage, setChatMessage] = useState<string>('')

    const handleSubmit = async(e:FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault()
        await publish(chosenTopic, chatMessage)
        setChatMessage('')
    } 

    return (

        <div>

            <div className='h-[350px] overflow-scroll bg-zinc-100' ref={messagesRef}>
                {/* MESSAGES FROM TOPICS */}
                <table className= 'w-full border-collapse'>
                    <tbody>

                        <tr className='sticky top-0'>
                            <th className='table-list border-zinc-800'>Topic</th>
                            <th className='table-list border-zinc-800'>Message</th>
                        </tr>

                        {messages && messages.map((msg:Message, index:number) => ( 
                            <tr key={index}>
                                <td className='table-list border-2 border-zinc-800 bg-zinc-100 text-zinc-800'>{msg.topic}</td>
                                <td className='table-list min-w-40 border-2 border-zinc-800 bg-zinc-100 text-zinc-800'>{msg.message}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>

            {/* FORM TO SUBMIT A MESSAGE */}
             <form onSubmit={handleSubmit} className='p-1 grid gap-1 bg-zinc-800'>

                <div>

                    <input 
                        type="text" 
                        name='chatmessage'
                        onChange={(e) => setChatMessage(e.target.value)}
                        value={chatMessage}
                        className='border-2 border-zinc-800 text-lg p-1 rounded-lg text-black w-full'
                    />
                </div>

                {loading && <input type="submit" value='Sending...' disabled className='form-button bg-zinc-100 text-zinc-800 hover:bg-zinc-800 hover:text-zinc-100'/>}
                {!loading && <input type="submit" value='Send' className='form-button bg-zinc-100 text-zinc-800 hover:bg-zinc-800 hover:text-zinc-100'/>}

            </form>
            
        </div>
    )
}

export default Chat