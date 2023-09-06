"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (params.id) {
      const ra = async () => {
        const res = await fetch(`/api/tasks/${params.id}`);
        const data = await res.json();
        setTitle(data.title);
        setDescription(data.description);
      };
      ra();
    }
  }, [params.id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
    } else {
      await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div className="my-auto grid place-content-center">
      <h2 className="text-center text-6xl font-bold m-10">
        {params.id ? "Edit" : "Create"}
      </h2>

      <form
        className="grid gap-5 border-8 rounded-3xl p-12"
        onSubmit={onSubmit}
      >
        <label htmlFor="title" className="font-bold text-xl text-start">
          Title
        </label>
        <input
          id="title"
          placeholder="Title"
          className="bg-transparent border-4 rounded-3xl px-4 p-2"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description" className="font-bold text-xl text-start">
          Description
        </label>
        <textarea
          value={description}
          id="description"
          className="bg-transparent border-4 rounded-3xl p-5"
          rows={3}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        ></textarea>
        <div className=" flex  gap-x-4 place-content-center">
          <button
            type="submit"
            className="border-4 mx-auto rounded-3xl py-2 px-6 w-fit"
          >
            {params.id ? "Edit" : "Create"}
          </button>
          {params.id && (
            <button
              type="button"
              className="border-4 mx-auto rounded-3xl py-2 px-6 w-fit hover:border-red-600 hover:text-red-600 "
              onClick={async () => {
                await fetch(`/api/tasks/${params.id}`, {
                  method: "DELETE",
                });
                router.refresh();
                router.push("/");
              }}
            >
              Delete
            </button>
          )}
          <button
            type="button"
            className="border-4 mx-auto rounded-3xl py-2 px-4 w-fit"
            onClick={() => router.push("/")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
