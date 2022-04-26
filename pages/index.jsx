import GeneralLayout from "../layouts/GeneralLayout";
import LatestMusic from "../components/music_components/LatestMusic";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function Home() {
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
