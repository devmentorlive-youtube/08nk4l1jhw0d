import { jsonify } from "@/modules/db";
import { getPosts } from "@/api/posts";

import Layout from "@/features/layout";

export default function BlogPage({ posts = [] }) {
  return (
    <Layout>
      <div className="flex flex-col gap-8">
        {posts.map(({ author, title }) => (
          <div className="flex flex-col gap-8 border-2 border-white p-8">
            <div className="text-5xl font-black">{title}</div>
            <div className="font-medium text-xl">{author[0].name}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      posts: jsonify(await getPosts()),
    },
  };
}
