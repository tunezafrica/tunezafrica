import { Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import picture from '../../public/cover.jpg'

function TrendingPost({artist_name, item_name, category}) {
  return (
    <div className="flex flex-row w-full gap-4 items-center">
      <div className="image bg-green-400 h-24 w-24 rounded">
          <Image src={picture} layout="responsive" objectFit="cover" className="rounded" />
      </div>
      <div className="flex flex-col">
        <Text noOfLines={1} className="text-gray-800 font-semibold text-lg">{item_name}</Text>
        <Text noOfLines={1} className="text-gray-500">{artist_name}</Text>
        <div className="flex">
        <Text className="text-white p-1 rounded bg-green-600 text-xs mt-1">{category}</Text>
        </div>
      </div>
    </div>
  );
}

export default TrendingPost;
