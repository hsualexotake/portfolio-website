'use client';
import { type JSX, useEffect, useState } from 'react';
import { motion, MotionProps } from 'framer-motion';

type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motion[Component as keyof typeof motion] as React.ComponentType<any>;
  const text = children;

  // Start with empty string to avoid hydration mismatch
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  const scramble = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      let scrambled = '';
      const progress = step / steps;

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          scrambled += ' ';
          continue;
        }

        if (progress * text.length > i) {
          scrambled += text[i];
        } else {
          scrambled +=
            characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      step++;

      if (step > steps) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
        onScrambleComplete?.();
      }
    }, speed * 1000);
  };

  useEffect(() => {
    setMounted(true);
    // Initialize with scrambled text after mount
    const scrambledInit = text.split('').map(char =>
      char === ' ' ? ' ' : characterSet[Math.floor(Math.random() * characterSet.length)]
    ).join('');
    setDisplayText(scrambledInit);
  }, []);

  useEffect(() => {
    if (!trigger || !mounted) return;

    // Small delay to ensure initial scrambled text is visible
    const timeout = setTimeout(() => {
      scramble();
    }, 100);

    return () => clearTimeout(timeout);
  }, [trigger, mounted]);

  // Use invisible text to maintain layout while loading
  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: mounted ? 1 : 0 }}
      transition={{ duration: 1.75, ease: "easeOut" }}
      {...props}
    >
      {displayText || <span style={{ visibility: 'hidden' }}>{text}</span>}
    </MotionComponent>
  );
}