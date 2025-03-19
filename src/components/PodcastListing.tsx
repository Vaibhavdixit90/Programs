import React from "react";
import Image from "next/image";
import Link from "next/link";

const podcasts = [
  {
    id: 1,
    title: "The Art of Deep Meditation",
    image: "/Sanmarga.jpg",
    slug: "art-of-deep-meditation",
  },
  {
    id: 2,
    title: "Healing Through Mindfulness",
    image: "/Ram.webp",
    slug: "healing-through-mindfulness",
  },
  {
    id: 3,
    title: "Inner Peace and Spiritual Growth",
    image: "/Social.jpg",
    slug: "inner-peace-and-spiritual-growth",
  },
];

const PodcastListing = () => {
  return (
    <div className="px-4 sm:py-16 py-12">
      <div className="max-w-2xl mx-auto md:mx-0 mb-8">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Discover the Power of Meditation
        </h2>
      </div>

      {/* Podcast Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {podcasts.map((podcast) => (
          <Link
            key={podcast.id}
            href={`/podcasts/${podcast.slug}`}
            className="group"
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer ">
              <Image
                src={podcast.image}
                alt={podcast.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{podcast.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PodcastListing;
