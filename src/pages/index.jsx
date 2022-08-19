export default function Homepage({}) {
  return (
    <div className="mt-16 container mx-auto">
      <h1>You are unauthenticated</h1>
    </div>
  );
}

export function getServerSideProps(ctx) {
  return {
    props: {},
  };
}
