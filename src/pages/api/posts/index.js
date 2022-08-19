import createHandler from "next-connect";
import { ObjectId } from "mongodb";

import dbPromise from "@/modules/db";

const handler = createHandler();

// GET -> /api/posts -> getPosts()
handler.get(async (req, res) => {
  res.json({ posts: await getPosts() });
});

// POST -> /api/posts -> createPost()
handler.post(async (req, res) => {
  const {} = JSON.parse(req.body);
  // .....
  res.json({});
});

export async function getPosts(author) {
  const pipeline = [];

  if (author)
    pipeline.push({
      $match: {
        user: new ObjectId(author),
      },
    });

  pipeline.push({
    $lookup: {
      from: "users",
      localField: "user",
      foreignField: "_id",
      as: "author",
    },
  });

  const posts = await (await dbPromise)
    .db()
    .collection("posts")
    .aggregate(pipeline)
    .toArray();

  return posts;
}
