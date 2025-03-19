"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, User, Moon, Flower } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type EventType = "mindfulness" | "spiritual" | "breathwork";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  instructor: string;
  location: string;
  spots: number;
  image: string;
  type: EventType; // Use the defined type
}

const events: { upcoming: Event[]; past: Event[] } = {
  upcoming: [
    {
      id: 1,
      title: "Guided Meditation",
      description: "A peaceful journey through guided visualization.",
      date: "2025-03-20",
      time: "10:00 AM",
      duration: "60 min",
      instructor: "Guru Atmananda",
      location: "Serenity Studio",
      spots: 12,
      image: "/Program.png",
      type: "mindfulness", // ✅ Correct type
    },
    {
      id: 2,
      title: "Mindfulness Session",
      description: "Learn mindfulness techniques for daily life.",
      date: "2025-03-25",
      time: "3:00 PM",
      duration: "45 min",
      instructor: "Guru Atmananda",
      location: "Zen Garden",
      spots: 8,
      image: "/Program.png",
      type: "mindfulness", // ✅ Correct type
    },
  ],
  past: [
    {
      id: 3,
      title: "Full Moon Meditation",
      description: "Harness the energy of the full moon.",
      date: "2025-02-15",
      time: "8:00 PM",
      duration: "90 min",
      instructor: "Guru Atmananda",
      location: "Moonlight Pavilion",
      spots: 0,
      image: "/Program.png",
      type: "spiritual", // ✅ Correct type
    },
    {
      id: 4,
      title: "Breathwork Practice",
      description: "Master your breath with ancient techniques.",
      date: "2025-02-05",
      time: "6:30 AM",
      duration: "30 min",
      instructor: "Guru Atmananda",
      location: "Morning Dew Center",
      spots: 0,
      image: "/Program.png",
      type: "breathwork", // ✅ Correct type
    },
  ],
};

export default function CalendarPage() {
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const activeEvents = showPastEvents ? events.past : events.upcoming;

  const getEventIcon = (type: EventType) => {
    switch (type) {
      case "spiritual":
        return <Moon className="w-5 h-5" />;
      case "breathwork":
        return <Clock className="w-5 h-5" />;
      case "mindfulness":
      default:
        return <Flower className="w-5 h-5" />;
    }
  };

  return (
    <div className="px-4 py-8 sm:py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Journey to Inner Peace
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Discover our meditation events and reserve your spot on the path to
          mindfulness
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-full shadow-lg bg-white p-1">
          <Button
            variant={!showPastEvents ? "default" : "ghost"}
            className="rounded-full px-6 py-2 cursor-pointer"
            onClick={() => setShowPastEvents(false)}
          >
            Upcoming Events
          </Button>
          <Button
            variant={showPastEvents ? "default" : "ghost"}
            className="rounded-full px-6 py-2 cursor-pointer"
            onClick={() => setShowPastEvents(true)}
          >
            Past Events
          </Button>
        </div>
      </div>

      {/* Events Display */}
      <div className="grid gap-4 md:grid-cols-2">
        {activeEvents.length > 0 ? (
          activeEvents.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden border-none rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white flex flex-col h-full"
            >
              <div className="relative w-full h-auto">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-2">
                      {getEventIcon(event.type)}
                      <span className="ml-2">{event.duration}</span>
                    </span>
                    <h2 className="text-2xl font-bold text-white">
                      {event.title}
                    </h2>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 mb-4 flex-grow">
                  {event.description}
                </p>

                <div className="space-y-3 mt-2">
                  <div className="flex items-center text-gray-700">
                    <CalendarDays className="w-4 h-4 mr-3 text-indigo-600" />
                    <span className="font-medium">{event.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-3 text-indigo-600" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 mr-3 text-indigo-600" />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <User className="w-4 h-4 mr-3 text-indigo-600" />
                    <span>With {event.instructor}</span>
                  </div>
                </div>

                {!showPastEvents && (
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
                      {event.spots} spots available
                    </span>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button
                          className="rounded-full px-6 cursor-pointer"
                          onClick={() => {
                            setSelectedEvent(event);
                            setIsDialogOpen(true);
                          }}
                        >
                          Reserve Spot
                        </Button>
                      </DialogTrigger>

                      {selectedEvent && (
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              Reserve a Spot for {selectedEvent.title}
                            </DialogTitle>
                            <DialogDescription>
                              Enter your details to confirm your reservation.
                            </DialogDescription>
                          </DialogHeader>

                          <form className="space-y-4">
                            <div>
                              <Label htmlFor="name" className="mb-2">
                                Full Name
                              </Label>
                              <Input
                                id="name"
                                placeholder="Enter your name"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="email" className="mb-2">
                                Email
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                              />
                            </div>
                            <div className="flex justify-end">
                              <Button type="submit" className="cursor-pointer">
                                Confirm Reservation
                              </Button>
                            </div>
                          </form>
                        </DialogContent>
                      )}
                    </Dialog>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-2 py-24 text-center">
            <div className="bg-white/90 backdrop-blur p-12 rounded-3xl shadow-lg max-w-xl mx-auto">
              <Flower className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">
                No events scheduled
              </h3>
              <p>
                Our meditation calendar is being refreshed with new
                opportunities for your spiritual journey. Check back soon.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
