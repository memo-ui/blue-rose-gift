export default function RoseAnimation() {
    return (
      <div className="w-32 h-32 animate-pulse">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#3B82F6" />
          <path d="M32 12 C38 18, 38 26, 32 32 C26 26, 26 18, 32 12 Z" fill="#1D4ED8" />
          <path d="M32 32 C38 38, 38 46, 32 52 C26 46, 26 38, 32 32 Z" fill="#2563EB" />
        </svg>
      </div>
    )
  }
  