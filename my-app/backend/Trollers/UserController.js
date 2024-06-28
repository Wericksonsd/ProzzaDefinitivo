import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
class UserController {
    async createUser(completeName, username, password, email, telephoneNumber, zip, street, number, complement) {
        const userAlredyExists = await db.user.findUnique({
            where: { username, email },
        });
        if (userAlredyExists) {
            console.error("Usuário já existe!");
            return null;
        }
        const addrAlredyExists = await db.address.findFirst({
            where: { zip: zip, street: street, number: number },
        });
        if (addrAlredyExists) {
            console.error("Endereço de usuário já existe!");
            const usr = await db.user.create({
                data: {
                    completeName: completeName,
                    username: username,
                    password: password,
                    email: email,
                    telephoneNumber: telephoneNumber,
                    addressId: addrAlredyExists.id,
                },
            });
            if (usr) {
                console.log(`User: (${usr.id}) - (${usr.username}): Usuário criado!`);
            }
            else {
                console.log(`User: (${username}): Erro na criação de usuário!`);
            }
            return usr;
        }
        else {
            const addr = await db.address.create({
                data: {
                    zip: zip,
                    street: street,
                    number: number,
                    complement: complement,
                },
            });
            const usr = await db.user.create({
                data: {
                    completeName: completeName,
                    username: username,
                    password: password,
                    email: email,
                    telephoneNumber: telephoneNumber,
                    addressId: addr.id,
                },
            });
            if (usr) {
                console.log(`User: (${usr.id}) - (${usr.username}): Usuário criado!`);
            }
            else {
                console.log(`User: (${username}): Erro na criação de usuário!`);
            }
            return usr;
        }
    }
    async updateUser(user) {
        const usr = await db.user.update({
            where: { id: user.id },
            data: {
                completeName: user.completeName,
                username: user.username,
                password: user.password,
                email: user.email,
                telephoneNumber: user.telephoneNumber,
                addressId: user.addressId,
            },
        });
        if (usr) {
            console.log(`User: (${user.id}) - (${user.username}): Usuário atualizado!`);
        }
        else {
            console.log(`User: (${user.id}) - (${user.username}): Usuário não atualizado!`);
        }
    }
    async updateUserAddress(user, address) {
        const addr = await db.address.findUnique({
            where: { id: user.addressId },
        });
        const upsert = await db.address.upsert({
            where: { id: addr?.id },
            update: {
                zip: address.zip,
                street: address.street,
                number: address.number,
                complement: address.complement,
            },
            create: {
                zip: address.zip,
                street: address.street,
                number: address.number,
                complement: address.complement,
            },
        });
        if (upsert) {
            console.log(`User: (${user.id}) - (${user.username}): Endereço atualizado!`);
            return upsert;
        }
        else {
            console.log(`User: (${user.id}) - (${user.username}): Endereço não atualizado!`);
            return null;
        }
    }
    async findUserById(id) {
        const user = await db.user.findUnique({
            where: { id: id },
        });
        return user;
    }
    async findUserByUsername(username) {
        const user = await db.user.findUnique({
            where: { username: username },
        });
        return user;
    }
    async findUserByEmail(email) {
        const user = await db.user.findUnique({
            where: { email: email },
        });
        return user;
    }
}
export default UserController;
