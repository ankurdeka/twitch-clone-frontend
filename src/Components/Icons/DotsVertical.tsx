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
        d="M8.625 2.5a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm0 5a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM7.5 13.625a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
