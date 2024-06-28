import React,{useState} from 'react'

const menssagens = [
    {
        id: 1,
        mensagens: [ 
            {
                idMsg: 1,
                name: "Eae meu mano",
                data: "11:35",
                senderP: false,
            },
            {
                idMsg: 2,
                name: "Eae",
                data: "11:35",
                senderP: true,
            },
            {
                idMsg: 3,
                name: "Na paz?",
                data: "11:36",
                senderP: true,
            },
            {
                idMsg: 4,
                name: "Sauve",
                data: "11:36",
                senderP: false,
            },
            {
                idMsg: 5,
                name: "Como foi o rolê ontem?",
                data: "11:37",
                senderP: true,
            },
            {
                idMsg: 6,
                name: "foi dahora",
                data: "11:36",
                senderP: false,
            },
            ,
            {
                idMsg: 7,
                name: "Encontrei a Ana Maria Braga lá",
                data: "11:37",
                senderP: false,
            },
            {
                idMsg: 8,
                name: "E o Quico?",
                data: "11:38",
                senderP: true,
            }
        ]
    },
    {
        id: 2,
        mensagens: [ 
            {
                idMsg: 1,
                name: "Eae meu mano",
                data: "11:35",
                senderP: false,
            },
            {
                idMsg: 2,
                name: "Eae",
                data: "11:35",
                senderP: true,
            }
        ]
    },
    {
        id: 3,
        mensagens: [ 
            {
                idMsg: 1,
                name: "Eae maaaaaaaaaaaaaaaaano",
                data: "11:35",
                senderP: false,
            },
            {
                idMsg: 2,
                name: "Eae",
                data: "11:35",
                senderP: true,
            }
        ]
    }
]


const getUserMsg = (id: number) => {
    return menssagens.find((mssg) => mssg.id === id);
}

export const getUserMessages = async (id: number) => {
    const userMessages = getUserMsg(id);
    return userMessages ? userMessages.mensagens : null;
}

export const newMessage = async (id: number, newMsg: any) => {
    const mnsg = getUserMsg(id);
    if (mnsg) {
        const newId = mnsg.mensagens.length > 0 ? mnsg.mensagens[mnsg.mensagens.length - 1].idMsg + 1 : 1;
        mnsg.mensagens.push({
            idMsg: newId,
            ...newMsg
        });
        return mnsg.mensagens;
    } else {
        throw new Error("User not found");
    }
}

