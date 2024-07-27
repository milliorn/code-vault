import { Button } from "./Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Next.js + Tailwind CSS + Typescript
      </h1>
      <>
        <Button intent="primary" text="Create" /> <br /> <br />
        <Button intent="secondary" text="Update" /> <br /> <br />
        <Button intent="danger" text="Delete" /> <br /> <br />
      </>
    </main>
  );
}
