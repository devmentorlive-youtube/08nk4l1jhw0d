import { useState } from "react";
import { getAuthor } from "@/api/authors/[_id]";
import { getPosts } from "@/api/posts";

import { jsonify } from "@/modules/db";
import Layout from "@/features/layout";
import PenIcon from "@/ui/icons/pen";
import Modal from "@/ui/modal";
import TextField from "@/ui/forms/text-field";
import TextArea from "@/ui/forms/text-area";
import withLabel from "@/ui/forms/with-label";

import OutlineButton from "@/ui/buttons";

const TitleField = withLabel(TextField);
const MarkdownField = withLabel(TextArea);

const defaultAttrs = {
  title: "",
  markdown: "",
};
export default function AuthorPage({ author, posts }) {
  const [selectedPost, setSelectedPost] = useState(defaultAttrs);

  const columns = ["_id", "title", "actions"];

  async function save() {
    const res = await fetch(
      `/api/posts/${selectedPost._id ? selectedPost._id : ""}`,
      {
        method: selectedPost._id ? "PUT" : "POST",
        body: JSON.stringify(selectedPost),
      }
    );
    const json = await res.json();

    console.dir({ json });
  }

  return (
    <Layout>
      <h1>You are authenticated</h1>
      <table className="border border-white p-4 block">
        {posts.map((post) => (
          <tr>
            {columns.map((attr) => (
              <th>{attr}</th>
            ))}
          </tr>
        ))}

        {posts.map((post) => (
          <tr>
            {columns.map((attr) => (
              <td className="border-t p-2">
                {typeof post[attr] === "object"
                  ? JSON.stringify(post[attr])
                  : post[attr]}
              </td>
            ))}
            <td>
              <PenIcon className="w-5" onClick={(e) => setSelectedPost(post)} />
            </td>
          </tr>
        ))}
      </table>

      <Modal
        isOpen={Boolean(selectedPost)}
        close={() => setSelectedPost(undefined)}>
        <div className="text-black">
          <div className="text-lg">editing post</div>
          <TitleField
            value={selectedPost?.title}
            onChange={(title) =>
              setSelectedPost((prev) => ({
                ...prev,
                title,
              }))
            }>
            Title
          </TitleField>
          <MarkdownField
            value={selectedPost?.markdown}
            onChange={(markdown) =>
              setSelectedPost((prev) => ({
                ...prev,
                markdown,
              }))
            }>
            Markdown
          </MarkdownField>
          <OutlineButton onClick={save}>Save</OutlineButton>
        </div>
      </Modal>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const author = await getAuthor("62fed8501ae379dcbc656c59");
  const posts = await getPosts("62fed8501ae379dcbc656c59");

  if (!author)
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };

  return {
    props: { author: jsonify(author), posts: jsonify(posts) },
  };
}
