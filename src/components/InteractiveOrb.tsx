import React, { useEffect, useRef } from 'react';

interface TechNode {
  name: string;
  category: string;
  color: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export const InteractiveOrb: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const techLabels = [
      { name: 'Spring Boot', color: '#4a1521', cat: 'Backend' },
      { name: 'React.js', color: '#b8686c', cat: 'Frontend' },
      { name: 'Java', color: '#8e3d43', cat: 'Core' },
      { name: 'MySQL', color: '#5e1d2c', cat: 'Database' },
      { name: 'AWS (EC2/S3)', color: '#c59b27', cat: 'Cloud' },
      { name: 'LeetCode DSA', color: '#7c2d3d', cat: 'Algorithms' },
      { name: 'REST APIs', color: '#a65358', cat: 'APIs' },
      { name: 'Supabase', color: '#6b2130', cat: 'Cloud DB' },
      { name: 'Python', color: '#9333ea', cat: 'Data & ML' }
    ];

    const nodes: TechNode[] = techLabels.map((item, i) => {
      const angle = (i / techLabels.length) * Math.PI * 2;
      const distance = 85 + (i % 3) * 35;
      return {
        name: item.name,
        category: item.cat,
        color: item.color,
        x: width / 2 + Math.cos(angle) * distance,
        y: height / 2 + Math.sin(angle) * distance,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 4
      };
    });

    let mouseX = width / 2;
    let mouseY = height / 2;
    let isMouseOver = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseOver = true;
    };

    const handleMouseLeave = () => {
      isMouseOver = false;
      mouseX = width / 2;
      mouseY = height / 2;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let angleOffset = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Soft Blush Radial Core
      const coreGradient = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, 170);
      coreGradient.addColorStop(0, 'rgba(247, 225, 222, 0.65)');
      coreGradient.addColorStop(0.5, 'rgba(251, 240, 236, 0.4)');
      coreGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 170, 0, Math.PI * 2);
      ctx.fill();

      // Delicate Architectural Orbital Rings
      ctx.strokeStyle = 'rgba(74, 21, 33, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 85, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(184, 104, 108, 0.12)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, 125, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.strokeStyle = 'rgba(197, 155, 39, 0.1)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 155, 0, Math.PI * 2);
      ctx.stroke();

      angleOffset += 0.0025;

      // Draw delicate connection filaments between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            ctx.strokeStyle = `rgba(184, 104, 108, ${0.2 * (1 - dist / 125)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }

        // Connect to center core
        const distToCenter = Math.hypot(nodes[i].x - centerX, nodes[i].y - centerY);
        ctx.strokeStyle = `rgba(74, 21, 33, ${0.12 * (1 - distToCenter / 200)})`;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(nodes[i].x, nodes[i].y);
        ctx.stroke();
      }

      // Update and draw nodes
      nodes.forEach((node, idx) => {
        const baseAngle = (idx / nodes.length) * Math.PI * 2 + angleOffset;
        const orbitRadius = 90 + (idx % 3) * 32;
        const targetX = centerX + Math.cos(baseAngle) * orbitRadius;
        const targetY = centerY + Math.sin(baseAngle) * orbitRadius;

        node.x += (targetX - node.x) * 0.05;
        node.y += (targetY - node.y) * 0.05;

        // Subtle mouse interaction
        if (isMouseOver) {
          const mdx = mouseX - node.x;
          const mdy = mouseY - node.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 75) {
            node.x -= mdx * 0.04;
            node.y -= mdy * 0.04;
          }
        }

        // Draw elegant point
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Delicate point halo
        ctx.fillStyle = `${node.color}18`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 9, 0, Math.PI * 2);
        ctx.fill();

        // Clean typography label
        ctx.fillStyle = '#1c1917';
        ctx.font = '500 11px JetBrains Mono, monospace';
        ctx.textAlign = 'center';
        ctx.fillText(node.name, node.x, node.y - 10);
      });

      // Center Monogram & Title
      ctx.fillStyle = '#4a1521';
      ctx.font = '700 13px Playfair Display, serif';
      ctx.textAlign = 'center';
      ctx.fillText('FULL-STACK', centerX, centerY - 4);

      ctx.fillStyle = '#b8686c';
      ctx.font = '600 9px JetBrains Mono, monospace';
      ctx.fillText('ECOSYSTEM', centerX, centerY + 10);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[420px] rounded-3xl bg-white border border-[#ede4db] overflow-hidden shadow-sm flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
      />
      <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between text-[10px] font-mono text-[#8c827a] pointer-events-none">
        <span>KINETIC TECH CONSTELLATION</span>
        <span>HOVER TO INTERACT</span>
      </div>
    </div>
  );
};
