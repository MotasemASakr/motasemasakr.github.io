export default function LocationIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Canadian Flag */}
      <rect x="8" y="12" width="12" height="40" fill="#FF0000"/>
      <rect x="20" y="12" width="24" height="40" fill="#FFFFFF"/>
      <rect x="44" y="12" width="12" height="40" fill="#FF0000"/>
      
      {/* Maple Leaf (simplified) */}
      <path d="M32 20 L30 26 L24 26 L29 30 L27 36 L32 32 L37 36 L35 30 L40 26 L34 26 Z" fill="#FF0000"/>
      
      {/* Pin marker */}
      <path 
        d="M32 42 C28 42 25 39 25 35 C25 31 28 28 32 28 C36 28 39 31 39 35 C39 39 36 42 32 42 Z M32 45 L32 52" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <circle cx="32" cy="35" r="2" fill="currentColor"/>
    </svg>
  )
}

