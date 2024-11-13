import React from "react";
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const spaceId = import.meta.env.VITE_SPACE_ID;
  const apiKey = import.meta.env.VITE_API_KEY;

  const client = createClient({
    space: spaceId,
    accessToken: apiKey,
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries.items[0].fields.blogAuthor);
        });
      } catch (err) {
        console.log(err);
      }
    };

    getAllEntries();
  }, []);

  return (
    <div className="text-white">
      <NavBar />
      <div
        className="min-h-[300px] bg-brand-blue flex flex-col justify-center "
        dir="rtl"
      >
        <h1 className="text-3xl">المدونة</h1>
        <span> يمكنكم متابعة اخبارنا من خلال المدونة </span>
      </div>

      <div></div>
    </div>
  );
};

export default BlogList;
