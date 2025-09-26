'use client';

import { useState, useEffect } from 'react';
import Loader from './Loader';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssetUrl } from '../../config/assets';

const LoaderWrapper = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;
    let minimumTimer: NodeJS.Timeout | null = null;
    let allLoaded = false;

    // All assets to preload (images, videos, GIFs from BLOB_URLS + public folders, excluding known 404 assets)
    const criticalAssets = [
      // All videos from BLOB_URLS and public/videos
      '/videos/doll.mp4',
      '/videos/doll2.mp4',
      '/videos/doll3.mp4',
      '/videos/AICharactor.mp4',
      '/videos/step3.mp4',
      '/videos/Aiagent.mp4',
      '/videos/doll.gif',
      '/videos/tokyointelligence.mp4',
      '/videos/AICharactor_old.mp4',
      '/videos/AICharactor_olds.mp4',
      '/videos/step3_old.mp4',
      
      // All GIFs from BLOB_URLS and public/assets/gifs
      '/assets/gifs/loader.gif',
      '/assets/gifs/consciousness.gif',
      '/assets/gifs/discord.gif',
      '/assets/gifs/hearing.gif',
      '/assets/gifs/memory.gif',
      '/assets/gifs/models.gif',
      '/assets/gifs/modules.gif',
      '/assets/gifs/providers.gif',
      '/assets/gifs/scene.gif',
      '/assets/gifs/shortTerm.gif',
      '/assets/gifs/speech.gif',
      '/assets/gifs/system.gif',
      '/assets/gifs/vision.gif',
      '/assets/gifs/x.gif',
      '/assets/gifs/consciousness.svg',
      '/assets/gifs/discord.svg',
      '/assets/gifs/hearing.svg',
      '/assets/gifs/memory.svg',
      '/assets/gifs/models.svg',
      '/assets/gifs/modules.svg',
      '/assets/gifs/providers.svg',
      '/assets/gifs/scene.svg',
      '/assets/gifs/shortTerm.svg',
      '/assets/gifs/speech.svg',
      '/assets/gifs/system.svg',
      '/assets/gifs/vision.svg',
      '/assets/gifs/x.svg',
      '/assets/gifs/e7e1b0d51357ff97737fb35438de69399854492f.gif',
      
      // All images from BLOB_URLS and public/assets/images (excluding /fader.png to avoid 404)
      '/bg-inte.png',
      '/cursor.png',
      '/Gradient.png',
      '/hand.png',
      '/phone.png',
      '/iPhone14Pro.svg',
      '/file.svg',
      '/globe.svg',
      '/next.svg',
      '/vercel.svg',
      '/window.svg',
      '/assets/images/ainew.png',
      '/assets/images/ainew_1.png',
      '/assets/images/ainew_2.png',
      '/assets/images/ainew_old.png',
      '/assets/images/eng.png',
      '/assets/images/epanola.png',
      '/assets/images/pycc.png',
      '/assets/images/tech-mask.png',
      '/assets/images/tie.png',
      '/assets/images/简体中文提示.png',
      
      // Icons/Favicons from BLOB_URLS
      '/favicon.ico',
      '/favicon-16x16.png',
      '/favicon-32x32.png',
      '/apple-touch-icon.png',
      '/android-chrome-192x192.png',
      '/android-chrome-512x512.png',
      
      // Additional GIF icons from BLOB_URLS
      '/assets/gifs/brain.gif',
      '/assets/gifs/layers.gif',
      '/assets/gifs/avatar.gif',
      '/assets/gifs/talking.gif',
      '/assets/gifs/discord-icon.gif',
      '/assets/gifs/intuitive.gif',
      '/assets/gifs/x-logo.gif',
      '/assets/gifs/film.gif',
      '/assets/gifs/binoculars.gif',
      '/assets/gifs/circuits.gif',
      '/assets/gifs/settings.gif',
      '/assets/gifs/special-animation.gif',
    ];

    const totalAssets = criticalAssets.length + 1; // +1 for fonts

    const updateProgress = () => {
      if (isMounted) {
        const newProgress = Math.round((loadedCount / totalAssets) * 100);
        setProgress(newProgress);
      }
    };

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = getAssetUrl(src);
        img.onload = () => {
          loadedCount++;
          updateProgress();
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          updateProgress();
          resolve();
        };
      });
    };

    const preloadVideo = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const video = document.createElement('video');
        video.preload = 'auto';
        video.src = getAssetUrl(src);
        video.oncanplaythrough = () => {
          loadedCount++;
          updateProgress();
          resolve();
        };
        video.onerror = () => {
          loadedCount++;
          updateProgress();
          resolve();
        };
      });
    };

    const preloadResources = async () => {
      // Preload images
      const imagePromises = criticalAssets
        .filter(asset => !asset.includes('.mp4'))
        .map(preloadImage);

      // Preload videos
      const videoPromises = criticalAssets
        .filter(asset => asset.includes('.mp4'))
        .map(preloadVideo);

      // Preload fonts
      const fontPromise = document.fonts.ready.then(() => {
        loadedCount++;
        updateProgress();
      });

      // Wait for all assets to load
      await Promise.allSettled([...imagePromises, ...videoPromises, fontPromise]);

      allLoaded = true;

      // Set minimum timer if not already set
      if (!minimumTimer) {
        minimumTimer = setTimeout(() => {
          if (isMounted) {
            setLoading(false);
          }
        }, 2000);
      } else {
        // If minimum timer already passed, hide loader immediately
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    // Start preloading
    preloadResources();

    // Set minimum timer
    minimumTimer = setTimeout(() => {
      if (isMounted && allLoaded) {
        setLoading(false);
      }
    }, 2000);


    // Smooth progress animation from 0% to 100% over 2 seconds
    const progressInterval = setInterval(() => {
      if (isMounted) {
        setProgress(prev => {
          const newProgress = prev + 2; // Increase by 2% every 40ms
          return newProgress >= 100 ? 100 : newProgress;
        });
      }
    }, 40);

    // Preload critical resources
    const preloadResources = async () => {
      // Preload images
      const images = [
        '/videos/doll.gif',
        '/bg-inte.png',
        '/Gradient.png',
        '/fader.png'
      ];

      const imagePromises = images.map(src => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        });
      });

      // ✅ Preload video
      const videoPromise = new Promise<void>((resolve) => {
        const video = document.createElement('video');
        video.src = '/videos/doll.mp4'; // <-- change to your video path
        video.preload = 'auto';
        video.oncanplaythrough = () => resolve();
        video.onerror = () => resolve();
      });

      // Preload fonts
      const fontsPromise = document.fonts.ready;

      await Promise.all([...imagePromises, videoPromise, fontsPromise]);
    };

    preloadResources();


    return () => {
      isMounted = false;
      if (minimumTimer) clearTimeout(minimumTimer);
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
