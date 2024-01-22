import Image from "next/image";

export default function ProfilePic(): JSX.Element {
  return (
    <section className="w-full mx-auto">
      <Image
        alt="Scott Milliorn"
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        height={200}
        priority
        src="/images/profile.jpg"
        width={200}
      />
    </section>
  );
}
