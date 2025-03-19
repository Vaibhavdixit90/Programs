"use client";
import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

const PodcastSingle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [durations, setDurations] = useState<string[]>([]);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const episodes = [
    {
      id: 1,
      title: "Deep Relaxation for Inner Peace",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      id: 2,
      title: "Mindful Breathing Meditation",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 3,
      title: "Letting Go of Stress and Anxiety",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      id: 4,
      title: "Guided Meditation for Deep Sleep",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      id: 5,
      title: "Healing Meditation for Emotional Balance",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      id: 6,
      title: "Chakra Balancing Meditation",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    },
    {
      id: 7,
      title: "Manifesting Positivity and Gratitude",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    },
    {
      id: 8,
      title: "Awakening Inner Consciousness",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    },
    {
      id: 9,
      title: "Morning Meditation for a Fresh Start",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    },
    {
      id: 10,
      title: "Evening Reflection and Relaxation",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    },
  ];

  useEffect(() => {
    // Load durations dynamically
    const loadDurations = async () => {
      const newDurations: string[] = [];
      for (const episode of episodes) {
        const audio = new Audio(episode.audioSrc);
        await new Promise<void>((resolve) => {
          audio.addEventListener("loadedmetadata", () => {
            newDurations.push(formatTime(audio.duration));
            resolve();
          });
        });
      }
      setDurations(newDurations);
    };

    loadDurations();
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const selectEpisode = (index: number) => {
    setCurrentEpisode(index);
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime("0:00");

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => console.error("Playback error:", error));
      }
    }, 50);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentSeconds = audioRef.current.currentTime;
      const duration = audioRef.current.duration || 1;
      setProgress((currentSeconds / duration) * 100);
      setCurrentTime(formatTime(currentSeconds));
    }
  };

  const playNext = () => {
    const newIndex =
      currentEpisode < episodes.length - 1 ? currentEpisode + 1 : 0;
    selectEpisode(newIndex);
  };

  return (
    <div className="min-h-screen px-4 sm:py-16 py-12">
      <audio
        ref={audioRef}
        src={episodes[currentEpisode].audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={playNext}
        className="hidden"
      />

      <div>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Mental Wellness</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image and title div (Fixed) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:self-start">
            <Card className="overflow-hidden shadow-xl border-none backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="/Program.png"
                    alt="Podcast Cover"
                    className="w-full h-auto lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-sm font-medium uppercase tracking-wider mb-1 opacity-80">
                        Now Playing
                      </h3>
                      <h2 className="text-2xl font-bold">
                        {episodes[currentEpisode].title}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="px-6 pt-2">
                  <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-black rounded-full"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 my-2">
                    <span>{currentTime}</span>
                    <span>{durations[currentEpisode] || "0:00"}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between px-6 pb-6">
                  <Button
                    onClick={togglePlayPause}
                    variant="default"
                    size="icon"
                    className="h-14 w-14 rounded-full cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6 ml-1" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Scrollable Episodes List */}
          <div className="w-full lg:w-1/2 lg:max-h-screen overflow-y-auto shadow-xl lg:border-none lg:backdrop-blur-sm rounded-xl ">
            <div className="rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">All Episodes</h3>
              <div className="space-y-3 max-h-[600px]">
                {episodes.map((episode, index) => (
                  <button
                    key={episode.id}
                    onClick={() => selectEpisode(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all cursor-pointer ${
                      currentEpisode === index
                        ? "bg-gray-200 border-l-4 border-black"
                        : "bg-white hover:bg-gray-50 border-l-4 border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-1 truncate">
                        <h4
                          className={`font-medium ${
                            currentEpisode === index
                              ? "text-black"
                              : "text-gray-900"
                          }`}
                        >
                          {episode.title}
                        </h4>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-gray-500">
                            {durations[index] || "Loading..."}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastSingle;
