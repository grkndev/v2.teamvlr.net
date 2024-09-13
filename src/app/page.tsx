"use client";
import AddPlayerCard from "@/components/Cards/AddPlayer/AddPlayerCard";
import PlayerCard from "@/components/Cards/PlayerCard/PlayerCard";
import SubPlayerCard from "@/components/Cards/SubPlayerCard/SubPlayerCard";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { Trash } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [roster, setRoster] = useState<any[]>([]);
  const [reserve, setReserve] = useState<any[]>([]);
  const [management, setManagement] = useState<any[]>([]);
  const deletePlayer = (player: any) => {
    setRoster(roster.filter((p) => p.id !== player.id));
    setReserve(reserve.filter((p) => p.id !== player.id));
    setManagement(management.filter((p) => p.id !== player.id));
  };
  return (
    <div className="p-8 w-full space-y-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-white font-bold text-2xl">Roster</h1>
        <div className="w-full grid grid-cols-2 md:grid-cols-5 items-center justify-center gap-4 border-2 border-[#252525] p-4">
          {roster &&
            roster.map((player: any) => (
              <PlayerCard key={player.id} player={player} deletePlayer={deletePlayer} />
            ))}
          {roster.length < 5 && <AddPlayerCard data={roster} set={setRoster} />}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Label htmlFor="mainTeam" className="text-white font-bold text-2xl">
            Reserve
          </Label>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-4 border-2 border-[#252525] p-4">
            {reserve &&
              reserve.map((player: any) => (
                <PlayerCard key={player.id} player={player} deletePlayer={deletePlayer} />
              ))}
            {reserve.length < 5 && (
              <AddPlayerCard data={reserve} set={setReserve} />
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <Label htmlFor="mainTeam" className="text-white font-bold text-2xl">
            Management
          </Label>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-4 border-2 border-[#252525] p-4">
            {management &&
              management.map((player: any) => (
                <PlayerCard key={player.id} player={player} deletePlayer={deletePlayer} />
              ))}
            {management.length < 5 && (
              <AddPlayerCard data={management} set={setManagement} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
