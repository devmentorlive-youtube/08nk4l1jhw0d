import { useEffect, useState } from "react";

export default function withLabel(Component) {
  return function WrappedComponent({ children, value, ...rest }) {
    const [focused, setFocused] = useState(false);

    return (
      <div className="relative h-[64px]">
        <label
          className={`absolute transition duration-500 font-light text-sm ${
            focused || value?.length > 0
              ? "-top-5 left-0"
              : " top-2 left-2 text-black"
          }`}
          onClick={() => {
            setFocused(() => {
              setTimeout(() => setFocused(false), 250);
              return true;
            });
          }}>
          {children}
        </label>
        <Component
          {...{
            focused,
            value,
            onFocusChange: (val) => setFocused(val),
            ...rest,
          }}
        />
      </div>
    );
  };
}
