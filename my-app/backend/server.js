import { createServer } from "node:http";
import { Server } from "socket.io";
import AdminController from "./Trollers/AdminController.js";
import UserController from "./Trollers/UserController.js";
import MessageController from "./Trollers/MessageController.js";
const ac = new AdminController();
const uc = new UserController();
const mc = new MessageController();
ac.start("adm1");
const port = Number(process.env.PORT);
const hostname = process.env.SV_HOSTNAME;
let usr = await uc.findUserByUsername("vortex");
console.log(usr);
const httpServer = createServer();
const ioServer = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
ioServer.on("connection", (client) => {
    console.log("Usuário (re)conectado! ID:", client.id);
    client.on("disconnect", () => {
        console.log("Usuário desconectado! ID:", client.id);
    });
    client.on("message", async (username, msg, callback) => {
        try {
            usr = await uc.findUserByUsername(username);
            if (usr) {
                await mc.createMsg(msg, usr);
                console.log(`${username} disse: ${msg}`);
                callback({ status: 200 });
            }
        }
        catch (err) {
            console.error(err);
            callback({ status: 500, error: err });
        }
    });
});
httpServer.listen(port, () => { console.log("Servidor ouvindo em: http://" + hostname + ":" + port); });
