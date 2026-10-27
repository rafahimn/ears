"use client";
import {useEffect,useRef,useState} from 'react';
const stats=[['8','Core services'],['4.7','Google rating'],['UAE','Coverage'],['24/7','Quote requests']];
export function AnimatedStats(){const ref=useRef<HTMLDivElement>(null);const [show,setShow]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setShow(true);io.disconnect()}},{threshold:.3});io.observe(el);return()=>io.disconnect()},[]);return <div className="stats-grid-premium" ref={ref}>{stats.map(([v,l],i)=><div className="stat-premium" key={l}><strong className={show?'stat-show':''} style={{transitionDelay:`${i*100}ms`}}>{v}</strong><span>{l}</span></div>)}</div>}
