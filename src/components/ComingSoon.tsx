import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <Card className="w-full max-w-lg shadow-2xl p-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl sm:text-5xl font-bold">
            Coming Soon
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-lg sm:text-xl text-gray-600">
            We are launching soon! Stay tuned.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
