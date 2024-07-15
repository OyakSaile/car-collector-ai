import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <main className="h-screen w-full relative">
      <div className="relative h-[150px]">
        <Image objectFit="cover" src="/bmw.jpg" fill alt="car" />
      </div>

      <div className="flex flex-col items-center -mt-6">
        <Avatar>
          <AvatarFallback>KY</AvatarFallback>
        </Avatar>
        <h1 className="mt-4 font-bold">Kayo Elias</h1>
        <p className="text-muted-foreground text-xs">Rank Expert</p>
      </div>
      <Footer className="absolute bottom-0" />
    </main>
  );
}
