"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
});

export default function EmailSignup() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(() => alert("Subscribed!"))}
      className="flex gap-2 justify-center"
    >
      <input
        {...register("email")}
        placeholder="Email address"
        className="px-4 py-2 border rounded-lg"
      />
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
        Join
      </button>
      {formState.errors.email && (
        <p className="text-red-500 text-sm">Invalid email</p>
      )}
    </form>
  );
}
