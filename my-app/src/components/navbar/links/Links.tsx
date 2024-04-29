import Link from "next/link";

const Links = () => {

    const links = [
        {
            title: "Messages",
            path: "/",
        },
        {
            title: "Amigos",
            path: "/amigos",
        },
        {
            title: "Opcoes",
            path: "/opcoes",
        },
    ];

    return (
        <div>
            {links.map((link=>(
            <Link href={link.path} key={link.title}>{link.title}</Link>
            )))}
        </div>
    )
}

export default Links