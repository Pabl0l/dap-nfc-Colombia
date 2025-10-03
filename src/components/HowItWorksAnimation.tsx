'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const HowItWorksAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasArrived, setHasArrived] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsAnimating(true);
          }, 200);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
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

  useEffect(() => {
    if (isAnimating) {
      const arrivalTimer = setTimeout(() => {
        setHasArrived(true);
      }, 1000); // Duration of the phone's movement
      return () => clearTimeout(arrivalTimer);
    }
  }, [isAnimating]);

  return (
    <div ref={animationRef} className="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden">
      {/* Tag - positioned on the left */}
      <div
        className={`absolute left-[20%] md:left-[16%] transition-all duration-500 ${hasArrived ? '[filter:drop-shadow(0_0_25px_rgba(255,255,255,0.4))]' : ''}`}
      >
        <Image
          src="/images/tag-2.png"
          alt="NFC Tag"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      {/* Phone - starts on the right and moves left */}
      <div
        className={`absolute right-[10%] md:right-1/4 transition-transform duration-1000 ease-in-out ${isAnimating ? '-translate-x-16 md:-translate-x-40' : 'translate-x-0'}`}
      >
        {/* Container for the two phone images */}
        <div className="relative">
          {/* Initial phone image - always visible */}
          <Image
            src="/images/phone.png"
            alt="Phone approaching NFC tag"
            width={200}
            height={200}
            className="object-contain"
          />
          {/* Phone image after interaction - fades in on top */}
          <Image
            src="/images/phone-2.png"
            alt="Phone interacting with NFC tag"
            width={200}
            height={200}
            className={`absolute top-0 left-0 object-contain transition-opacity duration-500 ${hasArrived ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksAnimation;
