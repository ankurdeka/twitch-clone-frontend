interface Props {
  size?: number;
  [x: string]: any;
}

export default function ({ size = 20, ...rest }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 15 15"
      {...rest}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708L9.31 10.016Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
