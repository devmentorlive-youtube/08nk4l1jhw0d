import { useRef, useEffect } from "react";

export default function TextField({
  value,
  className,
  focused = false,
  onChange = () => {},
  onFocusChange = () => {},
  ...rest
}) {
  const ref = useRef(undefined);

  useEffect(() => {
    if (!focused) return;
    ref.current.focus();
  }, [focused]);

  return (
    <input
      className={`w-full ${
        className
          ? className
          : "border border-gray-300 p-2 font-light text-sm text-black"
      }`}
      ref={ref}
      onFocus={() => onFocusChange(true)}
      onBlur={() => onFocusChange(false)}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    />
  );
}
