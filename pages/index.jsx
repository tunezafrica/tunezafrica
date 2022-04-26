import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import SongItem from "../components/SongItem/SongItem";
import GeneralLayout from "../layouts/GeneralLayout";
import cover_1 from "../public/cover.jpg";

export default function Home() {
  return (
    <GeneralLayout
      title={"Home Page"}
      description={"Listen to and download all African music"}
    >
      <div className="flex flex-col py-16">
        {/* // latest music */}
        <div className="flex flex-col">
          <div className="flex flex-row justify-between pb-4">
            <p className="text-gray-800 text-lg font-semibold">Latest Music</p>
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
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
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

        {/* // naija music */}
      </div>
    </GeneralLayout>
  );
}
