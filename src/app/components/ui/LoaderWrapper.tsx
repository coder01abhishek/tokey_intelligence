'use client';

import { useState, useEffect } from 'react';
import Loader from './Loader';
import { motion, AnimatePresence } from 'framer-motion';

const LoaderWrapper = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let isMounted = true;
    
    // Always show loader for minimum 2 seconds
    const minimumTimer = setTimeout(() => {
      if (isMounted) {
        setLoading(false);
      }
    }, 2000);

    // Smooth progress animation from 0% to 100% over 2 seconds
    const progressInterval = setInterval(() => {
      if (isMounted) {
        setProgress(prev => {
          const newProgress = prev + 2; // Increase by 2% every 40ms to reach 100% in 2000ms
          return newProgress >= 100 ? 100 : newProgress;
        });
      }
    }, 40);

    // Preload critical resources in background
    const preloadResources = async () => {
      // Preload images
      const images = [
        '/videos/doll.gif',
        '/bg-inte.png',
        '/Gradient.png',
        '/fader.png'
      ];

      await Promise.all(
        images.map(src => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );

      // Preload fonts
      await document.fonts.ready;
    };

    preloadResources();

    return () => {
      isMounted = false;
      clearTimeout(minimumTimer);
      clearInterval(progressInterval);
    };
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "easeInOut" as const,
    duration: 0.5
  };

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          <Loader progress={progress} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoaderWrapper;