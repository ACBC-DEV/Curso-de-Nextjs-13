import Link from "next/link";

function NavBar() {
  return (
    <div className="flex place-content-around  py-4 items-center bg-zinc-900">
      <Link href="/">
        <h2 className="text-3xl font-bold">NextCRUD</h2>
      </Link>
      <ul className="flex gap-x-3">
        <li>
          <Link href="/">Tasks</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/new">New</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
