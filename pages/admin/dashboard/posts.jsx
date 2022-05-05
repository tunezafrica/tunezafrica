import React, { useState, useEffect } from "react";
import { PencilIcon, SearchIcon, TrashIcon } from "@heroicons/react/outline";
import DashboardLayout from "../../../layouts/DashboardLayout";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment";

function Posts() {
  const [query, setQuery] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const [all_posts, setAllPosts] = useState();

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(`/api/post`);
      setAllPosts(data);
    };
    getPosts();
  }, []);

  console.log(all_posts);

  const search_items = (e) => {
    e.preventDefault();
    console.log(query);
    setQuery("");
  };

  const delete_item = () => {
    console.log("are you sure you want to delte?");
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col p-4 space-y-4">
        <form
          onSubmit={search_items}
          className="flex flex-row items-center w-full border border-gray-300 rounded bg-white px-4"
        >
          <input
            type="search"
            placeholder="search for posts"
            className=" outline-none flex-1 p-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="outline-none border-none">
            <SearchIcon height={20} width={20} />
          </button>
        </form>
        <div className="flex">
          <div className="flex flex-row items-center w-full justify-between">
            <p className="text-gray-700 font-semibold text-lg">
              A list of all posts made
            </p>
            <span
              onClick={() => router.push("/admin/dashboard/add_post")}
              className="p-2 rounded cursor-pointer hover:bg-green-600 bg-green-700 text-sm text-white font-semibold"
            >
              Add Post
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-5 gap-4 bg-black text-white text-sm font-semibold rounded p-2">
            <div className="col-span-1"> name</div>
            <div className="col-span-1"> category</div>
            <div className="col-span-1"> date</div>
            <div className="col-span-1"> artist</div>
            <div className="col-span-1">actions</div>
          </div>
          {all_posts?.map((post, index) => (
            <div key={index} className="grid grid-cols-5 gap-4 p-2 border-b border-gray-300">
              <Text noOfLines={1} className="col-span-1"> {post.title}</Text>
              <div className="col-span-1"> {post.category}</div>
              <div className="col-span-1"> {moment(post.createdAt).fromNow()}</div>
              <div className="col-span-1"> {post.artist}</div>
              <div className="col-span-1 flex flex-row items-center gap-8">
                <div className="cursor-pointer hover:bg-gray-200 rounded-full p-1">
                  <PencilIcon
                    height={20}
                    width={20}
                    className="text-blue-500"
                  />
                </div>
                <div
                  onClick={() => onOpen()}
                  className="cursor-pointer hover:bg-gray-200 rounded-full p-1"
                >
                  <TrashIcon height={20} width={20} className="text-red-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody className="flex flex-col  w-full items-center ">
            <TrashIcon height={80} width={80} className="text-green-700 " />
            <p className="text-gray-800 my-4 font-semibold text-lg text-center">
              Delete
            </p>
            <p className="text-center">
              Are you sure you want to delete product with name {"product_name"}
              ?
            </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={delete_item} colorScheme="red">
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </DashboardLayout>
  );
}

export default Posts;
