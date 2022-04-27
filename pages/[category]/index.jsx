import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import GeneralLayout from "../../layouts/GeneralLayout";
import data from "../../utils/data";
import {
  ChevronRightIcon,
} from "@heroicons/react/solid";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import MusicPotion from "../../components/music_components/MusicPotion";

function Category() {
  const router = useRouter();
  const { category } = router.query;
  const [current_category, setCurrentCategory] = useState();

  useEffect(() => {
    var tuna = data?.categories?.find(function (sandwich) {
      return sandwich.slug === category;
    });
    setCurrentCategory(tuna);
  }, [category]);

  console.log(current_category);
  return (
    <GeneralLayout
      title={current_category?.name}
      description={current_category?.description}
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-center w-full py-8">
          <Breadcrumb
            spacing="8px"
            separator={
              <ChevronRightIcon color="gray.500" height={14} width={14} />
            }
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Category</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">{current_category?.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <>
            <MusicPotion 
              heading={current_category?.name} 
              music={[1,2,3,4,5,6,7,7,7,75,65,65,6,5,65,6,5,65,6,5,65,6,5,65,6,5]} />
        </>
      </div>
    </GeneralLayout>
  );
}

export default Category;
