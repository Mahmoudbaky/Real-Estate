import React from "react";
import { createClient } from "contentful";
import { useEffect, useState } from "react";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  const client = createClient({
    space: "zba2opc99q87",
    accessToken: "D7zaxWWS4xhueH_ZbDhK3UjTOmCWZM5sVPPLVXdV_IU",
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
