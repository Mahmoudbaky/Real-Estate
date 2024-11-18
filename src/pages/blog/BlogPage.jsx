import React from "react";
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { div } from "framer-motion/client";

const BlogPage = () => {
  const [singleBlogPost, setSingleBlogPost] = useState([]);
  const spaceId = import.meta.env.VITE_SPACE_ID;
  const apiKey = import.meta.env.VITE_API_KEY;
  const { id } = useParams();

  const client = createClient({
    space: spaceId,
    accessToken: apiKey,
  });

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          setSingleBlogPost(entries);
        });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getEntryById();
  }, [id]);

  const date = new Date(singleBlogPost?.fields?.createdDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  console.log(singleBlogPost);

  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="max-w-3xl mx-auto">
          <div className="py-8">
            <h1 className="text-3xl font-bold mb-2">
              {singleBlogPost?.fields?.blogTitle}
            </h1>
            <p className="text-gray-500 text-sm">
              Published on <time datetime="2022-04-05"> {formattedDate}</time>
            </p>
          </div>

          <img
            src={singleBlogPost?.fields?.blogImage?.fields?.file?.url}
            alt="Featured image"
            className="w-full h-auto mb-8 rounded-lg"
          />

          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto text-justify">
            {singleBlogPost?.fields?.postContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
