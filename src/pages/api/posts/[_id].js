import createHandler from "next-connect";
import { ObjectId } from "mongodb";

import dbPromise from "@/modules/db";

const handler = createHandler();

// PUT -> /api/posts/_id
handler.put(async (req, res) => {
  const { title, markdown } = JSON.parse(req.body);
  console.dir(req.body);

  const { upsertedId } = await (
    await dbPromise
  )
    .db()
    .collection(`posts`)
    .updateOne(
      { _id: ObjectId(req.query._id) },
      {
        $set: { title, markdown },
      }
    );

  res.json({ _id: upsertedId || undefined });
});

// DELETE -> /api/posts/_id

export default handler;
