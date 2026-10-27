"use client";
import {useMemo,useState} from 'react';
import {Icon} from './Icon';
import {services,waLink} from '../lib/site';
export function QuoteBuilder(){
 const [service,setService]=useState('Rolling Shutters');
 const [type,setType]=useState('Not sure yet');
 const [location,setLocation]=useState('Dubai');
 const [size,setSize]=useState('Approximate size');
 const [notes,setNotes]=useState('');
 const message=useMemo(()=>`Hello, I would like a quotation.\nService: ${service}\nSystem: ${type}\nLocation: ${location}\nSize: ${size}${notes?`\nDetails: ${notes}`:''}`,[service,type,location,size,notes]);
 return <div className="quote-builder" id="service-request"><div className="quote-builder-head"><div><span className="eyebrow eyebrow-dark">QUICK QUOTE BUILDER</span><h3>Tell us what you need.</h3><p>Build a useful first message. No online payment is required.</p></div><span className="builder-step">01 / 04</span></div><div className="builder-grid"><label><span>Service</span><select value={service} onChange={e=>setService(e.target.value)}>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label><label><span>System / option</span><select value={type} onChange={e=>setType(e.target.value)}><option>Not sure yet</option><option>Manual</option><option>Automatic / Motorized</option><option>Premium option</option><option>Repair / Maintenance</option></select></label><label><span>UAE location</span><select value={location} onChange={e=>setLocation(e.target.value)}>{['Dubai','Abu Dhabi','Sharjah','Ajman','Al Ain','Ras Al Khaimah','Fujairah','Umm Al Quwain','Other UAE area'].map(x=><option key={x}>{x}</option>)}</select></label><label><span>Opening / project size</span><select value={size} onChange={e=>setSize(e.target.value)}><option>Approximate size</option><option>Small residential opening</option><option>Standard villa opening</option><option>Large commercial opening</option><option>Multiple openings</option></select></label><label className="builder-wide"><span>Anything useful to know?</span><textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="For example: new installation, old motor not working, approximate width, urgent repair..." rows={3}/></label></div><div className="builder-footer"><span><Icon name="shield"/> Scope and pricing are confirmed before work.</span><a className="btn btn-gold" href={waLink(message)} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> Continue on WhatsApp <Icon name="arrow"/></a></div></div>
}
