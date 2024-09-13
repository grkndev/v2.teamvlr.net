import axios from "axios";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const playerName = searchParams.get("playerName");
  const response = await axios.get(
    `https://www.vlr.gg/search/auto/?term=${playerName}`
  );
  if (!response || !response.data) return NextResponse.json([]);
  var filteredResponse = (response.data as []).filter(
    (data) => (data as any).type === "player"
  );
  filteredResponse.forEach((data: any) => {
    if (!data.photo_url || data.photo_url.length < 1) {
      data.photo_url = "/removed1.png";
    } else {
      data.photo_url = "https:" + data.photo_url;
    }
  });
  return NextResponse.json(filteredResponse);
}
