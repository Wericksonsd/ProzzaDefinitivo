"use client"

import styles from "./message.module.css"
import React,{ useState } from 'react'
import { newMessage } from "@/app/db/messagesDB"

const ChatInput = (props : any) => {

    const [mensagens, setMensagens] = useState();
    const [msgIpt, setMsgIpt] = useState();
    const [id, setId] = useState(1);
    let idM = 6

    const DigitarTexto = (event : any) => {
        setMsgIpt(event.target.value)
    }

    const EnviarMsg = () => {

        const newMsg = {
            name: {msgIpt},
            data: (new Date().getHours()+":"+new Date().getMinutes()),
            senderP: false
        };

        newMessage(id, newMsg)

        console.log (id, newMsg)
    }

    return(

        <div className={styles.inputsField}>
            <input title="message"
                    type="text"
                    placeholder="Digite a Mensagem"
                    onChange={DigitarTexto} />
            <img onClick={EnviarMsg} className={styles.send} src="../send.svg" alt="" />
        </div>

    )
}

export default ChatInput