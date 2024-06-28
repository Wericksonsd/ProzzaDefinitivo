import styles from "../components/_Message/message.module.css"
import ChatInput from "../components/_Message/chatInput"
import MsgHistory from "../components/_Message/msgHistoy"

const Message  = () => {
    return (
        <div className={styles.container}>
            <ChatInput/>
            <MsgHistory
            id= {2}/> 
        </div>
    )

}

export default Message