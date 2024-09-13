import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
export default function PlayerCard({ player, deletePlayer }: { player: any, deletePlayer: (player: any) => void }) {
  return (
    <Card className=" bg-[#1E1E1E] w-[10rem] md:w-[12.5rem] border-2 border-[#2E2D2D] ">
      <Button
        onClick={() => {
          deletePlayer(player);
        }}
        className="ml-1 mt-1 "
        variant={"destructive"}
      >
        <Trash size={16} />
      </Button>
      <div className="pt-4 px-4 flex items-start justify-start h-full w-full ">
        <img className="w-full" src={player.photo_url} />
      </div>
      <div className="bg-[#0A0A0A] w-full p-2 items-center flex justify-center rounded">
        <p className="text-white font-semibold">{player.name}</p>
      </div>
    </Card>
  );
}
