import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
class MessageController {
    constructor() {
    }
    async createMsg(content, user) {
        await db.message.create({ data: {
                content: content,
                senderId: user.id
            } });
    }
    async deleteMsg(id) {
        await db.message.delete({ where: { id: id } });
    }
    async updateMsg(id, content) {
        await db.message.update({ where: { id: id }, data: {
                content: content
            } });
    }
}
export default MessageController;
