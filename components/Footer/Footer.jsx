import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import data from "../../utils/data";

function Footer() {
  const router = useRouter();
  return (
    <div className="flex flex-row items-center justify-around w-full py-4 px-16 border-t border-gray-200 bg-gray-200">
      {/* {data.categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center">
          <Link key={index + category.name} href={category.location} passHref>
            <a
              className={`${
                router.asPath === category.location ? "bg-gray-200" : ""
              } hover:bg-gray-200 text-gray-900 p-2 font-semibold cursor-pointer rounded-md text-sm flex flex-row items-center justify-between`}
            >
              {category.name}
            </a>
          </Link>
          <div className="flex flex-col">
          {category?.sub_categories.map((category, index) => (
            <div key={index + category.name} href={category.location} passHref>
              <a
                className={`hover:bg-gray-200 text-gray-900 p-2 cursor-pointer rounded-md text-sm flex flex-row items-center justify-between font-medium`}
              >
                {category.name}
              </a>
            </div>
          ))}
          </div>
        </div>
      ))} */}
      tunezAfrica
    </div>
  );
}

export default Footer;
