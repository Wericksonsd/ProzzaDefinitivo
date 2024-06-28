import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
class AdminController {
    constructor(username) {
        if (username) {
            this.start(username);
        }
    }
    async start(username) {
        this.adm = await db.admin.findUnique({
            where: {
                username: username,
            },
        });
    }
    async createAdmin(username, password, email, completeName) {
        await db.admin.create({ data: { username: username, password: password, email: email, completeName: completeName } });
    }
    async banUserById(id) {
        const usr = await db.user.findUnique({ where: { id: id } });
        //@ts-ignore
        const ban = await db.userBans.create({ data: { adminId: this.adm.id, userId: usr?.id } });
        await db.user.update({ where: { id: usr?.id }, data: { isBanned: true } });
        if (ban) {
            console.log(`User: (${usr?.id}) - (${usr?.username}): Usuário Banido!`);
        }
        else {
            console.log(`User: (${usr?.id}) - (${usr?.username}): Usuário não banido!`);
        }
    }
    async banUserByEmail(email) {
        const usr = await db.user.findUnique({ where: { email: email } });
        //@ts-ignore
        const ban = await db.userBans.create({ data: { adminId: this.adm.id, userId: usr?.id } });
        await db.user.update({ where: { email: usr?.email }, data: { isBanned: true } });
        if (ban) {
            console.log(`User: (${usr?.id}) - (${usr?.email}): Usuário Banido!`);
        }
        else {
            console.log(`User: (${usr?.id}) - (${usr?.email}): Usuário não banido!`);
        }
    }
    async banUserByUsername(username) {
        const usr = await db.user.findUnique({ where: { username: username } });
        //@ts-ignore
        const ban = await db.userBans.create({ data: { adminId: this.adm.id, userId: usr?.id } });
        await db.user.update({ where: { username: usr?.username }, data: { isBanned: true } });
        if (ban) {
            console.log(`User: (${usr?.id}) - (${usr?.email}): Usuário Banido!`);
        }
        else {
            console.log(`User: (${usr?.id}) - (${usr?.email}): Usuário não banido!`);
        }
    }
}
export default AdminController;
