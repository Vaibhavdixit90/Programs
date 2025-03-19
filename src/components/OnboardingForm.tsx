"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Users } from "lucide-react";

const OnboardingForm = () => {
  const [selectedTab, setSelectedTab] = useState("personal");

  return (
    <div className="flex flex-col min-h-screen">
      <main className="px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 gap-8">
          <Tabs
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-auto"
          >
            <TabsList className="grid grid-cols-2 mb-3">
              <TabsTrigger
                value="personal"
                className="flex items-center gap-2 cursor-pointer"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Personal Details</span>
              </TabsTrigger>
              <TabsTrigger
                value="family"
                className="flex items-center gap-2 cursor-pointer"
              >
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Family Information</span>
              </TabsTrigger>
            </TabsList>

            {/* Personal Details Tab */}
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle className="mt-5">Personal Details</CardTitle>
                  <CardDescription>
                    Update your personal information here.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Arjun" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Cherukuri" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="education">
                        Educational Qualification
                      </Label>
                      <Input id="education" placeholder="B tech" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" defaultValue="1985-07-07" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="9591998427" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 cursor-pointer">
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Family Information Tab */}
            <TabsContent value="family">
              <Card>
                <CardHeader>
                  <CardTitle className="mt-5">Family Information</CardTitle>
                  <CardDescription>
                    Update your family details here.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fatherName">Father&apos;s Name</Label>
                      <Input
                        id="fatherName"
                        placeholder="Bhavani Sankar Cherukuri"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherEmail">
                        Father&apos;s Email ID
                      </Label>
                      <Input
                        id="fatherEmail"
                        placeholder="bhavani@ftpl.co.in"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherMobile">
                        Father&apos;s Mobile Number
                      </Label>
                      <Input id="fatherMobile" placeholder="9591998427" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherOccupation">
                        Father&apos;s Occupation
                      </Label>
                      <Input id="fatherOccupation" placeholder="Bussiness" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherName">Mother&apos;s Name</Label>
                      <Input id="motherName" placeholder="Bharathi Cherukuri" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherEmail">
                        Mother&apos;s Email ID
                      </Label>
                      <Input
                        id="motherEmail"
                        placeholder="bharathic63@gmail.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherMobile">
                        Mother&apos;s Mobile Number
                      </Label>
                      <Input id="motherMobile" placeholder="9591998418" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherOccupation">
                        Mother&apos;s Occupation
                      </Label>
                      <Input id="motherOccupation" placeholder="Principal" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 cursor-pointer">
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default OnboardingForm;
