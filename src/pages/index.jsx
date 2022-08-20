export default function Homepage({ people = [] }) {
  return (
    <div className="mt-16 container mx-auto">
      {people.map((person) => (
        <div>{person.name}</div>
      ))}
    </div>
  );
}

export function getServerSideProps(ctx) {
  // load people from database
  return {
    props: {
      people: [],
    },
  };
}
