import { useState } from "react";
import TextField from "@/ui/text-field";
import withLabel from "@/ui/with-label";

const LabeledTextField = withLabel(TextField);

const defaultValues = {
  name: "",
  email: "",
  address: {
    address1: "",
    city: "",
    state: "",
  },
};

export default function UserForm(props) {
  const [values, setValues] = useState({
    ...defaultValues,
    ...props,
  });
  const { name, email, address } = values;
  return (
    <>
      <LabeledTextField
        value={name}
        onChange={(name) => {
          setValues((prev) => ({
            ...prev,
            name,
          }));
        }}>
        Name
      </LabeledTextField>
      <LabeledTextField value={email}>Email</LabeledTextField>
      <AddressForm {...{ city: "", state: "", ...address }} />
    </>
  );
}

function AddressForm({ address1, city, state }) {
  return (
    <>
      <LabeledTextField value={address1}>Street address</LabeledTextField>
      <LabeledTextField value={city}>City</LabeledTextField>
      <LabeledTextField placeholder="State" value={state}>
        State
      </LabeledTextField>
    </>
  );
}
