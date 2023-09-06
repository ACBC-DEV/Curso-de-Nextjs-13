"use client";
import { useRouter } from "next/navigation";

function TaskCard({ task }) {
  const router = useRouter();

  return (
    <div
      className="border-8 rounded-3xl p-5 hover:cursor-pointer hover:bg-zinc-700"
      onClick={() => {
        router.push(`/tasks/edit/${task.id}`);
      }}
    >
      <h3 className="text-2xl font-bold">{task.title}</h3>
      <p className="text-zinc-300">{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  );
}

export default TaskCard;
