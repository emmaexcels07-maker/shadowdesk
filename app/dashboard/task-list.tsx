"use client";

import useSWR from "swr";
import { Check, Trash2, Loader2, Inbox } from "lucide-react";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const fetcher = async (url: string): Promise<any> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch operational streams.");
  return res.json();
};

export default function TaskList() {
  const { data: tasks, mutate, error, isLoading } = useSWR<Task[]>("/api/tasks", fetcher);

  // Optimistic Toggle Interaction Handler
  async function handleToggleComplete(taskToToggle: Task) {
    if (!tasks) return;

    // 1. Construct the updated dataset immediately
    const updatedTasks = tasks.map((t) =>
      t.id === taskToToggle.id ? { ...t, completed: !t.completed } : t
    );

    // 2. Fire the local update to SWR instantly, delaying the remote fetch check
    await mutate(
      fetch(`/api/tasks/${taskToToggle.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !taskToToggle.completed }),
      }).then((r) => r.json()),
      {
        optimisticData: updatedTasks,
        rollbackOnError: true,
        populateCache: false, // Force refetch down the road to confirm absolute accuracy
        revalidate: true,
      }
    );
  }

  // Optimistic Deletion Interaction Handler
  async function handleRemoveTask(id: string) {
    if (!tasks) return;

    const filteredTasks = tasks.filter((t) => t.id !== id);

    await mutate(
      fetch(`/api/tasks/${id}`, { method: "DELETE" }).then((r) => r.json()),
      {
        optimisticData: filteredTasks,
        rollbackOnError: true,
        populateCache: false,
        revalidate: true,
      }
    );
  }

  // State Boundary A: Active Network Loading Stream
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-slate-500 gap-3">
        <Loader2 className="w-6 h-6 animate-spin text-indigo-500" />
        <p className="text-xs font-medium tracking-wide">Syncing production logs...</p>
      </div>
    );
  }

  // State Boundary B: Network Failure Fallback
  if (error) {
    return (
      <div className="text-center p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-xs text-red-400 font-medium">
        Failed to maintain live pipeline connection. Retrying stream...
      </div>
    );
  }

  // State Boundary C: Empty Asset State Fallback
  if (!tasks || tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center rounded-xl border border-dashed border-slate-800 bg-slate-950/20 p-6">
        <div className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mb-4">
          <Inbox size={18} />
        </div>
        <h3 className="text-sm font-semibold text-slate-300">No operational pipelines active</h3>
        <p className="text-xs text-slate-500 max-w-xs mt-1">
          Your execution queue is empty. Deploy an action block to begin real-time sync tracking.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-2.5">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-200 backdrop-blur-sm
            ${
              task.completed
                ? "border-slate-900/60 bg-slate-950/10 opacity-60"
                : "border-slate-900 bg-slate-950/40 hover:border-slate-800 hover:bg-slate-950/60"
            }`}
        >
          {/* Left Block: Task Selection Text */}
          <div className="flex items-center gap-3 min-w-0 pr-4">
            <button
              onClick={() => handleToggleComplete(task)}
              className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border text-white transition-all focus:outline-none
                ${
                  task.completed
                    ? "bg-indigo-500 border-indigo-500 shadow-sm shadow-indigo-500/20"
                    : "border-slate-700 bg-slate-900 hover:border-slate-500"
                }`}
              aria-label={task.completed ? "Mark task incomplete" : "Mark task complete"}
            >
              {task.completed && <Check size={12} strokeWidth={3} />}
            </button>
            
            <span
              className={`text-sm font-medium tracking-wide truncate transition-all duration-200
                ${task.completed ? "text-slate-500 line-through" : "text-slate-200"}`}
            >
              {task.title}
            </span>
          </div>

          {/* Right Block: Dynamic Action Callouts */}
          <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-150">
            <button
              onClick={() => handleRemoveTask(task.id)}
              className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all focus:outline-none"
              title="Purge task trace"
              aria-label="Delete task"
            >
              <Trash2 size={15} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}