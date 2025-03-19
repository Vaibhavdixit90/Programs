"use client";
import { useCallback, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Cropper from "react-easy-crop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, CreditCard, KeyRound, Users } from "lucide-react";
import getCroppedImg from "@/lib/cropImage";

export default function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState("personal");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setCropModalOpen(true);
    }
  };

  const onCropComplete = useCallback(
    (
      _: unknown,
      croppedAreaPixels: { x: number; y: number; width: number; height: number }
    ) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const handleCropComplete = async () => {
    if (selectedImage && croppedAreaPixels) {
      const croppedImg = await getCroppedImg(selectedImage, croppedAreaPixels);

      if (typeof croppedImg === "string") {
        setCroppedImage(croppedImg);
        setCropModalOpen(false);
      } else {
        console.error("Cropped image is not a valid string");
      }
    }
  };

  return (
    <div className="px-4 py-8 sm:py-12">
      <div className="grid grid-cols-1 gap-8">
        {/* Profile Header */}
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-32 relative">
            <div className="absolute -bottom-12 left-8">
              <label htmlFor="file-upload" className="cursor-pointer">
                <Avatar className="h-24 w-24 border-4 border-white">
                  <AvatarImage
                    src={croppedImage || "/Ram.webp"}
                    alt="Profile"
                  />
                  <AvatarFallback className="text-2xl">AC</AvatarFallback>
                </Avatar>
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <CardContent className="pt-16">
            <h1 className="text-2xl font-bold">Arjun Cherukuri</h1>
          </CardContent>

          {/* Crop Modal */}
          {cropModalOpen && selectedImage && (
            <div className="fixed inset-0 flex justify-center items-center">
              <div className="bg-white p-6 rounded-md shadow-md">
                <h2 className="text-lg font-bold mb-2">Adjust Your Image</h2>
                <div className="relative w-80 h-80 bg-gray-200 rounded-md">
                  <Cropper
                    image={selectedImage}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    objectFit="contain"
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                  />
                </div>
                {/* Buttons */}
                <div className="flex justify-end mt-4 gap-2">
                  <Button
                    onClick={() => setCropModalOpen(false)}
                    variant="secondary"
                    className="cursor-pointer"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleCropComplete}
                    className="cursor-pointer"
                  >
                    Crop & Save
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Card>
        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-4 mb-3">
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
            <TabsTrigger
              value="billing"
              className="flex items-center gap-2 cursor-pointer"
            >
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Billing Address</span>
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="flex items-center gap-2 cursor-pointer"
            >
              <KeyRound className="h-4 w-4" />
              <span className="hidden sm:inline">Security</span>
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
                    <Label htmlFor="education">Educational Qualification</Label>
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
                    <Label htmlFor="fatherEmail">Father&apos;s Email ID</Label>
                    <Input id="fatherEmail" placeholder="bhavani@ftpl.co.in" />
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
                    <Label htmlFor="motherEmail">Mother&apos;s Email ID</Label>
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

          {/* Billing Address Tab */}
          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle className="mt-5">Billing Address</CardTitle>
                <CardDescription>
                  Update your billing information here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="billingFirstName">First Name</Label>
                    <Input id="billingFirstName" placeholder="First Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billingLastName">Last Name</Label>
                    <Input id="billingLastName" placeholder="Last Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billingAddress">Address</Label>
                    <Input id="billingAddress" placeholder="Street Address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billingPhone">Phone Number</Label>
                    <Input id="billingPhone" placeholder="Phone Number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billingEmail">Email Address</Label>
                    <Input
                      id="billingEmail"
                      type="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="govtId">Government ID</Label>
                    <Input id="govtId" placeholder="Government ID" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="Country" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="State" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="City" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input id="pincode" placeholder="Pincode" />
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

          {/* Security Tab */}
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle className="mt-5">Change Password</CardTitle>
                <CardDescription>Update your password here.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">
                      Confirm New Password
                    </Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium mb-2">Password Requirements</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>One special character</li>
                    <li>Minimum 6 characters</li>
                    <li>One number (2 are recommended)</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 cursor-pointer">
                  Update Password
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
