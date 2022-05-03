import React, { useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { Button, Text } from "@chakra-ui/react";

export default function AddSongs(props) {
  const [variations, setVariants] = useState([]);
  const [variant_name, setVarinatName] = useState("");

  const addTags = () => {
    setVariants([
      ...variations,
      {
        variant: variant_name,
      },
    ]);
    props.selectedTags([
      ...variations,
      {
        variant: variant_name,
      },
    ]);
  };

  const removeTags = (index) => {
    setVariants([
      ...variations.filter(
        (variation) => variations.indexOf(variation) !== index
      ),
    ]);
  };

  return (
    <div className="mt-4 mb-2 flex flex-col">
      <div className={`${props.className} tags-input flex-col mb-4`}>
        <ul className="flex flex-col w-full pl-1">
          {
            <>
              {variations.length >= 1 && (
                <div className="flex flex-row items-center border-b border-gray-200 pb-2 mb-2 gap-2 text-gray-700 text-sm capitalize font-semibold">
                  <p className="flex-1">name</p>

                  <p className="col-span-1">delete</p>
                </div>
              )}
              {variations.map((tag, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center `text-gray-400 text-sm gap-2"
                >
                  <Text noOfLines={1} className="flex-1 text-gray-700">
                    {index + 1}. {tag.variant}
                  </Text>

                  <div className="flex">
                    <i
                      className="material-icons col-span-1 p-1 bg-gray-100 rounded-full"
                      onClick={() => removeTags(index)}
                    >
                      <XIcon
                        width={16}
                        height={16}
                        className="cursor-pointer text-gray-700"
                      />
                    </i>
                  </div>
                </div>
              ))}
            </>
          }
        </ul>
      </div>
      <div className="col-span-6 mb-2">
        <label
          htmlFor="city"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Enter song name
        </label>
        <input
          type="text"
          name="name"
          onChange={(e) => setVarinatName(e.target.value)}
          id="name"
          autoComplete="name"
          placeholder="enter song name"
          className="mt-1 block w-full outline-none sm:text-sm border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="ml-auto">
        <Button size={"sm"} colorScheme={"green"} onClick={addTags}>
          Add Song
        </Button>
      </div>
    </div>
  );
}
