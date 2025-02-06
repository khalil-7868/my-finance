interface Props {
  className?: string;
}
export function MagnifyngGlass(props: Props) {
  return (
    <svg
      width="14"
      height="14"
      className={props.className}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 6.22223C0 2.78579 2.78579 0 6.22223 0C9.65867 0 12.4445 2.78579 12.4445 6.22223C12.4445 7.6601 11.9567 8.98406 11.1377 10.0377L13.7722 12.6722C14.076 12.976 14.076 13.4685 13.7722 13.7722C13.4685 14.0759 12.976 14.0759 12.6723 13.7722L10.0378 11.1377C8.98411 11.9567 7.66013 12.4445 6.22223 12.4445C2.78579 12.4445 0 9.65867 0 6.22223Z"
        fill="currentColor"
      />
    </svg>
  );
}
