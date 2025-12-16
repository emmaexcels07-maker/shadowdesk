"use client";
import { useState } from "react";

export default function TaskForm() {
  const [title, setTitle] = useState("");

  async function submit() {
    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    setTitle("");
  }

  return (
    <div className="flex gap-2 mb-6">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border px-4 py-2 rounded w-full"
        placeholder="New task"
      />
      <button
        onClick={submit}
        className="bg-indigo-600 text-white px-4 rounded"
      >
        Add
      </button>
    </div>
  );
}
