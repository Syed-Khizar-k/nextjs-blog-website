import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { Node } from "unist";

interface BlogMetadata {
  author: string;
  description: string;
  date: string;
}

interface BlogPageProps {
  blog: BlogMetadata;
  content: string;
}

// Fetch the available slugs for dynamic routing
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);

  return files.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Fetch the markdown file content
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);
  let fileContent = "";

  try {
    fileContent = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    return <div className="text-red-500 text-center mt-10">Blog not found.</div>;
  }

  // Parse the frontmatter and content
  const { data: blog, content } = matter(fileContent) as unknown as {
    data: BlogMetadata;
    content: string;
  };

  // Process markdown content to HTML
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: blog.description })
    .use(rehypeFormat)
    .use(rehypeStringify);

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg prose">
      <h1 className="text-2xl font-bold mb-2">{blog.description}</h1>
      <blockquote className="mb-4">
        By <i className="font-bold">{blog.author}</i> on{" "}
        <i className="font-bold">{blog.date}</i>
      </blockquote>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  );
}

// Optional: Enhance or customize the HTML tree
function rehypeDocument(options: { title: string }): (tree: Node) => void {
  return (tree) => {
    console.log(`Document title: ${options.title}`);
    // Modify the tree if needed here
  };
}
