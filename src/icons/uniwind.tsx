import type { IconProps } from "@/types/icon"

export const Uniwind = ({ size = 16, className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 192"
    width={size}
    height={size}
    fill="none"
    className={className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={12}
      d="M96 22v74c20.435 0 37-16.566 37-37s-16.565-37-37-37Zm0 74v74c-20.434 0-37-16.565-37-37s16.566-37 37-37Zm74 0H96c0 20.435 16.565 37 37 37s37-16.565 37-37Zm-74 0H22c0-20.434 16.566-37 37-37s37 16.566 37 37Z"
    />
  </svg>
)
