"use client";
import blogdata from "@/data/blogdata.json";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const blogarray = blogdata.blogs;

const BlogPost = () => {
  const [slug, setSlug]: any = useState(null);
  useEffect(() => {
    const router = useRouter();
    const slug = router.query;
    setSlug(slug);
  }, []);

  const data = blogarray.filter((item) => {
    item.slug === slug;
  });
  return data.map((blog) => {
    return (
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg" key={blog.id}>
        <h1 className="text-2xl font-bold mb-8">{blog.title}</h1>
        <blockquote className="mb-4">
          By <i className="font-bold">{blog.author}</i> on{" "}
          <i className="font-bold">{blog.date}</i>
        </blockquote>
        <div>
          <p>{blog.para}</p>
        </div>
      </div>
    );
  });
};

export default BlogPost;
