import GeneralLayout from "../layouts/GeneralLayout";
import LatestMusic from "../components/music_components/LatestMusic";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import MusicPotion from "../components/music_components/MusicPotion";
import Post from "../models/Post";
import { connect, convertDocToObj, disconnect } from "../utils/mongo";

export default function Home(props) {
  const { posts, trending_posts, naija_music } = props;

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

        {/* // trending music */}
        <>
          <LatestMusic heading={"Trending Music"} music={trending_posts} />
        </>

        {/* // Naija music */}
        <>
          <MusicPotion heading={"Naija Music"} music={naija_music} />
        </>
      </div>
    </GeneralLayout>
  );
}

export async function getServerSideProps(context) {
  await connect();
  const posts = await Post.find({}).sort({ createdAt: -1 }).lean();
  const trending_posts = await Post.find({}).lean();
  const naija_music = await Post.find({ category: "Naija" });

  await disconnect();
  return {
    props: {
      posts: posts?.map(convertDocToObj),
      trending_posts: JSON.parse(JSON.stringify(trending_posts)),
      naija_music: JSON.parse(JSON.stringify(naija_music)),
    },
  };
}
