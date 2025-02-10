interface Props {
  className?: string;
}

export function Plus({ className }: Props) {
  return (
    <svg
      className={className}
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.5 0.5L5.5 10.5" stroke="currentColor" strokeLinecap="round" />
      <path d="M10.5 5.5L0.5 5.5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
