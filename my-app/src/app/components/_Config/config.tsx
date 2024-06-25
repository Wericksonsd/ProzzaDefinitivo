import styles from "./config.module.css"

const Config = () => {

    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <img className={styles.profilePic} src="../Screenshot_1.png" alt="" />
                <h1>Name</h1>
                <h3>psaioheioh eioh e  hie</h3>
            </div>
            <div className={ styles.buttons }>
                <button className={styles.block}>AAAAA</button>
                <button className={styles.delete}>BBBBB</button>
            </div>

        </div>
    )
}

export default Config