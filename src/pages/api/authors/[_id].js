import { ObjectId } from "mongodb";

import dbPromise from "@/modules/db";

export async function getAuthor(_id) {
  const author = await (
    await dbPromise
  )
    .db()
    .collection("users")
    .find({ _id: new ObjectId(_id) })
    .toArray();

  return author[0];
}
