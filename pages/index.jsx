import GeneralLayout from "../layouts/GeneralLayout";
import LatestMusic from "../components/music_components/LatestMusic";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import data from "../utils/data";
import MusicPotion from "../components/music_components/MusicPotion";
import Post from "../models/Post";
import { connect, convertDocToObj, disconnect } from "../utils/mongo";

export default function Home(props) {
  const { posts, trending_posts } = props;

  return (
    <GeneralLayout
      title={"Home Page"}
      description={"Listen to and download all African music"}
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-center my-auto w-full py-8">
          <Breadcrumb
            spacing="8px"
            separator={
              <ChevronRightIcon color="gray.500" height={14} width={14} />
            }
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        {/* // latest music */}
        <>
          <LatestMusic heading={"Latest Music"} music={posts} />
        </>

        {/* // naija music */}
        <>
          <LatestMusic heading={"Trending Music"} music={trending_posts} />
        </>

        {/* // hip hip */}
        <>
          <MusicPotion heading={"Hip-Hop Music"} music={[1, 2, 3, 4, 5, 6]} />
        </>
      </div>
    </GeneralLayout>
  );
}

export async function getServerSideProps(context) {
  await connect();
  const posts = await Post.find({}).sort({createdAt: -1}).lean();
  const trending_posts = await Post.find({}).lean()
  console.log(posts);
  await disconnect();
  return {
    props: {
      posts: posts?.map(convertDocToObj),
      trending_posts: JSON.parse(JSON.stringify(trending_posts)),
    },
  };
}
