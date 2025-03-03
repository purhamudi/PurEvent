import { useEffect, useRef, useState } from "react";

const BackgroundVideo: React.FC<{src: string}> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.82; // Slow down video
      videoRef.current.src = src;
    }
  }, [videoLoaded, src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      onLoadedData={() => setVideoLoaded(true)}
      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1200 ${
        videoLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;