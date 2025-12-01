import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group transition-opacity hover:opacity-90">
      {/* Icon: Document with Check */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path 
          d="M6 4C6 2.89543 6.89543 2 8 2H18L26 10V28C26 29.1046 25.1046 30 24 30H8C6.89543 30 6 29.1046 6 28V4Z" 
          fill="#1E3A8A"
        />
        <path 
          d="M20 14L13.125 20.875L10 17.75" 
          stroke="white" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      
      <div className="flex items-baseline text-xl tracking-tight leading-none">
        <span className="text-[#374151] font-normal">Cumple</span>
        <span className="text-[#1E3A8A] font-semibold">Factura</span>
      </div>
    </Link>
  );
}