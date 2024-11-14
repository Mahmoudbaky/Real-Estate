import React from "react";

const BlogCard = ({ posts }) => {
  console.log(posts);
  return (
    <div id="post-card" className="text-black" dir="rtl">
      {posts?.items?.map((post) => {
        <div>
          <img src={post.fields.blogAuthor} alt="" />
        </div>;
      })}
    </div>
  );
};

export default BlogCard;
