import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  const postObject = post.fields;

  const Author = postObject.blogAuthor;
  const Title = postObject.blogTitle;
  const Image = postObject.blogImage.fields.file.url;
  const Summary = postObject.blogSummary;
  const date = new Date(postObject.createdDate);
  const Content = postObject.postContent;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="#">
          <img className="rounded-t-lg" src={Image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              {Title}
            </h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">{Summary}</p>
          <a
            className="text-white bg-brand-blue hover:bg-brand-blue-light transition-all focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            href="#"
          >
            Read more
          </a>
        </div>
      </div>
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

{
  /* <div
      id="post-card"
      className="text-black border-2 border-white rounded-lg shadow-lg flex flex-col items-start"
    >
      <div className="m-7 self-center ">
        <img className="w-full rounded-lg" src={Image} alt="" />
      </div>
      <div className="space-y-4">
        <h1 className="text-black text-2xl mx-7">{Title}</h1>
        <p className="text-gray-700 mx-7 text-pretty">{Summary}</p>
        <div className="flex justify-between m-7 items-center ">
          <div className="flex gap-5 text-white mb-7">
            <div className="flex items-center bg-brand-blue-light px-5 py-1 rounded-full gap-3">
              <FaRegUser />
              <span>{Author}</span>
            </div>
            <div className="flex items-center bg-brand-blue-light px-5 py-1 rounded-full gap-3">
              <MdOutlineDateRange />
              <span>{formattedDate}</span>
            </div>
          </div>
          <Link className="text-white flex items-center bg-brand-blue-light px-5 py-1 rounded-full gap-3 mb-7">
            {" "}
            Read more{" "}
          </Link>
        </div>
      </div>
    </div> */
}
