"use client";

import { useEffect, useRef, useState } from "react";

type Point = [number, number];
type Vertex = [number, number, number];
type Face = { vertices: Vertex[]; color: string };

// Contornos do SVG original, extrudados com frente, verso e todas as laterais fechadas.
const silver: Point[] = [[332,649],[580,233],[675,233],[923,649],[806,646],[627.5,338.5],[449,646]];
const blue: Point[] = [[534,642.5],[627.5,471],[721,642.5]];
const vertex = ([x,y]: Point, z: number): Vertex => [x-627.5, y-441, z];
function extrude(points: Point[], front: string, edge: string): Face[] {
  return [
    { vertices: points.map(p => vertex(p,24)), color:front },
    { vertices: points.map(p => vertex(p,-24)), color:front },
    ...points.map((p,i) => ({ vertices:[vertex(p,24),vertex(points[(i+1)%points.length],24),vertex(points[(i+1)%points.length],-24),vertex(p,-24)], color:edge })),
  ];
}
const facets: { points: Point[]; color: string }[] = [
  {points:[[332,649],[580,233],[627.5,325.5],[466.5,596]],color:"#D0D3DF"},
  {points:[[627.5,325.5],[675,233],[923,649],[788.5,596]],color:"#E9EBF3"},
  {points:[[580,233],[675,233],[627.5,325.5]],color:"#F0F1F8"},
  {points:[[534,642.5],[627.5,471],[627.5,589]],color:"#163BFF"},
  {points:[[627.5,471],[721,642.5],[627.5,589]],color:"#6379FF"},
  {points:[[534,642.5],[627.5,589],[721,642.5]],color:"#0818B7"},
];
const faces = [...extrude(silver,"#646B81","#4D598B"),...extrude(blue,"#163BFF","#1026D7"),
  ...[24.15,-24.15].flatMap(z => facets.map(f => ({vertices:f.points.map(p => vertex(p,z)),color:f.color})))];

export function BrandHeroMark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const motion = useRef({ yaw:-.25, pitch:-.08, dragging:false, pointer:-1, x:0, y:0, resume:0, paused:false });
  const [paused,setPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !stage || !ctx) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0, last = 0, visible = true, width = 0, height = 0;
    const resize = new ResizeObserver(() => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width; height = bounds.height;
      const ratio = Math.min(devicePixelRatio || 1,2);
      canvas.width = Math.round(width*ratio); canvas.height = Math.round(height*ratio);
      ctx.setTransform(ratio,0,0,ratio,0,0);
    });
    resize.observe(canvas);
    const render = (now: number) => {
      const m = motion.current;
      const dt = Math.min((now-last)/1000,.05); last = now;
      if (!m.dragging && !m.paused && !reduced.matches && now>m.resume) m.yaw += dt*.24;
      const cy=Math.cos(m.yaw), sy=Math.sin(m.yaw), cx=Math.cos(m.pitch), sx=Math.sin(m.pitch);
      const scale=Math.min(width/760,height/560);
      const rotate = ([x,y,z]: Vertex): Vertex => { const a=x*cy+z*sy, b=z*cy-x*sy; return [a,y*cx-b*sx,y*sx+b*cx]; };
      ctx.clearRect(0,0,width,height);
      const projected = faces.map(face => {
        const vertices=face.vertices.map(rotate);
        return {...face,vertices,depth:vertices.reduce((sum,v)=>sum+v[2],0)/vertices.length};
      }).sort((a,b)=>a.depth-b.depth);
      for (const face of projected) {
        ctx.beginPath();
        face.vertices.forEach(([x,y,z],i) => {
          const perspective=1200/(1200-z);
          const px=width/2+x*scale*perspective, py=height/2+y*scale*perspective;
          if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
        });
        ctx.closePath();
        ctx.fillStyle=face.color;
        ctx.fill();
        ctx.strokeStyle="rgba(255,255,255,.09)";
        ctx.lineWidth=.75;
        ctx.stroke();
      }
      stage.dataset.ready="true";
      frame=requestAnimationFrame(render);
    };
    const start = () => { cancelAnimationFrame(frame); if(visible && !document.hidden) { last=performance.now(); frame=requestAnimationFrame(render); } };
    const observer = new IntersectionObserver(([entry]) => { visible=entry.isIntersecting; start(); });
    observer.observe(stage);
    document.addEventListener("visibilitychange",start);
    start();
    return () => { cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect(); document.removeEventListener("visibilitychange",start); };
  }, []);

  function release() {
    motion.current.dragging=false;
    motion.current.pointer=-1;
    motion.current.resume=performance.now()+1400;
    stageRef.current?.removeAttribute("data-dragging");
  }

  return <div className="brand-hero__stage" ref={stageRef}>
    <div className="brand-stage__grid" aria-hidden="true" />
    <div className="brand-stage__halo" aria-hidden="true" />
    <div className="brand-stage__orbit brand-stage__orbit--outer" aria-hidden="true" />
    <div className="brand-stage__orbit brand-stage__orbit--inner" aria-hidden="true" />
    <div className="brand-stage__label brand-stage__label--top" aria-hidden="true"><span>ALVORA / 3D</span><i /> <span>OBJETO DIGITAL → REAL</span></div>
    <div className="brand-stage__label brand-stage__label--side" aria-hidden="true"><span>FDM</span><strong>CAMADAS</strong></div>
    <div className="brand-model" tabIndex={0} role="group" aria-label="Logo 3D da Alvora Lab. Arraste horizontalmente ou use as setas para girar."
      onPointerDown={event => {
        if(!event.isPrimary || event.button!==0) return;
        Object.assign(motion.current,{dragging:true,pointer:event.pointerId,x:event.clientX,y:event.clientY});
        event.currentTarget.setPointerCapture(event.pointerId);
        stageRef.current?.setAttribute("data-dragging","true");
      }}
      onPointerMove={event => {
        const m=motion.current;
        if(!m.dragging || event.pointerId!==m.pointer) return;
        m.yaw+=(event.clientX-m.x)*.009;
        if(event.pointerType==="mouse") m.pitch=Math.max(-.45,Math.min(.45,m.pitch+(event.clientY-m.y)*.005));
        m.x=event.clientX; m.y=event.clientY;
      }}
      onPointerUp={release} onPointerCancel={release} onLostPointerCapture={release}
      onKeyDown={event => {
        if(event.key!=="ArrowLeft" && event.key!=="ArrowRight") return;
        event.preventDefault(); motion.current.yaw+=event.key==="ArrowRight"?.18:-.18;
        motion.current.resume=performance.now()+2000;
      }}>
      <div className="brand-model__glow" aria-hidden="true" />
      <img className="brand-model__fallback" src="/alvora-mark.svg" alt="" />
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
    <div className="brand-model__controls"><span><i /> Arraste para girar</span><button type="button" aria-pressed={paused} onClick={() => { motion.current.paused=!paused; setPaused(!paused); }}>{paused ? "Retomar rotação" : "Pausar rotação"}</button></div>
  </div>;
}
