import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

export const RippleBackground = ({ children, className }) => {
  const [ripples, setRipples] = useState([]);
  const containerRef = useRef(null);
  const rippleIdRef = useRef(0);

  const createRipple = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: rippleIdRef.current++,
      timestamp: Date.now()
    };

    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 2000);
  };

  // Auto-generate ambient ripples — 3 at a time every 3 seconds
  useEffect(() => {
    const spawnRipples = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      for (let i = 0; i < 3; i++) {
        const delay = i * 400;
        setTimeout(() => {
          const newRipple = {
            x: Math.random() * rect.width,
            y: Math.random() * rect.height,
            id: rippleIdRef.current++,
            timestamp: Date.now()
          };
          setRipples(prev => [...prev, newRipple]);
          setTimeout(() => {
            setRipples(prev => prev.filter(r => r.id !== newRipple.id));
          }, 3000);
        }, delay);
      }
    };

    spawnRipples();
    const interval = setInterval(spawnRipples, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden", className)}
      onClick={createRipple}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ripple-expand {
          0% { width: 0; height: 0; opacity: 1; }
          100% { width: 800px; height: 800px; opacity: 0; }
        }
        .animate-ripple-expand {
          animation: ripple-expand 2s ease-out forwards;
        }
      `}} />

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-[#9780ED]/30 animate-ripple-expand" />
          <div
            className="absolute inset-0 rounded-full border-2 border-[#C4B5F7]/20 animate-ripple-expand"
            style={{ animationDelay: '0.2s' }}
          />
          <div
            className="absolute inset-0 rounded-full border-2 border-[#EDE8FB]/15 animate-ripple-expand"
            style={{ animationDelay: '0.4s' }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};
