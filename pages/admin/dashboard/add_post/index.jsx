import { PlusIcon } from "@heroicons/react/outline";
import React, { useState, useEffect, useContext } from "react";
import DashboardLayout from "../../../../layouts/DashboardLayout";
import { Button, Select, useToast } from "@chakra-ui/react";
import data from "../../../../utils/data";
import slugify from "../../../../utils/slugify";
import AddSongs from "../../../../components/AddSongs/AddSongs";
import axios from "axios";
import { storage } from "../../../../utils/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { Store } from "../../../../Context/Store";
import Image from 'next/image'

function AddPost() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [sub_category, setSubCategory] = useState("");
  const [description, setDescription] = useState("");
  const [music, setMusic] = useState([]);
  const [artist, setArtist] = useState("");
  const [link, setLink] = useState("");
  const toast = useToast();

  const { state } = useContext(Store);
  const { tunezUserInfo } = state;

  const [loading, setLoading] = useState(false);

  const [current_cat_obj, setCurrentCategory] = useState();

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const selectedTags = (tags) => {
    setMusic(tags);
  };

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    var tuna = data?.categories?.find(function (sandwich) {
      return sandwich.slug === slugify(category);
    });
    setCurrentCategory(tuna);
  }, [category]);

  const handle_post_upload = async () => {
    if (!name || !artist || !category) {
      toast({
        title: "Some fields are empty!.",
        status: "error",
        duration: 5000,
        position: "top-right",
        isClosable: true,
      });
    } else {
      try {
        setLoading(true);
        const storageRef = ref(
          storage,
          `files/${selectedFile.name}-${Date.now()}`
        );
        const uploadTask = uploadBytesResumable(storageRef, selectedFile);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log(progress);
          },
          (error) => {
            alert(error);
            console.log(error);
            setLoading(false);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                console.log(downloadURL);
                await axios.post(
                  "/api/post/create",
                  {
                    picture: downloadURL,
                    title: name,
                    description: description,
                    category: category,
                    sub_category: sub_category,
                    music: music,
                    download_link: link,
                    artist: artist,
                  },
                  {
                    headers: {
                      Authorization: tunezUserInfo.token,
                    },
                  }
                );
                toast({
                  title: "Item added successfully.",
                  status: "success",
                  duration: 5000,
                  position: "top-right",
                  isClosable: true,
                });
                setLoading(false);
              }
            );
          }
        );
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
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
              Featured Image
            </p>
            <div className="flex flex-row space-x-4 items-center">
              <div className="relative flex-row col-span-1 h-32 w-32 rounded-lg border bg-gray-200 border-dashed border-gray-500 flex justify-center items-center">
                <div className="absolute">
                  <div className="flex flex-col items-center">
                    <PlusIcon
                      height={20}
                      width={20}
                      className="text-gray-700"
                    />
                  </div>
                </div>

                <input
                  onChange={onSelectFile}
                  type="file"
                  className="h-full w-full opacity-0"
                  name=""
                />
              </div>
              <div className="flex">
                {selectedFile && (
                  <div className="relative h-72 w-72">
                    <Image src={preview} layout="fill" className="rounded-lg " />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-2 ">
            <p className="text-gray-700 font-semibold text-sm p-1">artist</p>
            <input
              type="text"
              placeholder="item name or title"
              className="p-2 rounded border border-gray-300 outline-none"
              onChange={(e) => setArtist(e.target.value)}
            />
          </div>
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
            <Select
              bg={"white"}
              placeholder="Select category"
              onChange={(e) => setCategory(e.target.value)}
              className="rounded border border-gray-300 outline-none"
            >
              {data.categories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col col-span-1 ">
            <p className="text-gray-700 font-semibold text-sm p-1">
              sub-category
            </p>
            <Select
              bg={"white"}
              placeholder={
                current_cat_obj?.sub_categories[0].name
                  ? current_cat_obj?.sub_categories[0].name
                  : "No category selected"
              }
              onChange={(e) => setSubCategory(e.target.value)}
              defaultValue={current_cat_obj?.sub_categories[0].name}
              className="rounded border border-gray-300 outline-none"
            >
              {current_cat_obj?.sub_categories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col col-span-2 ">
            <p className="text-gray-700 font-semibold text-sm p-1">
              description
            </p>
            <textarea
              rows={5}
              type="text"
              placeholder="item description"
              className="p-2 rounded border border-gray-300 outline-none"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col col-span-2 ">
            <p className="text-gray-700 font-semibold text-sm p-1">
              Download link (Optional)
            </p>
            <input
              type="text"
              placeholder="item name or title"
              className="p-2 rounded border border-gray-300 outline-none"
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className="flex flex-col col-span-2 ">
            <p className="text-gray-700 font-semibold text-sm p-1">
              Songs / Song
            </p>
            <>
              <AddSongs selectedTags={selectedTags} className="" />
            </>
          </div>
          <div className="flex flex-col col-span-2 ">
            <Button
              colorScheme={"green"}
              rounded="full"
              isLoading={loading}
              onClick={handle_post_upload}
            >
              upload item
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AddPost;
