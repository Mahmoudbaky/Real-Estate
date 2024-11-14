import React from "react";
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import BlogCard from "../../components/BlogCard";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const spaceId = import.meta.env.VITE_SPACE_ID;
  const apiKey = import.meta.env.VITE_API_KEY;

  const client = createClient({
    space: spaceId,
    accessToken: apiKey,
  });

  // const blogs = [
  //   {
  //     id: 1,
  //     title: "Blog Post 1",
  //     excerpt: "This is a summary of Blog Post 1.",
  //   },
  //   {
  //     id: 2,
  //     title: "Blog Post 2",
  //     excerpt: "This is a summary of Blog Post 2.",
  //   },
  //   {
  //     id: 3,
  //     title: "Blog Post 3",
  //     excerpt: "This is a summary of Blog Post 3.",
  //   },
  // ];

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          setPosts(entries);
        });
      } catch (err) {
        console.log(err);
      }
    };

    getAllEntries();
  }, []);

  console.log(
    posts?.items?.map((post) => {
      console.log(post);
    })
  );

  return (
    <div className="text-white pure">
      <NavBar />
      <div className="whole-page">
        {/* the header */}
        <div className="bg-brand-blue">
          <div
            id="the header"
            className="text-black bg-brand-blue min-h-[300px] max-w-[80%] flex flex-col justify-center mx-auto"
            dir="rtl"
          >
            <div className="xl:px-[100px] text-white flex flex-col gap-3">
              <h1 className="text-3xl">المدونة</h1>
              <span> يمكنكم متابعة اخبارنا من خلال المدونة </span>
            </div>
          </div>
        </div>
        {/* the list */}
        <div
          id="blog-list"
          className="text-black min-h-[300px] max-w-[80%] flex flex-col justify-center mx-auto "
        >
          <div className="px-[100px] text-black flex flex-col gap-3">
            <div id="post-card" className="text-black border-8">
              {posts?.items?.map((post) => {
                <div className="text-black" key={post.sys.id}>
                  <h1 className="text-white">{post.fields.blogTitle}</h1>
                </div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;

{
  /* <div
        className="min-h-[300px] bg-brand-blue flex flex-col justify-center items-start"
        dir="rtl"
      >
        
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-[50%] mx-auto my-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white text-black rounded-lg flex flex-col shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>

            <p className="text-gray-700">{blog.excerpt}</p>
          </div>
        ))}
      </div> */
}

// post.fields.blogImage.fields.file.url
