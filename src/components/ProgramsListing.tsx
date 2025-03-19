import React from "react";
import Link from "next/link";

const programs = [
  {
    id: 1,
    title: "Tryst with Sanmarga",
    description:
      "Tryst with Sanmarga is an Intensive Guidance programme which is designed in a way that your daily evolution is observed",
    category: "Meditation",
    imageUrl: "/Program.png",
    slug: "/programs/tryst-with-sanmarga",
  },
  {
    id: 2,
    title: "Tryst with Sanmarga",
    description:
      "Tryst with Sanmarga is an Intensive Guidance programme which is designed in a way that your daily evolution is observed",
    category: "Meditation",
    imageUrl: "/Program.png",
    slug: "/programs/tryst-with-sanmarga",
  },
  {
    id: 3,
    title: "Tryst with Sanmarga",
    description:
      "Tryst with Sanmarga is an Intensive Guidance programme which is designed in a way that your daily evolution is observed",
    category: "Meditation",
    imageUrl: "/Program.png",
    slug: "/programs/tryst-with-sanmarga",
  },
  {
    id: 4,
    title: "Tryst with Sanmarga",
    description:
      "Tryst with Sanmarga is an Intensive Guidance programme which is designed in a way that your daily evolution is observed",
    category: "Meditation",
    imageUrl: "/Program.png",
    slug: "/programs/tryst-with-sanmarga",
  },
  {
    id: 5,
    title: "Tryst with Sanmarga",
    description:
      "Tryst with Sanmarga is an Intensive Guidance programme which is designed in a way that your daily evolution is observed",
    category: "Meditation",
    imageUrl: "/Program.png",
    slug: "/programs/tryst-with-sanmarga",
  },
  {
    id: 6,
    title: "Tryst with Sanmarga",
    description:
      "Tryst with Sanmarga is an Intensive Guidance programme which is designed in a way that your daily evolution is observed",
    category: "Meditation",
    imageUrl: "/Program.png",
    slug: "/programs/tryst-with-sanmarga",
  },
];

const ProgramsListing = () => {
  return (
    <div className="px-4 py-8 sm:py-12">
      <div className="grid grid-cols-1 gap-6 mt-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {programs.map((program) => (
          <Link key={program.id} href={program.slug} className="group">
            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow rounded-xl hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div className="flex shrink-0 aspect-w-4 aspect-h-3">
                <img
                  className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src={program.imageUrl}
                  alt={program.title}
                />
              </div>
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-bold text-gray-900">
                  {program.title}
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  {program.description}
                </p>
              </div>
              <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-gray-900">
                      {program.category}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProgramsListing;
