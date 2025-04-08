import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import fs from "fs";
import matter from "gray-matter";
interface blogdata {
  title?: string;
  description?: string;
  slug?: string;
  date?: string;
  author?: string;
  image?: string;
}

const dirContent = fs.readdirSync("content", "utf-8");
const blogs = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const data = matter(fileContent);
  return {
    ...data.data,
    slug: file.replace(/\.md$/, ""),
    content: data.content,
  };
});

const BlogPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog: blogdata) => (
          <div key={blog.slug} className="rounded-lg shadow-md overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-74 object-cover"
            />
            <div className="p-4">
              <Link href={`/blogpost/${blog.slug}`}>
                <h2 className="text-2xl font-bold">{blog.title}</h2>
              </Link>
              <p className="">{blog.description}</p>
              <p className="text-sm pb-4 ">
                By
                <span className="font-extrabold"> {blog.author}</span> |{" "}
                <span className="font-extrabold">{blog.date}</span>
              </p>
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant: "outline" })}>
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
