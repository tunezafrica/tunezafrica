import React, { useEffect } from "react";
import { DownloadIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import GeneralLayout from "../../layouts/GeneralLayout";
import picture from "../../public/cover.jpg";
import TrendingPost from "../../components/TrendingPost/TrendingPost";
import SongItem from "../../components/SongItem/SongItem";

function SinglePost() {
  const router = useRouter();
  const { post } = router.query;
  console.log(post);

  return (
    <GeneralLayout>
      <div className="flex flex-row py-8 gap-8">
        <div className="md:w-3/4 w-full flex flex-col space-y-8 ">
          <div className="flex flex-col items-center bg-white rounded shadow p-4">
            <div className="picture md:h-[400px] md:w-[400px] h-72 w-72 rounded">
              <Image
                src={picture}
                layout="responsive"
                objectFit="contain"
                className="rounded"
              />
            </div>
            <div className="item_name text-gray-800 font-bold text-lg my-2">
              GaFa Like - Album
            </div>
            <div className="item_details text-gray-700 py-8 flex flex-col items-center space-y-4">
              <p>
                Title: <span>Shamwari Yangu</span>
              </p>
              <p>
                Artist: <span>Shamwari Yangu</span>
              </p>
              <p>
                Year: <span>2022</span>
              </p>
              <p>
                Genre: <span>Hip-Hop</span>
              </p>
            </div>
            <div className="flex text-gray-700 text-center flex-col items-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              officiis laudantium, dolore expedita magni quaerat velit.
              Distinctio voluptatem ratione provident autem tempore facilis
              molestias nostrum quaerat similique, natus, aliquam consequuntur?
            </div>
            <div className="spotify_preview flex py-4 w-full">
              <div className="overflow-hidden w-full rounded flex flex-col items-center">
                <iframe
                  src="https://open.spotify.com/album/1fwbLCqW34SjVx1hpjpVlQ?si=FYtbyMJJTXivaLqjZ7NoGw"
                  width="100%"
                  height="200"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                  style={{ float: "left" }}
                ></iframe>
              </div>
            </div>
            {/* <div className="apple_music preview">apple music</div> */}

            <button className="bg-green-700 hover:bg-green-600 text-white font-semibold rounded-full py-4 px-2 outline-none w-full my-8 flex flex-col items-center">
              <div className="flex flex-row items-center">
                <DownloadIcon height={24} width={24} />
                <p>Download</p>
              </div>
            </button>
          </div>
          <div className="related rounded md:p-4 md:shadow md:bg-white">
            <p className="text-gray-700 font-semibold pb-4">Related Music</p>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
              {
                [1,2,3,4].map((item, index)=>(
                  <SongItem
                    picture={picture}
                    category={'Hip-Hop'}
                    item_name={'Gafa Life'}
                    artist_name={'Winky D'}
                    id={'iuas989'}
                  />
                ))
              }
            </div>
          </div>
        </div>
        <div className="w-1/4 md:flex hidden flex-col">
          <div className="flex flex-col bg-white p-4 shadow">
            <p className="text-gray-800 font-semibold text-center capitalize pb-4">
              trending music
            </p>
            <div className="flex flex-col space-y-4">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <TrendingPost 
                  artist_name={'Winky D'}
                  item_name={'Gafa Life'}
                  category={'Dancehall Album'}
                  picture={picture}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default SinglePost;
