import React from "react";
import { Disclosure } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import data from "../../utils/data";
import { useRouter } from "next/router";
import logo from '../../public/icon.png'
import Image from "next/image";

function Navbar() {
  const router = useRouter()
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <Image
                    className="block lg:hidden h-8 w-auto"
                    src={logo}
                    height={25}
                    width={25}
                    objectFit="cover"
                    alt="Workflow"
                  />
                  <div className="hidden lg:flex flex-row items-center">
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
                  <div className="flex space-x-4">
                    {data.categories.map((category, index) => (
                      <div
                        onClick={()=> router.push(category.location)}
                        key={index + category.name}
                        href={category.location}
                        className={`${router.asPath === category.location ? "bg-gray-200" : ""} hover:bg-gray-200 text-gray-900 px-3 py-2 cursor-pointer rounded-md text-sm font-medium`}
                      >
                        {category.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
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
             {
               data.categories.map((category, index)=>(
                <Disclosure.Button
                key={index}
                as="a"
                href={category.location}
                className="hover:bg-gray-200 text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                {category.name}
              </Disclosure.Button>
               ))
             }
             
            </div>
           
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
