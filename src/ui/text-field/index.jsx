import { useRef, useEffect } from "react";

export default function TextField({
  value,
  label,
  className,
  focused = false,
  onChange = () => {},
  ...rest
}) {
  const ref = useRef(undefined);

  useEffect(() => {
    if (!focused) return;
    ref.current.focus();
  }, [focused]);

  return (
    <div>
      {label && (
        <label
          className="font-light text-sm"
          onClick={() => ref.current.focus()}>
          {label}
        </label>
      )}
      <input
        className={`w-full font-light text-sm ${
          className ? className : "border border-gray-300 p-2"
        }`}
        ref={ref}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
    </div>
  );
}
