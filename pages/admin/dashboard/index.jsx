import { ClipboardListIcon, CogIcon, DatabaseIcon, ShoppingCartIcon, UserGroupIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";

function Dashboard() {

  const home_links = [
    {
      heading: 'Posts',
      description: 'All posts in the platform show here and you can manage',
      icon: <DatabaseIcon height={28} width={28} className="text-gray-700" />,
      location: '/admin/dashboard/posts',
    },
    {
      heading: 'Ads',
      description: 'Add and remove ads from explore page',
      icon: (
        <ClipboardListIcon height={28} width={28} className="text-gray-700" />
      ),
      location: '/admin/dashboard/ads',
    },
    {
      heading: 'Users',
      description: 'Manage users and their roles',
      icon: <UserGroupIcon height={28} width={28} className="text-gray-700" />,
      location: '/admin/dashboard/users',
    },
    {
      heading: 'Stores',
      description: 'Manage individual setings like password and permissions',
      icon: <CogIcon height={28} width={28} className="text-gray-700" />,
      location: '/admin/dashboard/settings',
    },
  ]

  return <DashboardLayout>
     <p className="mt-8 text-center text-xl font-semibold text-gray-700">
        Welcome to the admin dashboard
      </p>
      <p className="mb-8 text-center text-sm text-gray-400">
        What do you want to manage today?
      </p>
      <div className="grid w-full grid-cols-1 gap-8 px-4 md:grid-cols-4">
        {home_links?.map((link, index) => (
          <HomeItem
            location={link.location}
            key={index}
            icon={link.icon}
            heading={link.heading}
            description={link.description}
          />
        ))}
      </div>
  </DashboardLayout>;
}


const HomeItem = ({ heading, icon, description, location }) => {
  const history = useRouter()
  return (
    <div
      onClick={() => history.push(location)}
      className="col-span-1 flex cursor-pointer gap-4 rounded bg-white p-4"
    >
      <div className="flex flex-col">
        <div className="flex flex-col rounded-full bg-gray-100 p-2">{icon}</div>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-semibold capitalize text-gray-900">
          {heading}
        </p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default Dashboard;
