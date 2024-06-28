"use client"

import styles from "./config.module.css"
import React,{useState, useEffect} from 'react'
import PropTypes from "prop-types"

const Config = (props : any) => {


    const [nome, setNome] = useState();    
    const [foto, setFoto] = useState();
    const [nomeC, setNomeC] = useState(props.fullname);       
    const [emaial, setEmaial] = useState(props.email);
    const [status, setStatus] = useState();

    useEffect (() => {

    {
        setNome(props.name),        
        setFoto(props.photo),
        setStatus(props.desc),               
        setNomeC(props.fullname),
        setEmaial(props.email)
    }

})


    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <img className={styles.profilePic} src={foto} alt="" />
                <h1>{nome}</h1>
                <h3>{nomeC}</h3>
                <h3>{status}</h3>
                <div></div>
                <div>{emaial}</div>
            </div>
            <div className={ styles.buttons }>
                <button type="button" className={styles.block}>BLOQUEAR</button>
                <button type="button" className={styles.delete}>DELETAR</button>
            </div>

        </div>
    )
}

Config.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    desc: PropTypes.string,
    administrator: PropTypes.bool
}

Config.defaultProps = {
    name: "John Cena",
    photo: "https://br.web.img3.acsta.net/pictures/17/06/14/13/48/489688.jpg",
    desc: "Invisível",
    fullname: "John Cena da Silva",
    email: "johnzinho123@gmail.com",
    administrator: true,
}

export default Config