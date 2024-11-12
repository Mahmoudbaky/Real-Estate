import React from "react";
import { createClient } from "contentful";
import { useEffect, useState } from "react";

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
    <div className="text-black">
      <p>{}</p>
      <p></p>
      <p></p>
    </div>
  );
};

export default BlogList;
