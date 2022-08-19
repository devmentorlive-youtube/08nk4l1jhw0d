import Button from "./";

export default function OutlineButton({ children, ...rest }) {
  return (
    <Button
      className="cursor-pointer w-full font-thin  border border-blue-500 px-4 py-1  hover:bg-blue-600 text-white rounded-md drop-shadow-sm"
      {...rest}>
      {children}
    </Button>
  );
}
