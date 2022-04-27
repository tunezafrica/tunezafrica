import { Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function SongItem({ picture, category, item_name, artist_name, id }) {
  const router = useRouter()
  return (
    <div onClick={() => router.push(`/post/${id}`)} className="flex flex-col cursor-pointer">
      <div className="relative flex md:h-44 md:w-44 h-40 w-40 shadow overflow-hidden">
        <p className="bg-green-700 cursor-pointer text-xs font-semibold text-white absolute bottom-2 right-2 rounded z-10 p-1">
          {category}
        </p>
        <Image
          src={picture}
          layout="fill"
          className="rounded-2xl shadow-lg"
        />
      </div>
      <div className="flex flex-col items-start my-2">
        <Text noOfLines={1} className="text-gray-800 text font-bold cursor-pointer">{item_name}</Text>
        <p className="text-gray-500 cursor-pointer">{artist_name}</p>
      </div>
    </div>
  );
}

export default SongItem;
