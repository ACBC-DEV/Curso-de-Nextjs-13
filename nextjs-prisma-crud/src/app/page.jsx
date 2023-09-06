import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";
async function loadTasks() {
  // const res = await fetch("http://localhost:3000/api/tasks");
  // const data = await res.json();
  // return data;
  return await prisma.task.findMany();
}

export default async function HomePage() {
  const tasks = await loadTasks();

  return (
    <section className=" container mx-auto">
      <h2 className="text-4xl font-extrabold text-center mt-5">Tasks</h2>
      <div className="grid place-content-center gap-4 grid-cols-3 border-8 rounded-3xl p-12  m-6">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
}
