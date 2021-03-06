import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralLayout from "../../layouts/GeneralLayout";
import SongItem from "../../components/SongItem/SongItem";
import SongLoading from "../../components/SongItem/SongsLoading";
import { Store } from "../../Context/Store";

function Explore() {
  const [all_posts, setAllPosts] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { state } = useContext(Store);
  const { search_query } = state;

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.post(`/api/post?page=${page}`, {
          query: search_query,
        });
        setLoading(false);
        setAllPosts(data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getAllPosts();
  }, [page, search_query]);

  if (loading) {
    return (
      <GeneralLayout>
        <div className="py-8">
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
            {[1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15]?.map(
              (item, index) => (
                <SongLoading key={index} />
              )
            )}
          </div>
        </div>
      </GeneralLayout>
    );
  }

  return (
    <GeneralLayout>
      <div className="py-8">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
          {all_posts?.map((item, index) => (
            <SongItem
              key={index}
              category={item.category}
              item_name={item.title}
              artist_name={item.artist}
              picture={item.picture}
              id={item._id}
            />
          ))}
        </div>
        <div className="flex flex-row items-center w-full justify-between md:pt-16 pt-8">
          <div
            // onClick={() => setSkip(skip - 5)}
            className="text-white cursor-pointer bg-green-700 text-sm p-1 rounded"
          >
            Prev Page
          </div>
          <div
            onClick={() => setPage(page + 1)}
            className="text-white cursor-pointer bg-green-700 text-sm p-1 rounded"
          >
            Next Page
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default Explore;
