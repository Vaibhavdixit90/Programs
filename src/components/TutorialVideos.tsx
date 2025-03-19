"use client";
import { Play } from "lucide-react";
import React, { useState } from "react";

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  "https://www.youtube.com/embed/LXb3EKWsInQ",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
];

const thumbnails = [
  "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
  "https://img.youtube.com/vi/LXb3EKWsInQ/hqdefault.jpg",
  "https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg",
];

const TutorialVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className=" px-4 py-8 sm:py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Tutorial Videos from Guru ji
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Experience the power of meditation guided by Guru ji. Discover the
          transformative wisdom within you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="w-full aspect-video rounded-lg overflow-hidden shadow-lg relative cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            <img
              src={thumbnails[index]}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover bg-gray-200"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <Play className="text-white text-4xl" />
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 aspect-video bg-black rounded-lg overflow-hidden">
            <button
              className="absolute top-2 right-2 text-white text-xl bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
            <iframe
              className="w-full h-full"
              src={selectedVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorialVideos;
