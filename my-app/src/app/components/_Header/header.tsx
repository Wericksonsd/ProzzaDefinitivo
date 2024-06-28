"use client"

import styles from "./header.module.css"
import ModalProfile from "../_ModalProfile/modalprofile"
import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types"

const Header = (props : any) => {

    const [nome, setNome] = useState(props.name);
    const [foto, setFoto] = useState(props.photo);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setNome(props.name);
        setFoto(props.photo);
    }, [props.name, props.photo]);

    const ModalOpen = () => {
        setModal(!modal);
    }

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={"../logo.svg"} alt="" />
            <div className={styles.right}>
                <h1>{nome}</h1>
                <img className={styles.profilePic} src={foto} alt="" />
                <img className={styles.config} onClick={ModalOpen} src="../cfg.svg" alt="" />
            </div>
            <ModalProfile modalP={modal}/>
            {modal && <ModalProfile />}
        </div>
    );

}

Header.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    modalP: PropTypes.bool
}

Header.defaultProps = {
    name: "Celso",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWmlNKUKoymXswfq_-Au2Qn7E74w-Y2jqF8Sb-tm8qEjbL7bwYkBJem86sNVbc-G8GYY&usqp=CAU"
}

export default Header
