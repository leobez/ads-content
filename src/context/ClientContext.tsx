import { MqttClient } from "mqtt";
import { ReactNode, createContext, useState } from "react";
import { MQTTClientContextType, Message } from "../@types/mqtt";

export const ClientContext = createContext<MQTTClientContextType|null>(null)

type Props = {
    children: ReactNode
}

export const ClientContextProvider = ({children}:Props) => {

    const [client, setClient] = useState<MqttClient|null>(null)
    const [topics, setTopics] = useState<string[]>([])
    const [messages, setMessages] = useState<Message[]>([])

    const updateClient = (client: MqttClient|null):void => {
        
        setClient(client)

        // Add listener for messages
        if (client) {
            client.on('message', (topic:string, content:any) => {
                const message:Message = {topic: topic, message: content.toString()}
                console.log('New message: ', message)
                setMessages((prev) => [...prev, message])
            })
        }

    }

    const updateTopics = (topic:string, action:string):void => {
        if (action === 'add') {
            setTopics((prev) => [...prev, topic])
        }
        if (action === 'remove') {
            setTopics((prev) => prev.filter((t) => t !== topic))
        }
        if (action === 'reset') {
            setTopics([])
        }
    }

    const updateMessage = (message:string, topic:string, action:string):void => {

        if (action === 'addSystem') {
            const newMessage:Message = {
                message: message,
                topic: topic
            }
            setMessages((prev) => [...prev, newMessage])
        }

        if (action === 'reset') {
            setMessages([])
        }
    }

    return (

        <ClientContext.Provider value={{
            client, updateClient,
            topics, updateTopics,
            messages, updateMessage,
        }}>

            {children}
            
        </ClientContext.Provider>        
    )

}

export default ClientContext