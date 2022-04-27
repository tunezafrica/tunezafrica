import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";
import SongItem from "../SongItem/SongItem";
import cover_1 from "../../public/cover.jpg";

function MusicPotion({ heading, music }) {
  return (
    <div className="flex flex-col md:pb-20 pb-8">
      <div className="flex flex-row justify-between pb-4">
        <p className="text-gray-800 text-lg font-semibold">{heading}</p>
        <div className="icons flex flex-row items-center gap-2">
          <span className="bg-white shadow p-1 rounded">
            <ChevronLeftIcon height={20} width={20} />
          </span>
          <span className="bg-white shadow p-1 rounded">
            <ChevronRightIcon height={20} width={20} />
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
        {music?.map((item, index) => (
          <SongItem
            key={index}
            category={"Naija"}
            item_name="Gafa Life" 
            artist_name={"Winky D"}
            picture={cover_1}
          />
        ))}
      </div>
    </div>
  );
}

export default MusicPotion;
