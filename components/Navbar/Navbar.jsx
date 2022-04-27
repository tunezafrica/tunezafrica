import React from "react";
import { Disclosure } from "@headlessui/react";
import { SearchIcon,ChevronDownIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import data from "../../utils/data";
import { useRouter } from "next/router";
import logo from "../../public/icon.png";
import Image from "next/image";
import Link from "next/link";
import Search from "../Search/Search";

function Navbar() {
  const router = useRouter();
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <div onClick={() => router.push("/")} className="lg:hidden block">
                    <Image
                      className="block lg:hidden h-8 w-auto"
                      src={logo}
                      height={25}
                      width={25}
                      objectFit="cover"
                      alt="Workflow"
                    />
                  </div>
                  <div
                    onClick={() => router.push("/")}
                    className="hidden lg:flex flex-row items-center cursor-pointer"
                  >
                    <Image
                      className="hidden lg:block h-8 w-auto"
                      height={25}
                      width={25}
                      objectFit="cover"
                      src={logo}
                      alt="Workflow"
                    />
                    <p className="text-gray-900 font-bold ml-1">TunezAfrica</p>
                  </div>
                </div>
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-2">
                    {data.categories.map((category, index) => (
                      <Link
                        key={index + category.name}
                        href={category.location}
                        passHref
                      >
                        <a
                          className={`${
                            router.asPath === category.location
                              ? "bg-gray-200"
                              : ""
                          } hover:bg-gray-200 text-gray-900 p-2 cursor-pointer rounded-md text-sm flex flex-row items-center justify-between font-medium`}
                        >
                          {category.name}
                          <ChevronDownIcon height={16} width={16} className="text-gray-700" />
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                <>
                          <Search/>
                </>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              {data.categories.map((category, index) => (
                <Disclosure.Button
                  key={index}
                  as="a"
                  href={category.location}
                  className={`${router.asPath === category.location ? "bg-gray-200" : "" } hover:bg-gray-200 w-full text-gray-700 block px-3 py-2 rounded-md text-sm font-semibold`}
                >
                  {category.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
