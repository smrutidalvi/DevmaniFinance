import React from "react";

// Custom icons to match Font Awesome equivalents
export const ChartBarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...props}>
    <rect x="3" y="12" width="3" height="8" rx="1"></rect>
    <rect x="9" y="8" width="3" height="12" rx="1"></rect>
    <rect x="15" y="4" width="3" height="16" rx="1"></rect>
    <path d="M21 14h-5"></path>
  </svg>
);

export const WalletIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...props}>
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
  </svg>
);

export const SearchDollarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...props}>
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
    <path d="M11 5.5v11"></path>
    <path d="M8 8.5h6"></path>
    <path d="M8 13.5h6"></path>
  </svg>
);

export const HandHoldingUsdIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...props}>
    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
    <path d="M17 20.2c-1 0-1.5-.6-2.5-.6-1 0-1.5.6-2.5.6-1 0-1.5-.6-2.5-.6-1 0-1.5.6-2.5.6-1 0-1.5-.6-2.5-.6"></path>
    <path d="M17 16c-1 0-1.5-.6-2.5-.6-1 0-1.5.6-2.5.6-1 0-1.5-.6-2.5-.6-1 0-1.5.6-2.5.6-1 0-1.5-.6-2.5-.6"></path>
    <path d="M19 12.2c-1 0-1.5-.6-2.5-.6-1 0-1.5.6-2.5.6-1 0-1.5-.6-2.5-.6-1 0-1.5.6-2.5.6-1 0-1.5-.6-2.5-.6"></path>
  </svg>
);

export const ShieldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...props}>
    <path d="M12 2s8 4 8 10v3.5c0 .8-.5 1.5-1.3 1.7l-1 .3c-.5.1-1 .5-1 1v1a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2v-1c0-.5-.5-.9-1-1l-1-.3c-.8-.2-1.3-.9-1.3-1.7V12c0-6 8-10 8-10z"></path>
    <path d="M9 16v5"></path>
    <path d="M15 16v5"></path>
    <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
  </svg>
);

export const UserTieIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
    <path d="M12 11v3"></path>
    <path d="M10 14h4"></path>
  </svg>
);

export const LaptopIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...props}>
    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
  </svg>
);

export const TrendingUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...props}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

export const HandshakeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...props}>
    <path d="M11 17.8h2.5a2 2 0 0 0 2-1.5l.7-2a2 2 0 0 0-2-2.5h-2.1a.6.6 0 0 1-.5-.3l-.7-1.4a2 2 0 0 0-1.8-1.1h-1.5"></path>
    <path d="M5.1 17.8H3.6a2 2 0 0 1-2-2.5l.7-2a2 2 0 0 1 2-1.5h2.1a.6.6 0 0 0 .5-.3l.7-1.4a2 2 0 0 1 1.8-1.1h1.5"></path>
    <path d="M12 8V4"></path>
    <path d="m16 6-4 2-4-2"></path>
  </svg>
);

export const HeadsetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...props}>
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"></path>
    <path d="M21 12c0 1.5-.5 2.5-2 2.5s-2-1-2-2.5 .5-2.5 2-2.5 2 1 2 2.5z"></path>
    <path d="M3 12c0 1.5 .5 2.5 2 2.5s2-1 2-2.5-.5-2.5-2-2.5-2 1-2 2.5z"></path>
  </svg>
);
