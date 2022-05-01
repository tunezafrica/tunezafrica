import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CogIcon,
  CreditCardIcon,
  XIcon,
  ClipboardListIcon,
  ShoppingBagIcon,
  TemplateIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline";
import logo from "../../public/icon.png";
import { useRouter } from "next/router";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/admin/dashboard", icon: TemplateIcon, current: false },
  {
    name: "Posts",
    href: "/admin/dashboard/posts",
    icon: ClipboardListIcon,
    current: false,
  },
  {
    name: "Manage Ads",
    href: "/admin/dashboard/ads",
    icon: ShoppingBagIcon,
    current: false,
  },
  { name: "Admin Settings", href: "/admin/dashboard/settings", icon: CogIcon },
];


function DashboardSidebar({ sidebarOpen, setSidebarOpen }) {

  const { pathname } = useRouter();
  const router = useRouter();


  return (
    <div className="h-screen bg-gray-900">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-900">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div
                onClick={() => router.push("/")}
                className="cursor pointer flex-shrink-0 flex items-center px-4"
              >
                <div className="relative self-center mx-auto h-16 my-4">
                  <Image
                    layout="fill"
                    src={logo}
                    alt="dashboard indicator of site name"
                  />
                </div>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow bg-gray-900 pt-5 pb-4 overflow-y-auto">
            <div
              onClick={() => router.push("/")}
              className="flex items-center flex-shrink-0"
            >
              <div className=" py-2 h-40 self-center mx-auto">
                <Image
                  objectFit="contain"
                  height={250}
                  src={logo}
                  alt="dashboard indicator of site name"
                />
              </div>
            </div>

            <nav
              className="mt-5 flex-1 flex flex-col divide-y divide-blue-dark overflow-y-auto"
              aria-label="Sidebar"
            >
              <div className="px-2 space-y-1">
                {navigation.map((item) => (
                  <div
                    onClick={() => router.push(item.href)}
                    key={item.name}
                    className={`${
                      pathname === item.href
                        ? "bg-blue-dark"
                        : "bg-gray-900 hover:bg-blue-dark "
                    } text-white group cursor-pointer flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md`}
                  >
                    <item.icon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardSidebar;
