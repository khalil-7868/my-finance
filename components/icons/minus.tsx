interface Props {
  className?: string;
}

export function Minus({ className }: Props) {
  return (
    <svg
      className={className}
      width="11"
      height="1"
      viewBox="0 0 11 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.5 0.5L0.5 0.5" stroke="white" strokeLinecap="round" />
    </svg>
  );
}
