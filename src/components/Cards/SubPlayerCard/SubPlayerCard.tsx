import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function SubPlayerCard({ player }: { player: any }) {
  return (
    <Card className="bg-[#1E1E1E]  w-[6rem] md:w-[9rem] border-2 border-[#2E2D2D] rounded-none">
      <div className="pt-4 px-4 flex items-start justify-start h-full w-full ">
        <Image className="w-full" src={player.photo_url} alt={player.name} width={200} height={200} />
      </div>
      <div className="bg-[#0A0A0A] w-full p-2 items-center flex justify-center">
        <p className="text-white font-semibold">{player.name}</p>
      </div>
    </Card>
  );
}
