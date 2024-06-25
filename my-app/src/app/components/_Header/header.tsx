import styles from "./header.module.css"

const Header = () => {

    return (
        <div className={styles.container}>
            <img className={styles.logo} src="../logo.svg" alt="" />
            <div className={styles.right}>
                <img className={styles.profilePic} src="../Screenshot_1.png" alt="" />
                <img className={styles.config} src="../cfg.svg" alt="" />
            </div>
        </div>
    )

}

export default Header