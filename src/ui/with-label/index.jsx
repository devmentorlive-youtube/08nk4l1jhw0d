import { useState } from "react";

export default function withLabel(Component) {
  return function WrappedComponent({ children, ...rest }) {
    const [clicked, setClicked] = useState(false);
    return (
      <>
        <label className="font-light text-sm" onClick={() => setClicked(true)}>
          {children}
        </label>

        <Component {...rest} focused={clicked} />
      </>
    );
  };
}
