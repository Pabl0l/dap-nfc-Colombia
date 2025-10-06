'use client';

import { motion } from 'framer-motion';

const NFCIntroAnimation = () => {
  const phrase = "Nuevas Formas de Compartir.";
  const words = phrase.split(" ");

  const lines = [
    [words[0]], // Nuevas
    [words[1], words[2]], // Formas de
    [words[3]], // Compartir.
  ];

  let charCount = 0; // To keep track of the overall character index

  return (
    <motion.div
      className="text-light md:text-accent font-extrabold tracking-tighter mx-auto w-full px-4"
    >
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block"> {/* Each line is a block */}
          {line.map((word, wordIndexInLine) => (
            <span key={wordIndexInLine} className="inline-block mr-2"> {/* Words within a line are inline-block */}
              {word.split("").map((char, charIndex) => {
                const isNFC =
                  (lineIndex === 0 && wordIndexInLine === 0 && charIndex === 0) || // N in Nuevas
                  (lineIndex === 1 && wordIndexInLine === 0 && charIndex === 0) || // F in Formas
                  (lineIndex === 2 && wordIndexInLine === 0 && charIndex === 0);    // C in Compartir

                const currentCharacterIndex = charCount;
                charCount++; // Increment for the next character

                // Adjust delay for NFC letters to appear first
                const delay = isNFC ? currentCharacterIndex * 0.05 : 1 + currentCharacterIndex * 0.05;

                return (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay, duration: 0.5 } }}
                    className="text-accent text-6xl md:text-8xl lg:text-9xl"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

export default NFCIntroAnimation;
