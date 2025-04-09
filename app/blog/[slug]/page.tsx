import blogdata from "@/data/blogdata.json";

const blogarray = blogdata.blogs;
interface paramInside {
  slug: string;
}
interface paramFull {
  params: paramInside;
}
const BlogPost = ({ params }: paramFull) => {
  const { slug } = params;

  const filterData = slug ? blogarray.filter((blog) => slug === blog.slug) : [];

  return filterData.map((blog) => {
    return (
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg" key={blog.id}>
        <h1 className="text-2xl font-bold mb-8">{blog.title}</h1>
        <blockquote className="mb-4">
          By <i className="font-bold">{blog.author}</i> on{" "}
          <i className="font-bold">{blog.date}</i>
        </blockquote>

        <img
          src={blog.image}
          alt="no image"
          className="h-[50vh] md:w-[40vw] w-full   rounded-2xl"
        />

        <div>
          <p className="text-[18px]">{blog.para}</p>
        </div>
      </div>
    );
  });
};

export default BlogPost;
