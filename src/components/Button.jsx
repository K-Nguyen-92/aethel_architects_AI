import React from "react";

export const FacebookIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      {...props}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
};

export const InstagramIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color} // Instagram glyph is standard outline/stroke-based
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
};

export const ZaloIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color} // Zalo bubble is standard fill-based
      className={className}
      {...props}
    >
      <path d="M12 0C5.373 0 0 4.606 0 10.279c0 3.393 1.937 6.394 4.887 8.16-.279 1.547-.98 3.541-1.272 4.417-.184.55.088.756.634.423.546-.333 3.993-2.613 5.371-3.642 1.378-.029 2.756.029 4.132-.029C19.627 20.279 24 15.673 24 10.279c0-5.673-4.373-10.279-12-10.279z" />
      {/* Optional "Z" text carved out of bubble - keep for recognizability */}
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fill="white"
        fontWeight="900"
        fontSize="13px"
        fontFamily="sans-serif"
      >
        Z
      </text>
    </svg>
  );
};
