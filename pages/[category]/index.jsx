import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import GeneralLayout from "../../layouts/GeneralLayout";
import data from "../../utils/data";
import SongItem from "../../components/SongItem/SongItem";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

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
      <div className="flex flex-col py-16">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <p className="text-gray-700 text-lg ">Latest Music</p>
            <div className="icons flex flex-row items-center gap-2">
              <span className="bg-white shadow p-1 rounded">
              <ChevronLeftIcon height={20} width={20} />
              </span>
              <span className="bg-white shadow p-1 rounded">
              <ChevronRightIcon height={20} width={20} />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-6">
            <SongItem />
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default Category;
