import type {Metadata} from 'next';
import {RollingShutterReference} from '../../components/RollingShutterReference';

export const metadata:Metadata={
  title:'Rolling Shutters for Shops, Warehouses & Villas',
  description:'Explore single-skin, insulated, vision and window rolling shutters. Configure your opening details and request a clear quote from Emirates Aluminium Shutter in Dubai and across the UAE.',
  alternates:{canonical:'/shutter/'},
};

export default function ShutterPage(){
  return <RollingShutterReference/>;
}
