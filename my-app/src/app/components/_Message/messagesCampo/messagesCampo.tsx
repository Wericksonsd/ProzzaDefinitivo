"use client"

import styles from "./messagesCampo.module.css"
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

const MessagesCampo = (props) => {

    const [nome, setNome] = useState();
    const [date, setDate] = useState();
    const [sender, setSender] = useState();

    useEffect( () => {
        setNome (props.name);
        setDate (props.data);
        setSender (props.senderP)
    }
    )

    return (
            <div className={sender ? styles.container : styles.containerSender}>
                <div>
                    <h3>{nome}</h3>
                </div>
                <p>{date}</p>
            </div>
    )

}

MessagesCampo.propTypes = {
    name: PropTypes.string,
    data: PropTypes.string,
    senderP: PropTypes.bool
}

MessagesCampo.defaultProps = {
    name: "NomeUsuário",
    data: "00:00",
    senderP: false
}

export default MessagesCampo