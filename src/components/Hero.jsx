import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Hero Component — Video background with mute/unmute functionality.
 * Uses the local video from /videos/homepage/bg%20video%20homepage.mp4
 * SF Pro font only for consistent typography
 * Optimized for fast loading: preload=metadata, poster image, loading states
 */
export default function Hero() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMuteButton, setShowMuteButton] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Handle video loaded metadata
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.volume = 1.0;
      
      const handleCanPlay = () => {
        setVideoLoaded(true);
        setVideoError(false);
      };
      
      const handleError = () => {
        setVideoError(true);
        setVideoLoaded(false);
      };
      
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      
      // Attempt to play automatically
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise

          .then(() => {
            setIsPlaying(true);
            // Show mute button after video starts playing
            setTimeout(() => setShowMuteButton(true), 1000);
          })

          .catch(() => {
            // Autoplay was prevented, video will play on user interaction
            setIsPlaying(false);
          });
      }
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);


  const toggleMute = () => {

    const video = videoRef.current;

    if (video) {

      const newMuted = !isMuted;

      video.muted = newMuted;

      setIsMuted(newMuted);

    }

  };


  const handleVideoClick = () => {

    const video = videoRef.current;

    if (video) {

      if (video.paused) {

        video.play().then(() => setIsPlaying(true)).catch(() => {});

      } else {

        video.pause();

        setIsPlaying(false);

      }

    }

  };


  return (

    <section

      id="home"

      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-[100px] pb-12 overflow-hidden bg-black"

      style={{ backgroundColor: '#000000' }}

    >

      {/* Full landscape background video */}

      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Poster image shown while video loads - replace with actual poster */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-black z-10 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" aria-hidden="true" />
          </div>
        )}
        
        <video

          ref={videoRef}

          autoPlay

          muted

          loop

          playsInline

          preload="metadata"

          className={`w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}

          onClick={handleVideoClick}

          onLoadStart={() => setVideoLoaded(false)}

          onCanPlay={() => setVideoLoaded(true)}

          onError={() => setVideoError(true)}
        >
          <source src="/videos/homepage/bg%20video%20homepage.mp4" type="video/mp4" />
          {/* Add WebM source for better compression when available */}
          {/* <source src="/videos/homepage/bg%20video%20homepage.webm" type="video/webm" /> */}
        </video>
        
        {/* Fallback static background if video fails to load */}
        {videoError && (
          <div className="absolute inset-0 bg-black z-20" aria-hidden="true" />
        )}
        
        {/* Enhanced dark gradient overlay for better text readability over video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        {/* Subtle vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Bottom CTA / Scroll Indicator */}
      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ delay: 1, duration: 1 }}

        className="absolute bottom-8 right-6 md:right-12 flex items-center gap-6 z-10"
      >
        <p className="text-[0.7rem] uppercase font-semibold tracking-widest text-white/50 hidden md:block">
          Scroll to explore
        </p>
        <a href="#about" className="w-[80px] h-[80px] rounded-full bg-white text-black flex items-center justify-center group hover:bg-yellow-400 hover:text-black transition-colors duration-300">
          <svg className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>

      {/* Mute/Unmute Button - Bottom Right */}
      {showMuteButton && (
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          aria-pressed={!isMuted ? "true" : "false"}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          {!isMuted ? (
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.142 16.142a9 9 0 01-12.728 0M5 5a9 9 0 0112.728 0m0 0l-2.829 2.829M18.536 13.464a5 5 0 010 7.072m0 0l-2.829 2.829M13.765 8.235a1 1 0 011.414 1.414l-2.829 2.829M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <line x1="1" y1="1" x2="23" y2="23" strokeLinecap="round" />
            </svg>
          )}
          {/* Tooltip */}
          <span className="absolute bottom-full right-0 mb-2 px-2 py-1 text-xs font-medium text-white bg-black/80 backdrop-blur-md rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {isMuted ? 'Unmute' : 'Mute'}
          </span>
        </button>
      )}
    </section>
  );
}


