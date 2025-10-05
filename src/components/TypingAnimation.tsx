'use client';

import { useState, useEffect, useRef } from 'react';

interface TypingAnimationProps {
  words: string[];
  className?: string;
}

const TypingAnimation = ({ words, className }: TypingAnimationProps) => {
  const [text, setText] = useState('');
  const index = useRef(0);
  const isDeleting = useRef(false);
  const wordIndex = useRef(0);
  const timeoutId = useRef<NodeJS.Timeout>();

  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delay = 2000;

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex.current];
      
      if (isDeleting.current) {
        setText(currentWord.substring(0, index.current - 1));
        index.current--;
      } else {
        setText(currentWord.substring(0, index.current + 1));
        index.current++;
      }

      if (!isDeleting.current && index.current === currentWord.length) {
        isDeleting.current = true;
        timeoutId.current = setTimeout(type, delay);
      } else if (isDeleting.current && index.current === 0) {
        isDeleting.current = false;
        wordIndex.current = (wordIndex.current + 1) % words.length;
        timeoutId.current = setTimeout(type, typingSpeed);
      } else {
        timeoutId.current = setTimeout(type, isDeleting.current ? deletingSpeed : typingSpeed);
      }
    };

    timeoutId.current = setTimeout(type, 250);

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [words]);

  return (
    <span className={className}>
      C{text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;