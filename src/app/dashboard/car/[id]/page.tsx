import Image from "next/image";

export default function CarPage() {
  return (
    <main className="h-screen w-full relative">
      <div className="relative h-[300px]">
        <Image objectFit="cover" src="/bmw.jpg" fill alt="car" />
      </div>
      <div className="bg-white dark:bg-primary-foreground h-full p-4">
        <h2 className="text-xl text-black dark:text-white uppercase font-bold">
          Nissan Skyline R34
        </h2>
      </div>
    </main>
  );
}
