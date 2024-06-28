"use client"

import styles from "./modalprofile.module.css"
import React,{useState, useEffect} from 'react'
import PropTypes from "prop-types"

const ModalProfile = (props:any) => {

    const [nome, setNome] = useState();
    const [foto, setFoto] = useState();
    const [nomeCp, setNomeCp] = useState();
    const [status, setStatus] = useState();
    const [fone, setFone] = useState();
    const [ender, setEnder] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [admin, setAdmin] = useState();
    const [open, setOpen] = useState(false);

    useEffect (() => {

        {
            setNome(props.name),
            setFoto(props.photo),
            setNomeCp(props.fullname),
            setStatus(props.desc),
            setFone(props.cell),
            setEnder(props.endereco),
            setEmail(props.mail),
            setSenha(props.pass),
            setAdmin(props.administrator),
            setOpen(props.modalP)
        }
    },[props])

    const EditarDados = () => {

    }

    const ConfirmarDados = () => {
        setOpen(!open)
    }    

    return (
        <div className={open ? styles.container : styles.containerClosed}>
            <div>
                <div className={styles.foto}>
                    <img className={styles.pfPic} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWmlNKUKoymXswfq_-Au2Qn7E74w-Y2jqF8Sb-tm8qEjbL7bwYkBJem86sNVbc-G8GYY&usqp=CAU" alt="" />
                    <div>
                        <h1>{nome}</h1>
                        <h3>{nomeCp}</h3>
                        <h4>{status}</h4>
                    </div>
                </div>
                <div className={styles.dados}>
                    <p>E-MAIL</p>
                    <h3>{email}</h3>
                </div>
                <div className={styles.dados}>
                    <p>FONE</p>
                    <h3>{fone}</h3>
                </div>
                <div className={styles.dados}>
                    <p>ENDEREÇO</p>
                    <h3>{ender}</h3>
                </div>
                <div className={styles.botoes}>
                    <button type="button" onClick={ConfirmarDados}className={styles.confirmar}>CONFIRMAR</button>
                    <button type="button" onClick={EditarDados} className={styles.editar}>EDITAR</button>
                    <button type="button" className={styles.deslogar}>SAIR DA CONTA</button>
                </div>
            </div>
        </div>
    )

}

ModalProfile.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    fullname: PropTypes.string,
    desc: PropTypes.string,
    cell: PropTypes.string,
    endereco: PropTypes.string,
    mail: PropTypes.string,
    pass: PropTypes.string,
    administrator: PropTypes.bool
}

ModalProfile.defaultProps = {
    name: "Celso Portioli",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWmlNKUKoymXswfq_-Au2Qn7E74w-Y2jqF8Sb-tm8qEjbL7bwYkBJem86sNVbc-G8GYY&usqp=CAU",
    fullname: "Celso Portioli Louvado Seja da Silva",
    desc: "Tirando carteira de piloto",
    cell: "9999999999",
    endereco: "SBT",
    mail: "celsoporteole@gmail.com",
    pass: "11092001",
    administrator: true,
}

export default ModalProfile