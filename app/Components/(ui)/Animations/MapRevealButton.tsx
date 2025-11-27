"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface MapRevealButtonProps {
  className?: string;
}

export default function MapRevealButton({ className = "" }: MapRevealButtonProps) {
  const [isMapVisible, setIsMapVisible] = useState(false);

  const handleClick = () => {
    setIsMapVisible(!isMapVisible);
  };

  return (
    <>
      {/* Bouton animé */}
      <motion.button
        onClick={handleClick}
        className={`h-44 w-44 rounded-full bg-black text-white border-2 border-black flex flex-col items-center justify-center text-1xl uppercase tracking-[0.18em] relative overflow-hidden transition-all duration-300 hover:bg-[#f4f4f4] hover:text-black ${className} hover:cursor-pointer`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <span className="relative z-10">
          {isMapVisible ? "MASQUER" : "AFFICHER"}
          <br />
          LE LIEU
        </span>
      </motion.button>

      {/* Carte Google Maps avec animation */}
      <AnimatePresence>
        {isMapVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm "
            onClick={handleClick}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative w-[90vw] h-[80vh] max-w-6xl bg-white rounded-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton de fermeture */}
              <button
                onClick={handleClick}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                ✕
              </button>

              {/* Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89245.89065857956!2d4.781671649999999!3d45.7578137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lyon, France"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
