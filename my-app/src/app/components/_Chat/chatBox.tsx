import styles from "./chat.module.css"

const ChatBox = () => {

    return (
        <div className={ styles.containerBox}>
            <div className={ styles.profilePhoto}>
                <img src="../Screenshot_1.png" alt="a" />
            </div>
            <div className={styles.caixaMsg}>
                <h2>NAME</h2>
                <div className={styles.textdate}>
                    <h4>TEXTTEXT</h4>
                    <p>00:00</p>
                </div>
            </div>
        </div>
    )

}

export default ChatBox