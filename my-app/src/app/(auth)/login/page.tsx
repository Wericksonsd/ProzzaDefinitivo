"use client"

import styles from "./login.module.css"
import React, {useState, useEffect} from "react"

const Login = () => {

    const [show, setShow] = useState(true);

    const showLogin = () => {
        setShow (!show)
    }

    return(
        <div className={show ? styles.container : styles.containerNone}>
            <img className={styles.logo} src="../logo.svg" alt="" />
            <div className={styles.aaa}>
                <input type="text" placeholder="USER" name="user" id=""/>
                <input type="password"  placeholder="SENHA" name="pass"/>
                <div className={styles.botoes}>
                    <button type="button" onClick={showLogin}> LOGAR </button>
                    <button type="button"> Criar Conta</button>
                </div>
            </div>
        </div>
    )

}

export default Login