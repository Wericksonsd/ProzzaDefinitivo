import styles from "./chat.module.css"
import ChatBox from "./chatBox"
import {getUsers} from "@/app/db/users"



const Chat = async () => {

    const users = await getUsers()

    return (
        <div  className={styles.container}>
            {users.map((user : any) =>
                <ChatBox
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    photo={user.photo}
                    status={user.status}
                    link={user.link}/>
            )}
        </div>
    )

}

export default Chat