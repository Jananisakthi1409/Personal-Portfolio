import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive-hover') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Center Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovered ? 2.2 : 1})`,
          backgroundColor: isHovered ? '#4a1521' : '#b8686c'
        }}
      />

      {/* Trailing Soft Halo */}
      <div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-40 transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 border border-[#e5c9c5]/60"
        style={{
          width: isHovered ? '48px' : '30px',
          height: isHovered ? '48px' : '30px',
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          background: isHovered
            ? 'radial-gradient(circle, rgba(184,104,108,0.18) 0%, rgba(229,201,197,0.06) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(184,104,108,0.12) 0%, transparent 80%)'
        }}
      />
    </>
  );
};
