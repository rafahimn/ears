import type { Metadata } from 'next';
import './home-reference.css';
import { HomeReference } from '../components/HomeReference';

export const metadata: Metadata = {
  title: 'Rolling Shutter Company Dubai | Garage Doors, Aluminium & Steel Works',
  description: 'Emirates Aluminium Shutter LLC provides rolling shutters, garage doors, gate motors, awnings, canopies, aluminium and steel works, repair and maintenance across Dubai and the UAE. Request a clear quotation.',
  alternates: { canonical: '/' },
};

export default function Home() { return <HomeReference />; }
