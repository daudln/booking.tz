"use server";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import { SignIn, signinSchema } from "@/schema/signin";
import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";

export const signin = async (input: SignIn) => {
  const validatedInput = signinSchema.safeParse(input);
  if (!validatedInput.success) {
    return { message: "Invalid input", success: false };
  }
  const { password, email } = validatedInput.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid credentials", success: false };
        default:
          return { message: "Something went wrong", success: false };
      }
    }
    throw error
  }
};
