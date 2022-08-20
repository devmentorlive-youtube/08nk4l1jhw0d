import Head from "next/head";
import { useState } from "react";
import { jsonify } from "@/modules/db";

import UserList from "@/features/user/list";
import UserForm from "@/features/user/form";

import { getUsers } from "@/api/users";

export default function Homepage({ users = [] }) {
  const [selectedUser, setSelectedUser] = useState(undefined);

  return (
    <>
      <Head>
        <title></title>
      </Head>
      <div className="mt-16 container mx-auto">
        {!selectedUser && (
          <UserList {...{ users, onEdit: (user) => setSelectedUser(user) }} />
        )}
        {selectedUser && <UserForm {...selectedUser} />}
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  // load people from database
  const users = await getUsers();
  return {
    props: {
      users: jsonify(users),
    },
  };
}
