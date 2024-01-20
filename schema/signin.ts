import { z } from "zod";
import {userSchema} from "./user";

export const signinSchema = userSchema.pick({email: true, password: true});

export type SignIn = z.infer<typeof signinSchema>;