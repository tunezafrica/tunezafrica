import GeneralLayout from "../layouts/GeneralLayout";
import LatestMusic from "../components/music_components/LatestMusic";

export default function Home() {
  return (
    <GeneralLayout
      title={"Home Page"}
      description={"Listen to and download all African music"}
    >
      <div className="flex flex-col py-16">
        {/* // latest music */}
        <>
          <LatestMusic heading={"Latest Music"} music={[1, 2, 3, 4, 5, 6]} />
        </>

        {/* // naija music */}
        <>
          <LatestMusic heading={"Trending Music"} music={[1, 2, 3, 4, 5, 6]} />
        </>

        {/* // hip hip */}
        <>
          <LatestMusic heading={"Hip-Hop Music"} music={[1, 2, 3, 4, 5, 6]} />
        </>
      </div>
    </GeneralLayout>
  );
}
