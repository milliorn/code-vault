import Link from "next/link";

export default function NotFound(): JSX.Element {
  return (
    <>
      <h1 className="text-center flex items-center justify-center h-24 dark:text-white">
        Post does not exist.
      </h1>
      <div className="text-center flex items-center justify-center h-16 dark:text-white">
        <Link href="/">
          <span>← Go Back</span>
        </Link>
      </div>
    </>
  );
}
