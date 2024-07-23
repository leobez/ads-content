import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.about}>
            
            <div className={styles.textcontainer}>

                <h1>Olá,</h1>

                <p>
                    Este é um projeto simples de um chat que utiliza do protocolo MQTT para o envio e recebimento de mensagens.
                </p>

                <hr />

                <p>
                    O protocolo MQTT funciona com base no padrão Publish/subscribe, em que o usuário deve se inscrever em tópicos para poder receber e enviar mensagens.
                </p>

                <hr />

                <p>
                    Para usar: 
                    <ul>
                        <li>Se conecte a um broker MQTT;</li>
                        <li>Se inscreva em tópicos;</li>
                        <li>Receba mensagem através desses tópicos;</li>
                        <li>Clique no tópico que deseja usar;</li>
                        <li>Envie mensagens para o tópico selecionado;</li>
                    </ul>
                </p>

            </div>    

        </div>
    )
}

export default About