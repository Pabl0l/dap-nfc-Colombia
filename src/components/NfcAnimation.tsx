'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const NfcAnimation = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Add a small delay so the animation feels smoother on scroll
          setTimeout(() => {
            setIsRevealed(true);
          }, 200);
          observer.disconnect(); // Disconnect after triggering once
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    const currentRef = animationRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={animationRef} className="relative w-full h-64 flex items-center justify-center">
      {/* Chip NFC (the glowing part) - initially hidden */}
      <div
        className={`absolute transition-opacity duration-1000 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: isRevealed ? '1000ms' : '0ms', left: '55%' }}
      >
        <Image
          src='/images/chip-nfc.webp'
          alt="NFC Signal"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Chip (the physical chip) */}
      <div
        className={`absolute transition-all duration-700 ${isRevealed ? '[filter:drop-shadow(0_0_35px_rgba(255,255,255,0.4))]' : ''}`}
        style={{ transitionDelay: isRevealed ? '500ms' : '0ms' }}
      >
        <Image
          src='/images/chip.webp'
          alt="NFC Chip"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      {/* Tag (the sticker that moves) */}
      <div
        className={`absolute transition-transform duration-1000 ease-in-out ${isRevealed ? '-translate-x-24' : 'translate-x-0'}`}
      >
        <Image
          src='/images/tag.webp'
          alt="NFC Tag"
          width={145}
          height={145}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default NfcAnimation;
