interface Props {
  ariaLabel?: string;
  href: string;
  label: string;
}

const Link = ({ ariaLabel, label, href }: Props) => {
  return (
    <a
      aria-label={ariaLabel}
      href={href}
      className="hover:text-primary text-sm"
    >
      {label}
    </a>
  );
};

export default Link;
