import Link from "next/link";

function NotFound() {
  return (
    <section className="grid h-[calc(100vh-9rem)]  place-content-center">
      <div>
        <h2 className="text-4xl">Not Found</h2>
        <Link href="/">Go to Home</Link>
      </div>
    </section>
  );
}

export default NotFound;
