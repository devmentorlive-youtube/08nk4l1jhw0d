export default function User({ name, email, address, onEdit = () => {} }) {
  return (
    <div className="border p-4 border-white" onClick={onEdit}>
      <div>{name}</div>
      <div>{email}</div>
      {address && <Address {...address} />}
    </div>
  );
}

function Address({ address1, address2, city, state, zip, country }) {
  return (
    <div>
      <div>{address1}</div>
      <div>{address2}</div>
      <div>
        {city}, {state} {zip}
      </div>
      <div>{country}</div>
    </div>
  );
}
