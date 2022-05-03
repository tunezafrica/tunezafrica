import { useState } from "react";
import { MenuAlt1Icon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { Avatar, Text } from "@chakra-ui/react";
import Cookies from 'js-cookie'

function DashboardNavbar({ setSidebarOpen }) {
  const [query, setQuery] = useState("");
  const history = useRouter();

  const search_items_handler = (e) => {
    e.preventDefault();
    console.log(query);
  };

  const logout_user = () => {
    history.push("/");
    Cookies.remove('tunezUserInfo')
    window.location.reload();
  };

  return (
    <>
      <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
        <button
          type="button"
          className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        {/* Search bar */}
        <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <div className="flex-1 flex">
            <form
              onSubmit={search_items_handler}
              className="w-full flex md:ml-0"
              action="#"
              method="GET"
            >
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div
                  className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                  aria-hidden="true"
                >
                  <SearchIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  name="search-field"
                  onChange={(e) => setQuery(e.target.value)}
                  className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 outline-none sm:text-sm"
                  placeholder="Search items"
                  type="search"
                />
              </div>
            </form>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              onClick={logout_user}
              className="max-w-xs bg-white rounded-full space-x-2 flex items-center text-sm focus:outline-none lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
            >
              <Avatar size="sm" name={"TunezAfrica"} />
              <span className="hidden text-gray-700 text-sm font-medium lg:block">
                <span className="sr-only">Logout </span>
                <Text>Logout</Text>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardNavbar;
