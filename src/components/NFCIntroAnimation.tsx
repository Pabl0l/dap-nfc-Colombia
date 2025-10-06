'use client';

import { motion } from 'framer-motion';

const NFCIntroAnimation = () => {
  const phrase = "Nuevas Formas de Compartir.";
  const words = phrase.split(" ");

  let charCount = 0; // To keep track of the overall character index

  return (
    <motion.div
      className="text-accent font-extrabold tracking-tighter"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split("").map((char, charIndex) => {
            const isNFC =
              (wordIndex === 0 && charIndex === 0) || // N in Nuevas
              (wordIndex === 1 && charIndex === 0) || // F in Formas
              (wordIndex === 3 && charIndex === 0);    // C in Compartir

            const currentCharacterIndex = charCount;
            charCount++; // Increment for the next character

            // Adjust delay for NFC letters to appear first
            const delay = isNFC ? currentCharacterIndex * 0.05 : 1 + currentCharacterIndex * 0.05;

            return (
              <motion.span
                key={charIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay, duration: 0.5 } }}
                className={isNFC ? "text-accent text-7xl md:text-8xl lg:text-9xl" : ""}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </motion.div>
  );
};

export default NFCIntroAnimation;
