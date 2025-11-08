import { IBM_Plex_Mono, Orbitron } from 'next/font/google';

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-primary',
});

export const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700', '900'],
  variable: '--font-display',
});

// Legacy export for backward compatibility
export const instrumentSans = ibmPlexMono; 