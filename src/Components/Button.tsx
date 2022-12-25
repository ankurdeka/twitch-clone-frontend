interface Props {
  type: "primary" | "secondary";
  children: JSX.Element | string;
}

const Button = ({ type, children }: Props) => {
  const color =
    type === "primary"
      ? "bg-primary-light hover:bg-primary text-white"
      : "bg-gray-2 hover:bg-gray-1";

  return (
    <button className={`px-3 py-1 rounded text-sm font-medium ${color}`}>
      {children}
    </button>
  );
};

export default Button;
