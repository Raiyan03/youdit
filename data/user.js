import { db } from "@/lib/db"

export const createUser = async () => {
    const name = "test"
    const email = "test@test.com"
    const password = "test"
    await db.user.create({
        data : {
            name,
            email,
            password
        }
    })
}