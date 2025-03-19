"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const activeCourses = [
  {
    id: 1,
    title: "Sanmarga Abhayam",
    imageUrl: "/Program.png",
    slug: "/meditation-access",
  },
  {
    id: 2,
    title: "Sanmarga Abhayam",
    imageUrl: "/Program.png",
    slug: "/meditation-access",
  },
  {
    id: 3,
    title: "Sanmarga Abhayam",
    imageUrl: "/Program.png",
    slug: "/meditation-access",
  },
];

const ActiveCourses = () => {
  const router = useRouter();

  return (
    <div className="px-4 py-8 sm:py-12">
      <div className="grid grid-cols-1 gap-6 mt-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {activeCourses.map((activeCourse) => (
          <div
            className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow rounded-xl hover:shadow-lg hover:-translate-y-1"
            key={activeCourse.id}
          >
            <div className="flex shrink-0 aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src={activeCourse.imageUrl}
                alt={activeCourse.title}
              />
            </div>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <p className="text-lg font-bold text-gray-900">
                {activeCourse.title}
              </p>
            </div>
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
              <div className="flex items-center justify-between">
                <Button
                  className="w-full cursor-pointer"
                  variant="default"
                  onClick={() => router.push(activeCourse.slug)}
                >
                  Access Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveCourses;
