import './globals.css';import type { Metadata } from 'next';
export const metadata:Metadata={title:'Trinity Guest Connect',description:'Guest welcome and follow-up system'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
