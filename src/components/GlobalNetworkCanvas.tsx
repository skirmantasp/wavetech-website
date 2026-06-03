import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  pulse: number;
  pulsePhase: number;
  health: number;
  connected: number[];
}

export default function GlobalNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Create nodes
    const count = 42;
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    const nodes: Node[] = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      pulse: 0,
      pulsePhase: Math.random() * Math.PI * 2,
      health: 0.5 + Math.random() * 0.5,
      connected: [],
    }));

    // Establish connections
    nodes.forEach((n, i) => {
      nodes.forEach((m, j) => {
        if (i === j) return;
        const dx = n.x - m.x;
        const dy = n.y - m.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && n.connected.length < 4) {
          n.connected.push(j);
        }
      });
    });
    nodesRef.current = nodes;

    // Data packets travelling along edges
    const packets: { from: number; to: number; t: number; speed: number; color: string }[] = [];
    const spawnPacket = () => {
      const fi = Math.floor(Math.random() * nodes.length);
      const node = nodes[fi];
      if (node.connected.length === 0) return;
      const ti = node.connected[Math.floor(Math.random() * node.connected.length)];
      const colors = ['#00c8e8', '#00d68f', '#00c8e8', '#0090a8'];
      packets.push({ from: fi, to: ti, t: 0, speed: 0.008 + Math.random() * 0.012, color: colors[Math.floor(Math.random() * colors.length)] });
    };

    const draw = () => {
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      timeRef.current += 0.008;
      const t = timeRef.current;

      ctx.clearRect(0, 0, cw, ch);

      // Move nodes
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > cw) n.vx *= -1;
        if (n.y < 0 || n.y > ch) n.vy *= -1;
      });

      // Draw grid lines (subtle)
      ctx.strokeStyle = 'rgba(0,200,232,0.025)';
      ctx.lineWidth = 1;
      for (let gx = 0; gx < cw; gx += 60) {
        ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, ch); ctx.stroke();
      }
      for (let gy = 0; gy < ch; gy += 60) {
        ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(cw, gy); ctx.stroke();
      }

      // Draw edges
      nodes.forEach((n, i) => {
        n.connected.forEach(j => {
          if (j <= i) return;
          const m = nodes[j];
          const dx = m.x - n.x;
          const dy = m.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const alpha = Math.max(0, 1 - dist / 200) * 0.2;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.strokeStyle = `rgba(0,200,232,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        });
      });

      // Draw packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.t += p.speed;
        if (p.t >= 1) { packets.splice(i, 1); continue; }
        const fn = nodes[p.from];
        const tn = nodes[p.to];
        const px = fn.x + (tn.x - fn.x) * p.t;
        const py = fn.y + (tn.y - fn.y) * p.t;
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw nodes
      nodes.forEach(n => {
        const phase = Math.sin(t + n.pulsePhase);
        const baseR = 3 + n.health * 2;

        // Pulse ring
        const ringAlpha = (Math.sin(t * 1.5 + n.pulsePhase) + 1) * 0.5 * 0.3;
        const ringR = baseR + 6 + (Math.sin(t + n.pulsePhase) + 1) * 4;
        ctx.beginPath();
        ctx.arc(n.x, n.y, ringR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,200,232,${ringAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node core
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, baseR * 2);
        grad.addColorStop(0, n.health > 0.7 ? '#00d68f' : n.health > 0.4 ? '#00c8e8' : '#f59e0b');
        grad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(n.x, n.y, baseR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Health text (for larger nodes)
        if (n.health > 0.75 && baseR > 4) {
          ctx.font = '9px JetBrains Mono, monospace';
          ctx.fillStyle = 'rgba(0,200,232,0.7)';
          ctx.fillText(`${Math.round(n.health * 100)}%`, n.x + 8, n.y - 4);
        }
      });

      // Spawn packets occasionally
      if (Math.random() < 0.04) spawnPacket();

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-70"
      style={{ display: 'block' }}
    />
  );
}
