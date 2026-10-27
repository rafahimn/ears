import type {SVGProps} from 'react';
type Name='arrow'|'phone'|'whatsapp'|'menu'|'close'|'check'|'shield'|'spark'|'ruler'|'wrench'|'clock'|'chevron'|'play'|'plus'|'map'|'mail'|'globe';
export function Icon({name,...props}:{name:Name}&SVGProps<SVGSVGElement>){
 const common={viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'round' as const,strokeLinejoin:'round' as const,...props};
 if(name==='arrow')return <svg {...common}><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></svg>;
 if(name==='phone')return <svg {...common}><path d="M21 16.5v2.1a1.8 1.8 0 0 1-2 1.8 17.8 17.8 0 0 1-7.8-2.8 17.4 17.4 0 0 1-5.4-5.4A17.8 17.8 0 0 1 3 4.4a1.8 1.8 0 0 1 1.8-2h2.1a1.8 1.8 0 0 1 1.8 1.5c.1.8.3 1.5.6 2.2a1.8 1.8 0 0 1-.4 1.9L8 9.1a14.5 14.5 0 0 0 5.4 5.4l1.1-.9a1.8 1.8 0 0 1 1.9-.4c.7.3 1.4.5 2.2.6a1.8 1.8 0 0 1 1.5 1.7Z"/></svg>;
 if(name==='whatsapp')return <svg {...common}><path d="M20.5 11.7a8.5 8.5 0 0 1-12.7 7.4L3 20l1-4.6a8.5 8.5 0 1 1 16.5-3.7Z"/><path d="M8.7 7.7c.2-.4.4-.4.7-.4h.6c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.5.8 1.2 1.5 2 2 .3.2.5.2.7 0l.7-.8c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.6v.6c0 .3-.1.5-.4.7-.5.3-1.1.4-1.7.2-1.5-.4-2.9-1.2-4.1-2.3-1.2-1.1-2.2-2.4-2.8-3.9-.2-.6-.2-1.2.1-1.6Z"/></svg>;
 if(name==='menu')return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
 if(name==='close')return <svg {...common}><path d="m6 6 12 12M18 6 6 18"/></svg>;
 if(name==='check')return <svg {...common}><path d="m5 12 4 4L19 6"/></svg>;
 if(name==='shield')return <svg {...common}><path d="m12 3 7 3v5c0 4.7-3 8.4-7 10-4-1.6-7-5.3-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>;
 if(name==='spark')return <svg {...common}><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></svg>;
 if(name==='ruler')return <svg {...common}><path d="m3 17 14-14 4 4L7 21l-4-4Z"/><path d="m13 7 4 4M10 10l2 2M7 13l2 2"/></svg>;
 if(name==='wrench')return <svg {...common}><path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3.5 17.5a2.1 2.1 0 1 0 3 3l4.8-4.8a5 5 0 0 0 6.4-6.4l-3 3-2.5-.5-.5-2.5 3-3Z"/></svg>;
 if(name==='clock')return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
 if(name==='play')return <svg {...common}><path d="m9 7 8 5-8 5Z"/></svg>;
 if(name==='plus')return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
 if(name==='map')return <svg {...common}><path d="m4 6 5-2 6 2 5-2v14l-5 2-6-2-5 2V6Z"/><path d="M9 4v14M15 6v14"/></svg>;
 if(name==='globe')return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>;
 if(name==='mail')return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>;
 return <svg {...common}><path d="m8 10 4 4 4-4"/></svg>;
}
