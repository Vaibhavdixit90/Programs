"use client";
import React, { useState, useEffect, useRef } from "react";
import { Pause, Play } from "lucide-react";
import Image from "next/image";

interface MediaPlayerProps {
  source: string;
  image: string;
}

const MediaPlayer: React.FC<MediaPlayerProps> = ({ source, image }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const updateCurrentTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const resetPlayer = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("timeupdate", updateCurrentTime);
    audio.addEventListener("ended", resetPlayer);

    // Check if metadata is already loaded
    if (audio.readyState >= 1 && !isNaN(audio.duration)) {
      setDuration(audio.duration);
    }

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("timeupdate", updateCurrentTime);
      audio.removeEventListener("ended", resetPlayer);
    };
  }, [source]); // Ensure effect runs when the source changes

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const calculateSeekColor = () => {
    const percent = (currentTime / duration) * 100;
    return `linear-gradient(to right, green   0%, green   ${percent}%, #fff  ${percent}%, #fff  100%)`;
  };

  return (
    <div className="shadow-lg rounded-2xl">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
        <div className="relative">
          <Image
            src={image}
            alt="Media"
            width={800}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 flex items-center justify-between">
          <button
            onClick={handlePlayPause}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black cursor-pointer"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <span className="ml-3 text-sm">{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration || 1}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            className="seek-bar w-full h-1 mx-2 cursor-pointer"
            style={{ background: calculateSeekColor() }}
          />
          <span className="text-sm">{formatTime(duration)}</span>
        </div>
        <audio ref={audioRef} src={source} preload="auto" />
      </div>
    </div>
  );
};

export default MediaPlayer;
