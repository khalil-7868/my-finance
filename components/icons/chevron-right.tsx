interface Props {
  className?: string;
}
export function ChevronRight({ className }: Props) {
  return (
    <svg
      className={className}
      width="11"
      height="12"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.58331 8L6.09255 6.35354C6.27157 6.1583 6.27157 5.84171 6.09255 5.64644L4.58331 4"
        stroke="#F3F3F4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
