"use client";
import React from "react";
import { motion } from "framer-motion";

const PortfolioWatch = () => {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  // Beautify date: e.g. 'Wed, 03 Sep 2025'
  const date = now.toLocaleDateString('en-US', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const size = 80;
  const center = size / 2;
  const radius = center - 8;
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const hourAngle = (hour + minute / 60) * 30;
  const minuteAngle = (minute + second / 60) * 6;
  const secondAngle = second * 6;
  function hand(angle, length, width, color, shadow = false) {
    const rad = (Math.PI / 180) * angle;
    const x = center + length * Math.sin(rad);
    const y = center - length * Math.cos(rad);
    return (
      <line
        x1={center}
        y1={center}
        x2={x}
        y2={y}
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        style={shadow ? { filter: 'drop-shadow(0 0 4px #fff8)' } : {}}
      />
    );
  }
  // Draggable logic
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const [dragging, setDragging] = React.useState(false);
  const dragRef = React.useRef(null);
  const offset = React.useRef({ x: 0, y: 0 });

  const onPointerMove = React.useCallback((e) => {
    if (!dragging) return;
    const pointerX = e.touches ? e.touches[0].clientX : e.clientX;
    const pointerY = e.touches ? e.touches[0].clientY : e.clientY;
    setPos({
      x: pointerX - offset.current.x,
      y: pointerY - offset.current.y,
    });
    if (e.cancelable) e.preventDefault();
  }, [dragging]);

  const onPointerUp = React.useCallback(() => {
    setDragging(false);
    document.removeEventListener('pointermove', onPointerMove);
    document.removeEventListener('pointerup', onPointerUp);
    document.removeEventListener('touchmove', onPointerMove);
    document.removeEventListener('touchend', onPointerUp);
  }, [onPointerMove]);

  const onPointerDown = React.useCallback((e) => {
    setDragging(true);
    const pointerX = e.touches ? e.touches[0].clientX : e.clientX;
    const pointerY = e.touches ? e.touches[0].clientY : e.clientY;
    offset.current = {
      x: pointerX - pos.x,
      y: pointerY - pos.y,
    };
    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp);
    document.addEventListener('touchmove', onPointerMove, { passive: false });
    document.addEventListener('touchend', onPointerUp);
  }, [pos.x, pos.y, onPointerMove, onPointerUp]);

  React.useEffect(() => {
    return () => {
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerup', onPointerUp);
      document.removeEventListener('touchmove', onPointerMove);
      document.removeEventListener('touchend', onPointerUp);
    };
  }, [onPointerMove, onPointerUp]);

  return (
    <div
      style={{ position: 'absolute', left: pos.x, top: pos.y, touchAction: 'none', zIndex: 100 }}
      className="select-none"
    >
      <div
        ref={dragRef}
        onPointerDown={onPointerDown}
        onTouchStart={onPointerDown}
        className="flex flex-col items-center justify-center rounded-full p-3 shadow-2xl bg-white dark:bg-black backdrop-blur-lg cursor-move"
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
          <circle cx={center} cy={center} r={radius} fill="#fff" />
          {/* Black & white hour marks */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const x1 = center + (radius - 8) * Math.sin(angle);
            const y1 = center - (radius - 8) * Math.cos(angle);
            const x2 = center + radius * Math.sin(angle);
            const y2 = center - radius * Math.cos(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#222" strokeWidth={i % 3 === 0 ? 3 : 1.5} opacity={i % 3 === 0 ? 0.9 : 0.5} />;
          })}
          {/* Hands: black for hour/minute, gray for second */}
          {hand(hourAngle, radius * 0.5, 5, "#222", true)}
          {hand(minuteAngle, radius * 0.7, 3, "#222", true)}
          <motion.line
            x1={center}
            y1={center}
            x2={center + radius * 0.85 * Math.sin((Math.PI / 180) * secondAngle)}
            y2={center - radius * 0.85 * Math.cos((Math.PI / 180) * secondAngle)}
            stroke="#888"
            strokeWidth={2}
            strokeLinecap="round"
            initial={false}
            animate={{
              x2: center + radius * 0.85 * Math.sin((Math.PI / 180) * secondAngle),
              y2: center - radius * 0.85 * Math.cos((Math.PI / 180) * secondAngle),
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            style={{ filter: 'drop-shadow(0 0 4px #8888)' }}
          />
          {/* Center dot */}
          <circle cx={center} cy={center} r={4} fill="#222" />
        </svg>
        <span className="text-sm font-mono mt-2 font-bold text-black dark:text-white px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 shadow" style={{ letterSpacing: 1 }}>
          {date}
        </span>
      </div>
    </div>
  );
};

export default PortfolioWatch;
