import fs from "fs";
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

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = `content/${slug}.md`;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: blog, content } = matter(fileContent) as {
    data: BlogMetadata;
    content: string;
  };

  //for code beauty means formatting
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify);
  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg prose ">
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

// Corrected rehypeDocument function
function rehypeDocument(options: { title: string }): (tree: Node) => void {
  return (tree) => {
    // Implement the transformation logic here
    // For example, you could add a title to the document
    console.log(`Document title: ${options.title}`);
    // You can manipulate the tree as needed
  };
}
