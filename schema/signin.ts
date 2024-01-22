import { z } from "zod";

export const signinSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Provide a valid email",
      required_error: "Email is required",
    })
    .email({
      message: "Provide a valid email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, {
      message: "Password is required",
    }),
});

export type SignIn = z.infer<typeof signinSchema>;
