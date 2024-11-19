import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>
        We couldn't find the page you were looking for. This is either
        because:
      </h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
