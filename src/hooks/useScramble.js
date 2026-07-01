import { useState, useEffect } from "react";

/**
 * A custom React hook that scrambles characters before revealing the target text.
 * @param {string} text - The final text to display.
 * @param {number} duration - Animation duration in seconds.
 * @param {number} delay - Animation start delay in seconds.
 * @returns {string} - The current display text.
 */
export function useScrambleText(text, duration = 1.2, delay = 0) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!text) return;

    let timer;
    let frame = 0;
    const fps = 60;
    const totalFrames = duration * fps;
    const symbols = "!@#$%^&*()_+{}[]|:;<>?,./01+";
    let scrambledCache = [];

    // Set initial scrambled state
    const getInitialScrambled = () => {
      let res = "";
      for (let i = 0; i < text.length; i++) {
        res += text[i] === " " ? " " : symbols[Math.floor(Math.random() * symbols.length)];
      }
      return res;
    };
    
    setDisplayText(getInitialScrambled());

    const animate = () => {
      frame++;
      const progress = Math.min(1, frame / totalFrames);

      // Easing curve (easeOutCubic for a smoother deceleration)
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      // Determine reveal index based on eased progress
      const revealIndex = Math.floor(text.length * easeProgress);

      // Only change scrambled symbols every 4 frames to reduce hyperactive jitter
      if (frame % 4 === 0 || scrambledCache.length === 0) {
        scrambledCache = [];
        for (let i = 0; i < text.length; i++) {
          scrambledCache.push(symbols[Math.floor(Math.random() * symbols.length)]);
        }
      }

      let result = text.substring(0, revealIndex);
      for (let i = revealIndex; i < text.length; i++) {
        if (text[i] === " ") {
          result += " ";
        } else {
          result += scrambledCache[i] || symbols[Math.floor(Math.random() * symbols.length)];
        }
      }

      setDisplayText(result);

      if (progress < 1) {
        timer = requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
      }
    };

    const startTimeout = setTimeout(() => {
      animate();
    }, delay * 1000);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(timer);
    };
  }, [text, duration, delay]);

  return displayText;
}
