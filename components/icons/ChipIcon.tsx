export default function ChipIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer chip body */}
      <rect x="12" y="12" width="40" height="40" rx="6" 
        stroke="currentColor" strokeWidth="3" fill="none"/>
      
      {/* Inner chip core */}
      <rect x="18" y="18" width="28" height="28" rx="3" 
        stroke="currentColor" strokeWidth="2.5" fill="rgba(0, 100, 255, 0.1)"/>
      
      {/* Diamond in center */}
      <path d="M32 26 L38 32 L32 38 L26 32 Z" 
        stroke="currentColor" strokeWidth="2" fill="none"/>
      
      {/* Pin connections - Top */}
      <circle cx="22" cy="8" r="3" fill="currentColor"/>
      <line x1="22" y1="11" x2="22" y2="12" stroke="currentColor" strokeWidth="2.5"/>
      
      <circle cx="32" cy="8" r="3" fill="currentColor"/>
      <line x1="32" y1="11" x2="32" y2="12" stroke="currentColor" strokeWidth="2.5"/>
      
      <circle cx="42" cy="8" r="3" fill="currentColor"/>
      <line x1="42" y1="11" x2="42" y2="12" stroke="currentColor" strokeWidth="2.5"/>
      
      {/* Pin connections - Bottom */}
      <circle cx="22" cy="56" r="3" fill="currentColor"/>
      <line x1="22" y1="52" x2="22" y2="53" stroke="currentColor" strokeWidth="2.5"/>
      
      <circle cx="32" cy="56" r="3" fill="currentColor"/>
      <line x1="32" y1="52" x2="32" y2="53" stroke="currentColor" strokeWidth="2.5"/>
      
      <circle cx="42" cy="56" r="3" fill="currentColor"/>
      <line x1="42" y1="52" x2="42" y2="53" stroke="currentColor" strokeWidth="2.5"/>
      
      {/* Pin connections - Left */}
      <circle cx="8" cy="22" r="3" fill="currentColor"/>
      <line x1="11" y1="22" x2="12" y2="22" stroke="currentColor" strokeWidth="2.5"/>
      
      <circle cx="8" cy="32" r="3" fill="currentColor"/>
      <line x1="11" y1="32" x2="12" y2="32" stroke="currentColor" strokeWidth="2.5"/>
      
      <circle cx="8" cy="42" r="3" fill="currentColor"/>
      <line x1="11" y1="42" x2="12" y2="42" stroke="currentColor" strokeWidth="2.5"/>
      
      {/* Pin connections - Right */}
      <circle cx="56" cy="22" r="3" fill="currentColor"/>
      <line x1="52" y1="22" x2="53" y2="22" stroke="currentColor" strokeWidth="2.5"/>
      
      <circle cx="56" cy="32" r="3" fill="currentColor"/>
      <line x1="52" y1="32" x2="53" y2="32" stroke="currentColor" strokeWidth="2.5"/>
      
      <circle cx="56" cy="42" r="3" fill="currentColor"/>
      <line x1="52" y1="42" x2="53" y2="42" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  )
}

