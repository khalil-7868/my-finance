interface Props {
  className?: string;
}
export function X({ className }: Props) {
  return (
    <svg
      className={className}
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.92704 6.77143L14.5111 0H13.1879L8.33921 5.87954L4.4666 0H0L5.85615 8.8909L0 15.9918H1.32333L6.44364 9.78279L10.5334 15.9918H15L8.92671 6.77143H8.92704ZM7.11456 8.96923L6.52121 8.0839L1.80014 1.0392H3.83269L7.64265 6.7245L8.236 7.60983L13.1885 14.9998H11.156L7.11456 8.96957V8.96923Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
    </svg>
  );
}
