import styles from "./message.module.css"
import MessagesCampo from "./messagesCampo/messagesCampo"
import {getUserMessages} from "@/app/db/messagesDB"

const MsgHistory = async (props : any) => {

    const mensagens = await getUserMessages(props.id)

    return (
        <div className={styles.messageCampo}>
            <div className={styles.messages}>
                {mensagens && mensagens.map((msg : any) => (
                    <MessagesCampo
                    key={msg.idMsg}
                    name={msg.name}
                    data = {msg.data}
                    senderP = {msg.senderP}/>
                ))}
            </div>               
        </div>
    )
    
}

export default MsgHistory