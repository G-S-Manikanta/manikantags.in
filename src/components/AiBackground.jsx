import React, { useEffect, useRef } from 'react';

const AiBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates
    const mouse = {
      x: null,
      y: null,
      radius: 160,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle nodes
    let particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 14000), 90);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.65;
        this.vy = (Math.random() - 0.5) * 0.65;
        this.radius = Math.random() * 2 + 1;
        // Soft Gray and Deep Crimson-Maroon tones
        const isSilver = Math.random() > 0.45;
        this.color = isSilver ? '#cbd5e1' : '#f43f5e';
        this.alpha = Math.random() * 0.55 + 0.25;
        this.pulseSpeed = 0.02 + Math.random() * 0.02;
        this.pulse = Math.random() * Math.PI;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on edges
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Pulse glow
        this.pulse += this.pulseSpeed;
        this.currentAlpha = this.alpha + Math.sin(this.pulse) * 0.2;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = (dx / distance) * force * 1.5;
            const directionY = (dy / distance) * force * 1.5;
            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, this.currentAlpha));
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    // Connection distance
    const maxDistance = 140;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw dynamic AI grid lines
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);

            const gradient = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
            gradient.addColorStop(0, `rgba(226, 232, 240, ${opacity})`);
            gradient.addColorStop(1, `rgba(190, 18, 60, ${opacity * 0.85})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 4;
            ctx.shadowColor = 'rgba(226, 232, 240, 0.2)';
            ctx.stroke();
          }
        }

        // Connect to mouse if nearby
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const opacity = (1 - distance / mouse.radius) * 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(241, 245, 249, ${opacity})`;
            ctx.lineWidth = 1.1;
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#e2e8f0';
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Cyber AI Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(226, 232, 240, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 232, 240, 0.3) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Fluid glowing organic gradient ambient orbs: Maroon and Soft Silver Gray */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-gradient-to-br from-maroon-700/30 via-maroon-900/20 to-transparent rounded-full blur-[130px] animate-blob-spin" />
      <div className="absolute top-[35%] -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-slate-400/10 via-maroon-800/25 to-transparent rounded-full blur-[140px] animate-float-slow" />
      <div className="absolute -bottom-40 left-[20%] w-[650px] h-[650px] bg-gradient-to-tr from-maroon-900/30 via-slate-300/10 to-transparent rounded-full blur-[150px] animate-float-reverse" />
      <div className="absolute top-[70%] right-[15%] w-[450px] h-[450px] bg-gradient-to-r from-rose-900/20 to-slate-400/10 rounded-full blur-[110px]" />
    </div>
  );
};

export default AiBackground;
