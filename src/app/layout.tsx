"use client";
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Sanmarga Awakening",
//   description: "You are Born to Succeed, because you are Designed to Succeed",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideSidebarRoutes = ["/sign-in", "/sign-up", "/reset-password"];
  const shouldShowSidebar = !hideSidebarRoutes.includes(pathname);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {shouldShowSidebar ? (
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-20 shrink-0 items-center gap-4 bg-gradient-to-r from-[#A900D6] to-[#2F80ED] text-white py-6 px-8 rounded-lg shadow-md m-2">
                <SidebarTrigger className="text-white cursor-pointer" />
                <Separator
                  orientation="vertical"
                  className="h-6 w-[2px] bg-gray-500"
                />
                <div className="flex flex-col">
                  <h1 className=" text-sm sm:text-lg font-semibold leading-tight">
                    You are Born to Succeed, because you are Designed to Succeed
                  </h1>
                  <p className="text-sm italic text-gray-300">
                    - Siddha Guru Atmananda ji
                  </p>
                </div>
              </header>
              {children}
            </SidebarInset>
          </SidebarProvider>
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
