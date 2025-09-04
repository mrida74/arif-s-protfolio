/**
 * Typewriter effect logic for use in client components.
 * Usage: import { useTypewriter } from 'lib/utils/typewriter'
 */
import { useState, useEffect } from "react";

export function useTypewriter(text, speed = 120, pause = 1200) {
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    let timeout;
    if (!isDeleting && idx < text.length) {
      timeout = setTimeout(() => {
        setDisplay(text.slice(0, idx + 1));
        setIdx(idx + 1);
      }, speed);
    } else if (isDeleting && idx > 0) {
      timeout = setTimeout(() => {
        setDisplay(text.slice(0, idx - 1));
        setIdx(idx - 1);
      }, speed * 0.7);
    } else if (!isDeleting && idx === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && idx === 0) {
      timeout = setTimeout(() => setIsDeleting(false), pause / 2);
    }
    return () => clearTimeout(timeout);
  }, [text, idx, isDeleting, speed, pause]);

  return display;
}
