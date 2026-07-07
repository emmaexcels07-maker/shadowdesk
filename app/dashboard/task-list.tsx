"use client";
import useSWR from "swr";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const fetcher = async <T,>(url: string): Promise<T> =>
  fetch(url).then((r) => r.json());

export default function TaskList() {
  const { data, mutate } = useSWR<Task[]>("/api/tasks", fetcher);

  async function complete(id: string) {
    await fetch(`/api/tasks/${id}`, { method: "PUT" });
    mutate();
  }

  async function remove(id: string) {
    await fetch(`/api/tasks/${id}`, { method: "DELETE" });
    mutate();
  }

  return (
    <ul className="space-y-3">
      {data?.map((task) => (
        <li key={task.id} className="flex justify-between border p-3 rounded">
          <span className={task.completed ? "line-through" : ""}>
            {task.title}
          </span>
          <div className="flex gap-2">
            <button onClick={() => complete(task.id)}>✓</button>
            <button onClick={() => remove(task.id)}>✕</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
