import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface BlogData {
  title?: string;
  description?: string;
  slug?: string;
  date?: string;
  author?: string;
  image?: string;
  content?: string;
}

async function getBlogs(): Promise<BlogData[]> {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);

  const blogs: BlogData[] = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        ...data,
        slug,
        content,
      };
    });

  return blogs;
}

const BlogPage = async () => {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.slug} className="rounded-lg shadow-md overflow-hidden">
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
              <Link
                href={`/blog/${blog.slug}`}
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
