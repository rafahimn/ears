"use client";
import {useState} from 'react';
import {Icon} from './Icon';
import {commonFaqs} from '../lib/site';
export function FAQ({items=commonFaqs}:{items?:typeof commonFaqs}){const [open,setOpen]=useState(0);return <div className="faq-list">{items.map((f,i)=><div className={`faq-item ${open===i?'open':''}`} key={f.q}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span>{String(i+1).padStart(2,'0')}</span><b>{f.q}</b><Icon name="plus"/></button>{open===i&&<div className="faq-answer"><p>{f.a}</p></div>}</div>)}</div>}
