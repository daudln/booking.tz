"use client";

import React, { useTransition, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FormNotification from "@/components/form-notification";
import { signin } from "@/server/actions/login";
import { ZodType, z, ZodObject, ZodRawShape } from "zod";


const ActionForm = <T, TSchema>({
  formValues,
  schema,
  action,
}: {
  formValues: T;
  schema: TSchema;
  action: (formValues:T)=>void;
}) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const form = useForm<T>({
    resolver: zodResolver(TSchema),
  });

  const handleSubmit = (data: T) => {
    startTransition(() => {
      action(data);
      });
  };

  return (
    <Form {...form}>
      <form
        className="w-1/2 flex flex-col gap-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="name@domain.com"
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        {success && <FormNotification message={success} type="success" />}
        {error && <FormNotification message={error} type="error" />}
        <Button type="submit" className="w-full" disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ActionForm;
