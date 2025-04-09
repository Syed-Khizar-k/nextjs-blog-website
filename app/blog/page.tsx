// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import blogsdata from "@/data/blogdata.json";

const blogs = blogsdata.blogs;
const BlogPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="rounded-lg shadow-md overflow-hidden">
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-4">
              <Link href={`/blog/${blog.slug}`}>
                <h2 className="text-2xl font-bold hover:underline">
                  {blog.title}
                </h2>
              </Link>
              <p>{blog.description}</p>
              <p className="text-sm pb-4">
                By <span className="font-extrabold">{blog.author}</span> |{" "}
                <span className="font-extrabold">{blog.date}</span>
              </p>
              <Link href={`/blog/${blog.slug}`}>
                <Button className="text-white">Read more</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
