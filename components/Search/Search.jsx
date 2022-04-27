import React, {useState} from "react";
import {
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { SearchIcon } from "@heroicons/react/outline";

function Search() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search_query, setSearchQuery] = useState('')
  const search_handler = () => {
    onClose();
  };
  return (
    <>
      <div
        onClick={onOpen}
        className="flex md:p-3 p-2 hover:bg-gray-200 cursor-pointer md:rounded-full rounded bg-gray-200"
      >
        <SearchIcon height={20} width={20} className="md:text-gray-700 text-gray-500" />
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Search;
