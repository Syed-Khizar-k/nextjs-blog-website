import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const blogs = [
  {
    title: "Understanding React",
    description: "A deep dive into the React library.",
    slug: "understanding-react",
    date: "2023-10-01",
    author: "John Doe",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Next.js for Beginners",
    description: "Getting started with Next.js.",
    slug: "nextjs-for-beginners",
    date: "2023-10-05",
    author: "Jane Smith",
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Understanding React",
    description: "A deep dive into the React library.",
    slug: "understanding-react",
    date: "2023-10-01",
    author: "John Doe",
    image:
      "https://images.pexels.com/photos/6804613/pexels-photo-6804613.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Next.js for Beginners",
    description: "Getting started with Next.js.",
    slug: "nextjs-for-beginners",
    date: "2023-10-05",
    author: "Jane Smith",
    image:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  // Add more blog objects as needed
];

const BlogPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className=" rounded-lg shadow-md overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-74 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="">{blog.description}</p>
              <p className=" text-sm">
                By {blog.author} on{" "}
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
