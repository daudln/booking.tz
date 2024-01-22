"use server";

import { User, userSchema } from "@/schema/user";
import prisma from "@/lib/db";
import bcrypt from "bcrypt";

export const register = async (input: User) => {
  const validatedInput = userSchema.safeParse(input);
  if (validatedInput.success) {
    const { firstName, lastName, username, email, password } =
      validatedInput.data;
    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (userExists) {
      return {
        message: "User with this email exists",
        success: false,
      };
    }
    const hashSalt = 12;
    const hashedPassword = await bcrypt.hash(password, hashSalt);
    const user = await prisma.user.create({
      data: {
        email,
        name: username,
        role: "USER",
        password: hashedPassword,
      },
    });
    const profile = await prisma.profile.create({
      data: {
        firstName: firstName as string,
        lastName: lastName as string,
        userId: user.id,
      },
    });
    return {
      message: "Account created, check you email to confirm",
      success: true,
    };
  }
  return { message: "Invalid input", success: false };
};
