export default function HexMark() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[500px]">
      <div className="absolute inset-0 rounded-[2.2rem] bg-[linear-gradient(150deg,rgba(255,255,255,0.95)_0%,rgba(237,245,252,0.9)_100%)] shadow-[0_24px_60px_-30px_rgba(15,59,113,0.48)]" />

      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <circle
          cx="250"
          cy="250"
          r="186"
          stroke="#d2e3f3"
          strokeWidth="1.5"
          fill="none"
        />
        <path d="M250 58v384M58 250h384" stroke="#d2e3f3" strokeWidth="1" />
      </svg>

      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full animate-spin-slow-reverse"
      >
        <polygon
          points="250,82 380,158 380,342 250,418 120,342 120,158"
          stroke="#8dbfe8"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="7 10"
        />
      </svg>

      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="sMark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1b8be0" />
            <stop offset="55%" stopColor="#0f3b71" />
            <stop offset="100%" stopColor="#ff8f3f" />
          </linearGradient>
        </defs>
        <polygon
          points="250,146 320,187 320,269 250,310 180,269 180,187"
          fill="url(#sMark)"
          opacity="0.16"
        />
        <path
          d="M313 204c0-25-28-43-63-43-34 0-58 16-58 37 0 22 23 31 56 38 38 8 65 17 65 43 0 23-27 40-63 40-36 0-63-18-66-42"
          stroke="url(#sMark)"
          strokeWidth="11"
          strokeLinecap="round"
          fill="none"
        />

        <circle cx="250" cy="250" r="22" fill="#0f3b71" opacity="0.88" />
      </svg>
    </div>
  );
}
