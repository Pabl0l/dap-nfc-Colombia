"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const shareOptions = [
  {
    id: "instagram",
    name: "Instagram",
    tagImage: "/images/instagram-tag.png",
    contentImage: "/images/ss-instagram.png",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    tagImage: "/images/linkedin-tag.png",
    contentImage: "/images/ss-linkedin.png",
  },
  {
    id: "wifi",
    name: "WiFi",
    tagImage: "/images/wifi-tag.png",
    contentImage: "/images/ss-wifi.png",
  },
  {
    id: "spotify",
    name: "Spotify",
    tagImage: "/images/spotify-tag.png",
    contentImage: "/images/ss-spotify.png",
  },
  {
    id: "bitcoin",
    name: "Bitcoin",
    tagImage: "/images/bitcoin-tag.png",
    contentImage: "/images/ss-bitcoin.png",
  },
];

const InstantShareAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % shareOptions.length);
    }, 3000); //  seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <div className="relative flex flex-col items-center justify-center space-y-8">
        {/* Tags Carousel */}
        <div className="relative w-full h-24 flex items-center justify-center overflow-hidden">
          {shareOptions.map((option, idx) => {
            let effectiveOffset = idx - activeIndex;

            // Adjust offset for seamless looping
            if (effectiveOffset > shareOptions.length / 2) {
              effectiveOffset -= shareOptions.length;
            } else if (effectiveOffset < -shareOptions.length / 2) {
              effectiveOffset += shareOptions.length;
            }

            const xPos = effectiveOffset * 100; // Each item moves 100px

            let scaleValue = 0.7;
            let opacityValue = 0.4;
            let zIndexValue = 1;

            if (effectiveOffset === 0) { // Center item
              scaleValue = 1.1;
              opacityValue = 1;
              zIndexValue = 10;
            } else if (effectiveOffset === -1 || effectiveOffset === 1) { // Adjacent items
              scaleValue = 0.9;
              opacityValue = 0.7;
              zIndexValue = 5;
            }

            return (
              <motion.div
                key={option.id}
                className="absolute"
                initial={false}
                animate={{
                  x: xPos,
                  scale: scaleValue,
                  opacity: opacityValue,
                  zIndex: zIndexValue,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Image
                  src={option.tagImage}
                  alt={`${option.name} Tag`}
                  width={80}
                  height={80}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Content Display */}
        <div className="relative w-72 h-[250px] flex items-center justify-center">
          {shareOptions.map((option, index) => (
            <div
              key={option.id}
              className={`absolute transition-opacity duration-500 ease-in-out bg-black rounded-lg ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={option.contentImage}
                alt={option.name}
                width={288}
                height={250}
                objectFit="contain"
                className="rounded-lg [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstantShareAnimation;