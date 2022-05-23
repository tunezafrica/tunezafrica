import { ArrowRightIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import React from 'react'
import SongItem from '../SongItem/SongItem'

function LatestMusic({heading, music}) {
  const router = useRouter()
  return (
    <div className="flex flex-col md:pb-20 pb-8">
    <div className="flex flex-row justify-between pb-4">
      <p className="text-gray-800 text-lg font-semibold">{heading}</p>
      <div onClick={() => router.push('/explore')} className="icons cursor-pointer text-gray-700 font-semibold text-sm flex flex-row items-center gap-2">
        <p>View All</p>
        <ArrowRightIcon height={16} width={16}/>
      </div>
    </div>
    <div className="flex overflow-x-auto space-x-6">
      {music?.map((item, index) => (
        <SongItem
          key={index}
          category={item.category}
          item_name={item.title}
          artist_name={item.artist}
          picture={item.picture}
          id={item._id}
        />
      ))}
    </div>
  </div>
  )
}

export default LatestMusic