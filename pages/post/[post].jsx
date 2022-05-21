import React from "react";
import { DownloadIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import GeneralLayout from "../../layouts/GeneralLayout";
import TrendingPost from "../../components/TrendingPost/TrendingPost";
import SongItem from "../../components/SongItem/SongItem";
import { connect, convertDocToObj, disconnect } from "../../utils/mongo";
import Post from "../../models/Post";

function SinglePost(props) {
  const router = useRouter();

  const { page_post, related_posts, trending_posts } = props;

  console.log(page_post);

  return (
    <GeneralLayout
      title={page_post?.title}
      description={page_post?.description}
      og_image={page_post?.picture}
      twitter_description={page_post?.description}
      twitter_title={page_post?.title}
    >
      <div className="flex flex-row py-8 gap-8">
        <div className="md:w-3/4 w-full flex flex-col space-y-8 ">
          <div className="flex flex-col items-center bg-white rounded shadow p-4">
            <div className="relative picture md:h-[400px] md:w-[400px] h-72 w-72 rounded">
              <Image
                src={page_post?.picture}
                layout="fill"
                objectFit="contain"
                className="rounded"
              />
            </div>
            <div className="item_name text-gray-800 font-bold text-lg my-2">
              {page_post?.title} - {page_post.sub_category}
            </div>
            <div className="item_details text-gray-700 py-8 flex flex-col items-center space-y-4">
              <p>
                Title: <span>{page_post?.title}</span>
              </p>
              <p>
                Artist: <span>{page_post?.artist}</span>
              </p>
              <p>
                Year: <span>2022</span>
              </p>
              <p>
                Genre: <span>{page_post?.category}</span>
              </p>
            </div>
            <p className="text-gray-800 font-semibold text-lg py-2">
              Item Included
            </p>
            <div className="flex flex-col items-start py-4 w-full">
              {/* {page_post} */}
              {page_post?.all_songs?.map((item, index) => (
                <p
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } text-gray-700 p-2 rounded w-full`}
                >
                  <span className="font-semibold mr-4">{index + 1}.</span>
                  {item.variant}
                </p>
              ))}
            </div>
            <div className="flex text-gray-700 text-center flex-col items-center">
              {page_post?.description}
            </div>
            <div className="spotify_preview flex py-4 w-full">
              <div className="overflow-hidden w-full rounded flex flex-col items-center">
                {/* <iframe
                  src="https://open.spotify.com/album/1fwbLCqW34SjVx1hpjpVlQ?si=FYtbyMJJTXivaLqjZ7NoGw"
                  width="100%"
                  height="200"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                  style={{ float: "left" }}
                ></iframe> */}
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
              {related_posts?.map((item, index) => (
                <SongItem
                  key={index}
                  artist_name={item.artist}
                  item_name={item.title}
                  category={item.category}
                  picture={item.picture}
                  id={item._id}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/4 md:flex hidden flex-col">
          <div className="flex flex-col bg-white p-4 shadow">
            <p className="text-gray-800 font-semibold text-center capitalize pb-4">
              trending music
            </p>
            <div className="flex flex-col space-y-4">
              {trending_posts?.map((item, index) => (
                <TrendingPost
                  key={index}
                  artist_name={item.artist}
                  item_name={item.title}
                  category={item.category}
                  picture={item.picture}
                  id={item._id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { post } = params;
  await connect();
  const _post = await Post.findOne({ _id: post }).lean();
  const related_posts = await Post.find({ category: _post.category })
    .sort({ createdAt: -1 })
    .lean();
  const trending_posts = await Post.find({}).lean();

  await disconnect();
  return {
    props: {
      page_post: convertDocToObj(_post),
      related_posts: JSON.parse(JSON.stringify(related_posts)),
      trending_posts: JSON.parse(JSON.stringify(trending_posts)),
    },
  };
}

export default SinglePost;
