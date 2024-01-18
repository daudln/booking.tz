import {z} from "zod"

const userSchema = z.object({
    name: z.string(),
    email: z.string().email(),
})

export type User = z.infer<typeof userSchema>