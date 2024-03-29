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

            <div className='h-[350px] overflow-scroll' ref={messagesRef}>
                {/* MESSAGES FROM TOPICS */}
                <table className= 'w-full border-collapse'>
                    <tbody>

                        <tr>
                            <th className='table-list border-black'>Topic</th>
                            <th className='table-list border-black'>Message</th>
                        </tr>

                        {messages && messages.map((msg:Message, index:number) => ( 
                            <tr key={index}>
                                <td className='table-list '>{msg.topic}</td>
                                <td className='table-list min-w-40'>{msg.message}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>

            {/* FORM TO SUBMIT A MESSAGE */}
             <form onSubmit={handleSubmit} className='p-1 grid gap-1'>

                <div>

                    <input 
                        type="text" 
                        name='chatmessage'
                        onChange={(e) => setChatMessage(e.target.value)}
                        value={chatMessage}
                        className='border-2 border-amber-600 text-lg p-1 text-black w-full'
                    />
                </div>

                {loading && <input type="submit" value='Sending...' disabled className='menu-icon'/>}
                {!loading && <input type="submit" value='Send' className='menu-icon'/>}

            </form>
            
        </div>
    )
}

export default Chat