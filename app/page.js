import Image from "next/image";

export default function Home({children}) {
  return (
    <main className="">
    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      {children}
    </main>
  );
}
