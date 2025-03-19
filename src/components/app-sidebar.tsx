"use client";

import * as React from "react";
import {
  Brain,
  ListChecks,
  BookOpen,
  Video,
  Share2,
  BookCopy,
  Calendar,
  Wallet,
  Headphones,
  CircleUserRound,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    {
      title: "Profile",
      url: "/profile",
      icon: CircleUserRound,
    },
    {
      title: "Programs",
      url: "/programs",
      icon: Brain,
    },
    {
      title: "Active Courses",
      url: "/active-courses",
      icon: BookOpen,
    },
    {
      title: "Wallet",
      url: "/wallet",
      icon: Wallet,
    },
    {
      title: "Payment Details",
      url: "/payment-details",
      icon: ListChecks,
    },
    {
      title: "Blogs",
      url: "/blogs",
      icon: BookCopy,
    },
    {
      title: "Podcasts",
      url: "/podcasts",
      icon: Headphones,
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: Calendar,
    },
    {
      title: "Tutorial Videos",
      url: "/tutorial-videos",
      icon: Video,
    },
    {
      title: "Social Media",
      url: "/social-media",
      icon: Share2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Image
          src="https://programs.guruatmananda.com/static/media/SD_LOGO4.3ec80fd5c3194e387c1b.png"
          alt="logo"
          width={200}
          height={200}
          className="my-3 rounded-[20px] object-cover"
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
