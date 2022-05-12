import React, { useState, useEffect } from "react";
import {
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@heroicons/react/outline";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

function Search() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search_query, setSearchQuery] = useState("");
  const [all_posts, setAllPosts] = useState();
  const router = useRouter();

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.post(`/api/post`, {
        query: search_query,
      });
      setAllPosts(data);
    };
    getPosts();
  }, [search_query]);

  console.log(all_posts);

  const search_handler = () => {
    onClose();
  };

  return (
    <>
      <div
        onClick={onOpen}
        className="flex md:p-3 p-2 hover:bg-gray-200 cursor-pointer md:rounded-full rounded bg-gray-200"
      >
        <SearchIcon
          height={20}
          width={20}
          className="md:text-gray-700 text-gray-500"
        />
        <p className="ml-4 text-gray-500 md:hidden flex">Search for music...</p>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex flex-row items-center">
              <input
                id="search"
                name="search"
                onChange={(e) => setSearchQuery(e.target.value)}
                className="md:p-4 p-2 rounded outline-none border-none w-full "
                placeholder="Search artist, category, song ..."
                type="search"
              />
              <div onClick={search_handler} className="cursor-pointer">
                <SearchIcon height={20} width={20} className="text-gray-500" />
              </div>
            </div>
            <div className="bg-white border-t border-gray-200 p-4">
              {/* <p className="text-center font-semibold capitalize">
                search results
              </p> */}
              {search_query === "" ? (
                <p className="text-center text-gray-400 py-3">
                  Nothing has been searched
                </p>
              ) : (
                <div className="flex flex-col">
                  {all_posts?.length < 1 ? (
                    <p className="text-center text-gray-400 py-3">
                      No results found
                    </p>
                  ) : (
                    <>
                      {all_posts?.map((item, index) => (
                        <div
                          onClick={() => router.push(`/post/${item._id}`)}
                          key={index}
                          className="flex cursor-default flex-row items-center p-2"
                        >
                          {/* <Avatar src={item.picture}   rounded={"md"} /> */}
                          <div className="relative h-14 rounded w-14 overflow-hidden">
                            <Image
                              src={item.picture}
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                          <div className="flex flex-col pl-4">
                            <Text
                              noOfLines={1}
                              className="text-gray-800 font-semibold"
                            >
                              {item.title}
                            </Text>
                            <p className="text-gray-400 text-sm">
                              {item.artist}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div className="my-1"></div>
                      {all_posts?.length > 8 && (
                        <div className="flex flex-col text-center capitalize text-gray-500 pt-2 border-t border-gray-300 cursor-pointer">
                          <p className="text-center">View all results</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Search;
