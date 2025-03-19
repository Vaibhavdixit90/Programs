import Link from "next/link";
import React from "react";

const blogPosts = [
  {
    id: 1,
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/6/thumbnail-1.png",
    category: "Growth",
    date: "April 09, 2022",
    title: "How a visual artist redefines success in graphic design",
    link: "/blogs/1",
  },
  {
    id: 2,
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/6/thumbnail-2.png",
    category: "Growth",
    date: "April 09, 2022",
    title: "How a visual artist redefines success in graphic design",
    link: "/blogs/2",
  },
  {
    id: 3,
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/6/thumbnail-3.png",
    category: "Growth",
    date: "April 09, 2022",
    title: "How a visual artist redefines success in graphic design",
    link: "/blogs/3",
  },
];

const BlogListing = () => {
  return (
    <div className="px-4 sm:py-16 py-12">
      <div className="max-w-md mx-auto md:mx-0">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Read latest collection
        </h2>
      </div>

      <div className="grid grid-cols-1 mx-auto mt-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-6 md:gap-x-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="group">
            <div className="relative">
              <div className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl">
                <img
                  className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <span className="absolute px-3 py-2 text-xs font-bold tracking-widest uppercase bg-white rounded left-3 top-3">
                {post.category}
              </span>
            </div>
            <p className="mt-6 text-sm font-medium">{post.date}</p>
            <p className="mt-4 text-xl font-bold leading-tight xl:pr-8">
              {post.title}
            </p>
            <div className="mt-6">
              <Link
                href={post.link}
                className="inline-flex items-center pb-2 text-xs font-bold tracking-widest uppercase border-b border-gray-900 group"
              >
                Continue Reading
                <svg
                  className="w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListing;
