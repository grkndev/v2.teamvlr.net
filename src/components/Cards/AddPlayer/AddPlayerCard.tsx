"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CirclePlus } from "lucide-react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { useDebounce } from "@/lib/useDebounce";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

export default function AddPlayerCard({
  set,
  data,
}: {
  set: any;
  data: any[];
}) {
  const { toast } = useToast();
  const [players, setPlayers] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const debouncedValue = useDebounce(search, 500);
  useEffect(() => {
    if (
      debouncedValue &&
      debouncedValue.length > 0 &&
      /\S/.test(debouncedValue)
    ) {
      axios.get(`/api/getPlayer?playerName=${debouncedValue}`).then((res) => {
        setPlayers(res.data);
      });
    } else {
      setPlayers([]);
    }
  }, [debouncedValue]);

  const handleAddPlayer = (player: any) => {
    const hasPlayer = data.filter((p: any) => p.id === player.id);
    if (hasPlayer.length > 0) {
      toast({
        title: "Player already added",
        description: "Player already added to the team",
        variant: "destructive",
      });
      return;
    }
    set((prev: any) => [...prev, player]);
    setSearch("");
    setPlayers([]);
  };
  return (
    <Drawer>
      <DrawerTrigger className="h-full" asChild>
        <div className="items-center justify-center flex bg-transparent w-[10rem] md:w-[12.5rem] md:h-[12.5rem] h-[10.1rem] border-dashed border-2 border-[#2E2D2D] ">
          <CirclePlus color="#AAA" size={72} strokeWidth={0.5} />
        </div>
      </DrawerTrigger>
      <DrawerContent className="bg-[#0B0B0B] border-none text-white">
        <DrawerHeader>
          <DrawerTitle>New Player Add</DrawerTitle>
          <DrawerDescription>Please enter the player&apos;s name</DrawerDescription>
        </DrawerHeader>
        <div className="flex items-center justify-center px-4 flex-col space-y-4">
          <Input
            className="bg-[#1E1E1E] border-none text-white"
            type="text"
            placeholder="Player Name"
            onChange={(e) => setSearch(e.target.value)}
          />
          <ScrollArea className="h-[20rem] w-full rounded-md border border-[#2E2D2D] p-2">
            {players.map((player) => (
              <DrawerClose key={player.id} className="w-full">
                <Card
                  onClick={() => handleAddPlayer(player)}
                  className="mb-2 bg-[#1E1E1E] border-none p-4 flex items-center justify-start space-x-4"
                >
                  <Image
                    className="w-20 h-20"
                    src={`${player.photo_url}`}
                    alt="Player"
                    width={2000}
                    height={2000}
                  />
                  <span className="text-white font-semibold">
                    {player.name}
                  </span>
                </Card>
              </DrawerClose>
            ))}
          </ScrollArea>
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button className="w-full">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
