const users = [
    {
        "id": 1,
        "name": "John Cena",
        "fullname": "John Cena da Silva",
        "username": "johnchina",
        "photo": "https://br.web.img3.acsta.net/pictures/17/06/14/13/48/489688.jpg",
        "email": "johncena@gmail.com",
        "password": "123",
        "status": "Invisível",
        "fone": "0123111",
        "ender": "Rua WWE, 45, - Califórnia - US",
        "link": "/message",
        "admin": false
    },
    {
        "id": 2,
        "name": "Ana Maria",
        "fullname": "Ana Maria Braga",
        "username": "anama",
        "photo": "https://imagem.natelinha.uol.com.br/tudo-sobre/ana_maria_braga_f62b0ebf1bc567fb70a907f0d14e1ed7307456b9_fb1bee214f124fb6daff1eca3fdf88ddad391a78.jpeg",
        "email": "mariaana@gmail.com",
        "password": "123",
        "status": "zerando Elden Ring",
        "fone": "01234561",
        "ender": "Rua Globo, 420, - São Paulo - BR",
        "link": "/ana",
        "admin": false
    },
    {
        "id": 3,
        "name": "Quico",
        "fullname": "Quico Tesouro da Silva",
        "username": "Quico_Lindo",
        "photo": "https://odia.ig.com.br/_midias/jpg/2023/11/22/385x420/1_quico-31208059.jpg",
        "email": "quicao123@gmail.com",
        "password": "123",
        "status": "escondi os cafés de casa.",
        "fone": "01334589",
        "ender": "Vila do Chaves, 53 - Sei lá - MX",
        "link": "/quico",
        "admin": false
    }
]

export const getUsers = async () => {

    return users

}

export const getUser = async (id : number) => {

    return users.find((user) => user.id === id)

}