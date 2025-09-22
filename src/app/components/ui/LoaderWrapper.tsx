'use client';

import { useState, useEffect } from 'react';
import Loader from './Loader';
import { getAssetUrl } from '../../config/assets';

// Critical assets for immediate display - including the hero GIF
const CRITICAL_ASSETS = [
  '/videos/doll.gif',  // Hero GIF with transparent background
  '/bg-inte.png',      // Background image
  '/Gradient.png',     // Gradient overlay
  '/fader.png'         // Fade effect
];

// Non-critical videos (lazy loaded)
const LAZY_VIDEOS = [
  '/videos/step3.mp4',
  '/videos/AICharactor.mp4',
  '/videos/Aiagent.mp4'
];

const LoaderWrapper = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(35); // Start at 35% immediately

  useEffect(() => {
    let loadedCount = 0;
    const totalItems = CRITICAL_ASSETS.length + 2; // assets + fonts
    let isLoadingComplete = false;

    // Progress increment: 5% per second from 35% to 95% (60% range over 12 seconds)
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + 5, 95); // Increment by 5% each second, cap at 95%
        return newProgress;
      });
    }, 1000); // Every 1 second

    const updateProgress = () => {
      loadedCount++;
      
      // Check if all assets are loaded
      if (loadedCount >= totalItems) {
        isLoadingComplete = true;
        
        // Immediately jump to 100% and show website - no delays!
        clearInterval(progressInterval);
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
        }, 100); // Minimal delay just for visual feedback
      }
    };

    // Monitor if loading completes while progress is still climbing
    const checkCompletion = () => {
      if (isLoadingComplete) {
        clearInterval(progressInterval);
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
        }, 100);
      }
    };

    // Check completion every 100ms to ensure immediate response
    const completionChecker = setInterval(checkCompletion, 100);

    const preloadCriticalAssets = async () => {
      const promises = CRITICAL_ASSETS.map((src, index) => {
        return new Promise<void>((resolve) => {
          const img = document.createElement('img');
          img.src = getAssetUrl(src);

          img.onload = () => {
            updateProgress();
            resolve();
          };

          img.onerror = () => {
            console.warn(`Failed to preload ${getAssetUrl(src)}`);
            updateProgress();
            resolve();
          };
        });
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        console.warn('Some critical assets failed to preload:', error);
      }
    };

    const preloadCriticalResources = async () => {
      // Preload critical fonts individually for better progress tracking
      const fonts = [
        '16px Inter',
        'bold 16px Inter'
      ];

      for (const font of fonts) {
        try {
          await document.fonts.load(font);
          updateProgress();
        } catch (error) {
          console.warn(`Font loading failed for ${font}:`, error);
          updateProgress();
        }
      }
    };

    const handleLoad = async () => {
      // Wait for DOM to be ready
      await new Promise(resolve => {
        if (document.readyState === 'complete') {
          resolve(void 0);
        } else {
          window.addEventListener('load', resolve, { once: true });
        }
      });

      // Start preloading critical resources
      await Promise.all([
        preloadCriticalAssets(),
        preloadCriticalResources()
      ]);
    };

    handleLoad();

    return () => {
      clearInterval(progressInterval);
      clearInterval(completionChecker);
      window.removeEventListener('load', () => {});
    };
  }, []);

  if (loading) {
    return <Loader progress={progress} />;
  }

  return null;
};

export default LoaderWrapper;
