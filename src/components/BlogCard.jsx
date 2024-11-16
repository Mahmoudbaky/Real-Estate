import React from "react";

const BlogCard = ({ posts }) => {
  return (
    <div id="post-card" className="text-black border-8">
      {posts?.items?.map((post) => {
        // dont forget to use () if you will use only html
        // dont forget to use {} if you will use js and dont forget the return after the js code

        const title = post.fields.blogTitle;
        return (
          <div className="text-black" key={post.sys.id}>
            <h1 className="text-black">{title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;
