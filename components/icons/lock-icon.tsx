interface Props {
  className?: string;
}

export function LockIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.6875 0C3.7243 0 2.13281 1.567 2.13281 3.5V4.9C0.954893 4.9 0 5.8402 0 7V11.9C0 13.0598 0.954893 14 2.13281 14H9.24219C10.4201 14 11.375 13.0598 11.375 11.9V7C11.375 5.8402 10.4201 4.9 9.24219 4.9V3.5C9.24219 1.567 7.6507 0 5.6875 0ZM7.82031 4.9V3.5C7.82031 2.3402 6.86542 1.4 5.6875 1.4C4.50958 1.4 3.55469 2.3402 3.55469 3.5V4.9H7.82031ZM5.6875 7.7C6.08014 7.7 6.39844 8.0134 6.39844 8.4V10.5C6.39844 10.8866 6.08014 11.2 5.6875 11.2C5.29486 11.2 4.97656 10.8866 4.97656 10.5V8.4C4.97656 8.0134 5.29486 7.7 5.6875 7.7Z"
        fill="currentColor"
      />
    </svg>
  );
}
