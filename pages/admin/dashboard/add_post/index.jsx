import React, { useState } from "react";
import DashboardLayout from "../../../../layouts/DashboardLayout";

function AddPost() {
  const [name, setName] = useState("");
  const handle_post_upload = () => {
    console.log(name);
  };
  return (
    <DashboardLayout>
      <div className="flex flex-col w-full p-4">
        <p className="text-center text-gray-700 font-semibold text-lg pb-8">
          Add New Post/Music
        </p>
        <div className=" grid grid-cols-2 gap-4 w-full space-y-4">
          <div className="flex flex-col col-span-2 ">
            <p className="text-gray-700 font-semibold text-sm p-1">
              name/title
            </p>
            <input
              type="text"
              placeholder="item name or title"
              className="p-2 rounded border border-gray-300 outline-none"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col col-span-1 ">
            <p className="text-gray-700 font-semibold text-sm p-1">category</p>
            <input
              type="text"
              placeholder="item name or title"
              className="p-2 rounded border border-gray-300 outline-none"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col col-span-1 ">
            <p className="text-gray-700 font-semibold text-sm p-1">
              sub-category
            </p>
            <input
              type="text"
              placeholder="item name or title"
              className="p-2 rounded border border-gray-300 outline-none"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col col-span-2 ">
            <p className="text-gray-700 font-semibold text-sm p-1">
              description
            </p>
            <textarea
              rows={15}
              type="text"
              placeholder="item name or title"
              className="p-2 rounded border border-gray-300 outline-none"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col col-span-2 ">
            <div className="flex flex-col w-full bg-green-700 hover:bg-green-600 cursor-pointer p-2 rounded-full text-center text-white font-semibold">
                upload item
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AddPost;
