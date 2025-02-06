interface Props {
  className?: string;
}
export function GridLayout({ className }: Props) {
  return (
    <svg
      className={className}
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_25_19209" fill="white">
        <rect x="0.733398" y="0.500977" width="12.4444" height="5.28889" rx="0.622222" />
      </mask>
      <rect
        x="0.733398"
        y="0.500977"
        width="12.4444"
        height="5.28889"
        rx="0.622222"
        stroke="white"
        strokeWidth="1.86667"
        mask="url(#path-1-inside-1_25_19209)"
      />
      <mask id="path-2-inside-2_25_19209" fill="white">
        <rect x="0.733421" y="7.03448" width="12.4444" height="5.28889" rx="0.622222" />
      </mask>
      <rect
        x="0.733421"
        y="7.03448"
        width="12.4444"
        height="5.28889"
        rx="0.622222"
        stroke="white"
        strokeWidth="1.86667"
        mask="url(#path-2-inside-2_25_19209)"
      />
    </svg>
  );
}
