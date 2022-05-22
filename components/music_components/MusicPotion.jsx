import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import SongItem from "../SongItem/SongItem";
import cover_1 from "../../public/cover.jpg";
import axios from "axios";

function MusicPotion({ heading, music }) {
  const [all_music, setAllMusic] = useState();

  useEffect(() => {
    const getAllPosts = async () => {
      const { data } = await axios.post(`/api/post`);
      setAllMusic(data);
    };
    getAllPosts();
  }, []);

  // console.log(all_music)

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
            category={item.category}
            item_name={item.title}
            artist_name={item.artist}
            picture={item.picture}
          />
        ))}
      </div>
    </div>
  );
}

export default MusicPotion;
