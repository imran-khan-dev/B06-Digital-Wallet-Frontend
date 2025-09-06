import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to="/" className="inline-block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="78"
        height="32"
        viewBox="0 0 78 32"
        fill="none"
        className="cursor-pointer"
      >
        {/* Back card */}
        <rect
          x="4"
          y="4"
          width="50"
          height="24"
          rx="6"
          transform="rotate(-5 4 4)"
          fill="#ff2056"
        />
        {/* Middle card */}
        <rect
          x="10"
          y="6"
          width="50"
          height="24"
          rx="6"
          transform="rotate(-2 10 6)"
          fill="#ff4d75"
        />
        {/* Front card */}
        <rect x="16" y="8" width="50" height="24" rx="6" fill="#ff7a9a" />
        {/* Coin / Digital token */}
        <circle
          cx="60"
          cy="16"
          r="6"
          fill="#fff"
          stroke="#ff2056"
          strokeWidth="2"
        />
      </svg>
    </Link>
  );
}
