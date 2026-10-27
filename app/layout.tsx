import type {Metadata} from 'next';
import './globals.css';
import './shutter-reference.css';
import './motor-reference.css';
import './garage-reference.css';
import './repair-reference.css';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {FloatingActions} from '../components/FloatingActions';
import {SITE_NAME,SITE_URL} from '../lib/site';
export const metadata:Metadata={metadataBase:new URL(SITE_URL),title:{default:'Emirates Aluminium Shutter LLC | Premium Shutters, Garage Doors & Shade',template:`%s | ${SITE_NAME}`},description:'Premium rolling shutters, garage doors, polycarbonate shutters, gate motors, awnings, canopies and custom aluminium & steel work across Dubai and the UAE. Request a clear WhatsApp quotation.',alternates:{canonical:'/'},icons:{icon:[{url:'/favicon.ico'},{url:'/brand/favicon.png',sizes:'512x512',type:'image/png'}],apple:'/brand/apple-touch-icon.png'},manifest:'/site.webmanifest',openGraph:{title:'Emirates Aluminium Shutter LLC',description:'Premium rolling shutters, garage doors, polycarbonate shutters, gate automation, awnings, canopies and fabrication across Dubai and the UAE.',url:SITE_URL,siteName:SITE_NAME,type:'website',images:[{url:'/wp-content/uploads/2026/10/2149207752-1-1.jpg',width:1200,height:630,alt:'Emirates Aluminium Shutter premium shutter and entrance solutions'}]},twitter:{card:'summary_large_image',title:'Emirates Aluminium Shutter LLC',description:'Premium shutters, garage doors, shade and access solutions across Dubai and the UAE.',images:['/wp-content/uploads/2026/10/2149207752-1-1.jpg']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/><FloatingActions/></body></html>}
