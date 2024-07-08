import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
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
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-full">
      <div className="flex flex-col gap-2 ">
        <h1 className="text-white font-bold text-2xl">Ana Kadro</h1>
        <div className="w-full  flex items-center justify-center gap-4 border-2 border-[#252525] p-4">
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <AddPlayerCard />
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-2">
          <Label htmlFor="mainTeam" className="text-white font-bold text-2xl">
            Ana Kadro
          </Label>
          <div className="w-full flex items-center justify-center gap-4 border-2 border-[#252525] p-4">
            <SubPlayerCard />
            <SubPlayerCard />
            <SubPlayerCard />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-bold text-2xl">Ana Kadro</h1>
          <div className="w-full flex items-center justify-center gap-4 border-2 border-[#252525] p-4">
            <SubPlayerCard />
            <SubPlayerCard />
            <SubPlayerCard />
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayerCard() {
  return (
    <Card className="bg-[#1E1E1E] w-[12.5rem] border-2 border-[#2E2D2D] ">
      <div className="pt-4 px-4 flex items-start justify-start h-full w-full ">
        <img className="w-full" src="https://owcdn.net/img/655dc7f490c8c.png" />
      </div>
      <div className="bg-[#0A0A0A] w-full p-2 items-center flex justify-center rounded">
        <p className="text-white font-semibold">QutionerX</p>
      </div>
    </Card>
  );
}

function AddPlayerCard() {
  return (
    <Drawer>
      <DrawerTrigger className="h-full">
        <Card className="bg-transparent w-[12.5rem] h-full border-dashed border-2 border-[#2E2D2D] ">
          <div className="pt-4 px-4 flex items-center justify-center h-full ">
            <CirclePlus color="#AAA" size={96} />
          </div>
        </Card>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function SubPlayerCard() {
  return (
    <Card className="bg-[#1E1E1E] w-[9.375rem] border-2 border-[#2E2D2D] rounded-none">
      <div className="pt-4 px-4 flex items-start justify-start h-full w-full ">
        <img className="w-full" src="https://owcdn.net/img/655dc7f490c8c.png" />
      </div>
      <div className="bg-[#0A0A0A] w-full p-2 items-center flex justify-center">
        <p className="text-white font-semibold">QutionerX</p>
      </div>
    </Card>
  );
}
