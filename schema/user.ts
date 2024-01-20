import {z} from "zod"

export const userSchema = z.object({
    firstName:z.string().optional(),
    lastName:z.string().optional(),
    username: z.string({
        required_error: "Username is required",
        invalid_type_error: "Username must be a string",
    }).min(2, {
        message: "Username must be at least 2 characters",
    }),
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    }).email(),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters",
    }).regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
            message:
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        }
    ),
    confirmPassword: z.string(),
})

export type User = z.infer<typeof userSchema>   