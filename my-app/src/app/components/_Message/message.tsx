import styles from "./message.module.css"
import MessagesCampo from "./messagesCampo/messagesCampo"
import ChatInput from "./chatInput"
import MsgHistory from "./msgHistoy"

const Message  = (props:any) => {

    let idUser = props.id

    return (
        <div className={styles.container}>
            <ChatInput/>
            <div className={styles.containerDE}>

            </div>
        </div>
    )

}

export default Message