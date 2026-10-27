"use client";
import {useEffect,useState} from 'react';
export function ScrollProgress(){const [p,setP]=useState(0);useEffect(()=>{const on=()=>{const h=document.documentElement.scrollHeight-window.innerHeight;setP(h>0?window.scrollY/h*100:0)};on();window.addEventListener('scroll',on,{passive:true});return()=>window.removeEventListener('scroll',on)},[]);return <div className="scroll-progress" style={{width:`${p}%`}}/>}
