import TaskForm from "./task-form";
import TaskList from "./task-list";

export default function DashboardPage() {
  return (
    <section className="max-w-4xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <TaskForm />
      <TaskList />
    </section>
  );
}
