export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <div className="max-w-4xl mx-auto bg-red-400">My Post: {slug}</div>;
}
