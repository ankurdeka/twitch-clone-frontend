interface Props {
  size?: number;
  [x: string]: any;
}

const ChevronRight = ({ size = 20, ...rest }: Props) => {
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
        fill-rule="evenodd"
        d="M6.158 3.135a.5.5 0 0 1 .707.023l3.75 4a.5.5 0 0 1 0 .684l-3.75 4a.5.5 0 1 1-.73-.684L9.566 7.5l-3.43-3.658a.5.5 0 0 1 .023-.707Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export default ChevronRight;
