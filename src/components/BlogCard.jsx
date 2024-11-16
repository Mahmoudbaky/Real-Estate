import React from "react";

const BlogCard = ({ post }) => {
  const postObject = post.fields;
  console.log(post.fields.blogImage.fields.file.url);

  const Author = postObject.blogAuthor;
  const Title = postObject.blogTitle;
  const Image = postObject.blogImage.fields.file.url;
  const Summary = postObject.blogSummary;
  const Date = postObject.createdDate;
  const Content = postObject.postContent;

  return (
    <div id="post-card" className="text-black border-8">
      <h1>{Author}</h1>
      <img src={Image} alt="" />
    </div>
  );
};

export default BlogCard;

// ((data) => {
//   // dont forget to use () if you will use only html
//   // dont forget to use {} if you will use js and dont forget the return after the js code

//   console.log(data);

//   const title = data.fields.blogTitle;
//   // const image =

//   return (
//     <div className="text-black" key={data.sys.id}>
//       <h1 className="text-black">{title}</h1>
//     </div>
//   );
// })
