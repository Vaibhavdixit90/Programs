"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Wallet, Shield, MapPin, User, Check } from "lucide-react";
import Image from "next/image";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("online");

  return (
    <div className="px-4 py-8 sm:py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 md:mb-10">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Checkout
          </h1>
        </div>
        <Badge variant="outline" className="bg-blue-50 border-black px-3 py-1">
          <Shield className="h-4 w-4 mr-1" />
          Secure Checkout
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Billing Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-sm border-gray-200 overflow-hidden">
            <CardHeader className="bg-white px-6 py-5 border-b border-gray-100">
              <div className="flex items-center">
                <User className="h-5 w-5 text-black mr-2" />
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Personal Information
                  </CardTitle>
                  <CardDescription className="text-gray-500 mt-1">
                    Please enter your details
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      required
                      className="focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="flex items-center text-gray-700"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="flex items-center text-gray-700"
                    >
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      className="focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-gray-200 overflow-hidden">
            <CardHeader className="bg-white px-6 py-5 border-b border-gray-100">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-black mr-2" />
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Billing Address
                  </CardTitle>
                  <CardDescription className="text-gray-500 mt-1">
                    Please enter your billing address
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="address"
                    className="flex items-center text-gray-700"
                  >
                    Address *
                  </Label>
                  <Input
                    id="address"
                    placeholder="123 Street, City"
                    required
                    className="focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-gray-700">
                      Country *
                    </Label>
                    <Input
                      id="country"
                      placeholder="Enter country"
                      required
                      className="focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-gray-700">
                      State/Province *
                    </Label>
                    <Input
                      id="state"
                      placeholder="Enter state/province"
                      required
                      className="focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-gray-700">
                      City *
                    </Label>
                    <Input
                      id="city"
                      placeholder="Mumbai"
                      required
                      className="focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipcode" className="text-gray-700">
                      Postal/ZIP Code *
                    </Label>
                    <Input
                      id="zipcode"
                      placeholder="400001"
                      required
                      className="focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card className="shadow-sm border-gray-200 overflow-hidden">
            <CardHeader className="bg-white px-6 py-5 border-b border-gray-100">
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-black" />
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Payment Method
                  </CardTitle>
                  <CardDescription className="text-gray-500 mt-1">
                    Select your preferred payment option
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="space-y-4"
              >
                <div
                  className={`flex items-center space-x-3 border rounded-lg p-4 transition-all ${
                    paymentMethod === "online"
                      ? "border-black bg-gray-100 shadow-sm"
                      : "border-gray-200 hover:border-black"
                  }`}
                >
                  <RadioGroupItem
                    value="online"
                    id="online"
                    className="text-black"
                  />
                  <Label
                    htmlFor="online"
                    className="flex items-center cursor-pointer flex-1"
                  >
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-black" />
                      <div>
                        <p className="font-medium text-gray-800">
                          Online Payment
                        </p>
                        <p className="text-sm text-gray-500">
                          Pay with Credit/Debit card
                        </p>
                      </div>
                    </div>
                    {paymentMethod === "online" && (
                      <Check className="h-5 w-5 text-black ml-auto" />
                    )}
                  </Label>
                </div>
                <div
                  className={`flex items-center space-x-3 border rounded-lg p-4 transition-all ${
                    paymentMethod === "wallet"
                      ? "border-black bg-gray-100 shadow-sm"
                      : "border-gray-200 hover:border-black"
                  }`}
                >
                  <RadioGroupItem
                    value="wallet"
                    id="wallet"
                    className="text-black"
                  />
                  <Label
                    htmlFor="wallet"
                    className="flex items-center cursor-pointer flex-1"
                  >
                    <div className="flex items-center">
                      <Wallet className="h-5 w-5 mr-2 text-black" />
                      <div>
                        <p className="font-medium text-gray-800">
                          Wallet Payment
                        </p>
                        <p className="text-sm text-gray-500">
                          Pay using your e-wallet
                        </p>
                      </div>
                    </div>
                    {paymentMethod === "wallet" && (
                      <Check className="h-5 w-5 text-black ml-auto" />
                    )}
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="!gap-4 shadow-sm border-gray-200 sticky top-6 overflow-hidden">
            <CardHeader className="bg-gray-50 px-6 pt-5 border-b border-gray-200">
              <CardTitle className="text-xl font-semibold text-gray-800">
                Order Summary
              </CardTitle>
            </CardHeader>

            {/* Full-width image */}
            <div className="w-full">
              <Image
                src="/Social.jpg"
                alt="Order Summary Banner"
                width={800}
                height={200}
                className="w-full h-auto p-2 rounded-[15px]"
              />
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between text-gray-700">
                  <span>Plan</span>
                  <span>Monthly Donation Plan</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Donation</span>
                  <span>₹ 6,300.00</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-black">₹ 6,300.00</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <div className="space-y-4 w-full">
                <Button className="w-full font-medium py-6 rounded-lg transition-all duration-200 h-auto">
                  Complete Payment
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
