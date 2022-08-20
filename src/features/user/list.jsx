import User from "./";

export default function UserList({ users = [], onEdit = () => {} }) {
  return users.map((user) => <User {...user} onEdit={() => onEdit(user)} />);
}
