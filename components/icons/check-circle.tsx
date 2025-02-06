interface Props {
  className?: string;
}
export function CheckCircle(props: Props) {
  return (
    <svg
      className={props.className}
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.75"
        y="1.25"
        width="12.5"
        height="12.5"
        rx="6.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 7L4.98223 8.51112C5.31881 9.02894 6.03965 9.12089 6.49544 8.70417L10 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
