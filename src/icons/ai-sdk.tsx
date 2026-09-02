import type { IconProps } from "@/types/icon"

export const AiSdk = ({ size = 16, className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1140 300"
    width={size}
    height={size}
    fill="none"
    className={className}
    {...props}
  >
    <g fill="currentColor">
      <path d="M205 55 L345 295 H280 L262 240 H148 L130 295 H65 L205 55 Z" />
      <path d="M395 55 H515 V85 H468 V265 H515 V295 H395 V265 H442 V85 H395 Z" />
    </g>
    <rect
      x="555"
      y="40"
      width="580"
      height="268"
      rx="134"
      stroke="currentColor"
      strokeWidth="34"
    />
    <g fill="currentColor">
      <path d="M700 116 C675 116 655 132 655 158 C655 180 672 194 700 200 L718 204 C732 207 740 212 740 224 C740 236 730 244 714 244 C698 244 686 238 680 228 L650 234 C662 258 686 268 712 268 C748 268 770 250 770 222 C770 200 754 186 726 180 L708 176 C694 172 686 168 686 156 C686 146 694 140 704 140 C718 140 728 146 732 156 L760 150 C752 130 730 116 700 116 Z" />
      <path d="M800 116 H846 C906 116 946 156 946 192 C946 228 906 268 846 268 H800 Z M832 144 V240 H846 C882 240 912 214 912 192 C912 170 882 144 846 144 Z" />
      <path d="M972 116 V268 H1004 V208 L1032 268 H1066 L1038 214 L1078 116 H1046 L1020 170 L1004 132 V116 Z" />
    </g>
  </svg>
)
