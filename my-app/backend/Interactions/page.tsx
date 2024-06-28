"use client"

import { useState, useEffect } from "react"
import { io } from "socket.io-client"

export default function Chat(){
    const [socket,setSocket] = useState(undefined);
    const username = "vortex";//Isso seria um prop
    const msg="Mensagem teste 1!"//Outro prop
    useEffect(()=>{
        const socket = io("http://localhost:5868");
        socket.on("connect",()=>{
            //ToDo: Alguma saudação em popup se quiser, se não, deixa em branco
        });
        //Esse emit(message) tem q ser colocado em um botão, ou tirado daqui pq ele starta sempre sozinho KKKK, tipo, esse evento foi feito pensando pra ser emitido quando um botão for apertado msm
        socket.emit("message",username,msg,async(res:number)=>{
            if(res==200){
                //ToDo: exibir msg no chat (pega o proprio conteúdo da página, não puxa do bd daí)
            }else{
                //ToDo: exibir popup de erro ao enviar msg
            }
        });
    },[socket]);
    return(
        <h1>Chat</h1>
    )
}