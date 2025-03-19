"use client";
import React, { useState, useEffect } from "react";
import MediaPlayer from "./MediaPlayer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

interface MeditationItemProps {
  title: string;
  onClick: () => void;
  isPlaying: boolean;
}

const MeditationItem: React.FC<MeditationItemProps> = ({
  title,
  onClick,
  isPlaying,
}) => (
  <div
    className={`flex items-center space-x-2 py-2 px-3 cursor-pointer rounded-md ${
      isPlaying ? "bg-gray-300" : "hover:text-blue-600"
    }`}
    onClick={onClick}
  >
    <PlayCircle className={"w-5 h-5 text-black"} />
    <span className="text-gray-800">{title}</span>
  </div>
);

const MeditationAccessPage = () => {
  const meditations = [
    {
      title: "Awakening the Mind",
      src: "/100-KB-MP3.mp3",
      image: "/Single.webp",
    },
    {
      title: "Effective and Structured Communication",
      src: "/100-KB-MP3.mp3",
      image: "/Ram.webp",
    },
  ];

  const gurujiMeditations = [
    { title: "Invocation", image: "/Single.webp" },
    { title: "Keyless Door Meditation", image: "/SignUp.jpg" },
    { title: "Whole Brain Development", image: "/Ram.webp" },
    { title: "Numerical Intelligence", image: "/Single.webp" },
    { title: "Improved Reflexes Meditation", image: "/SignUp.jpg" },
    { title: "Improved Reflexes - Kriya", image: "/SignUp.jpg" },
    { title: "Meditation to Develop Vision Based Life", image: "/SignUp.jpg" },
    { title: "KA BA SA Meditation", image: "/Ram.webp" },
    { title: "KA BA SA - Kriya", image: "/Single.webp" },
  ];

  const [source, setSource] = useState(meditations[0].src);
  const [image, setImage] = useState(meditations[0].image);
  const [playingTitle, setPlayingTitle] = useState(meditations[0].title);

  // Automatically play the first meditation on mount
  useEffect(() => {
    setSource(meditations[0].src);
    setImage(meditations[0].image);
    setPlayingTitle(meditations[0].title);
  }, []);

  const handleMeditationClick = (
    audioSrc: string,
    imageSrc: string,
    title: string
  ) => {
    setSource(audioSrc);
    setImage(imageSrc);
    setPlayingTitle(title);
  };

  return (
    <div className="px-4 sm:px-6">
      <h1 className="text-2xl font-bold p-5">No Negative Self-talk</h1>
      <MediaPlayer source={source} image={image} />
      <div className="grid md:grid-cols-2 gap-6 my-6">
        {/* Today's Meditations */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="mt-4 text-2xl font-bold">
              Today&apos;s Meditations
            </CardTitle>
          </CardHeader>
          <CardContent>
            {meditations.map(({ title, src, image }) => (
              <MeditationItem
                key={title}
                title={title}
                onClick={() => handleMeditationClick(src, image, title)}
                isPlaying={playingTitle === title}
              />
            ))}
          </CardContent>
        </Card>

        {/* Guruji's Grace */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="mt-4 text-2xl font-bold">
              Guruji&apos;s Grace
            </CardTitle>
          </CardHeader>
          <CardContent>
            {gurujiMeditations.map(({ title, image }) => (
              <MeditationItem
                key={title}
                title={title}
                onClick={() =>
                  handleMeditationClick("/100-KB-MP32.mp3", image, title)
                }
                isPlaying={playingTitle === title}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MeditationAccessPage;
