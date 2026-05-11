"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  RegisterSchemaType,
} from "@/src/lib/validations/register-schema";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchemaType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div>
        <Input
          placeholder="Full Name"
          {...register("name")}
        />
      </div>

      <div>
        <Input
          placeholder="Email"
          {...register("email")}
        />
      </div>

      <div>
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
      </div>

      <Button className="w-full">
        Create Account
      </Button>
    </form>
  );
}