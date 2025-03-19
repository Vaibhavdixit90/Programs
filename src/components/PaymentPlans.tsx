"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Calendar, Clock, Award, CreditCard } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PaymentPlans() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const router = useRouter();
  const pricingPlans = [
    {
      id: 1,
      name: "Monthly EMI",
      price: "₹ 11,700.00",
      icon: <CreditCard className="h-6 w-6" />,
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
      benefits: ["Access for 30 days", "No long-term commitment"],
    },
    {
      id: 2,
      name: "Quarterly Payment",
      price: "₹ 35,000.00",
      icon: <Clock className="h-6 w-6" />,
      color: "bg-gradient-to-br from-cyan-500 to-blue-600",
      benefits: ["Access for 90 days", "Save ₹ 500 compared to monthly"],
    },
    {
      id: 3,
      name: "Half Yearly Payment",
      price: "₹ 70,000.00",
      icon: <Calendar className="h-6 w-6" />,
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      benefits: ["Access for 180 days", "Save ₹ 2,000 compared to quarterly"],
    },
    {
      id: 4,
      name: "Yearly Payment",
      price: "₹ 1,40,000.00",
      icon: <Award className="h-6 w-6" />,
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
      benefits: ["Access for 365 days", "Save ₹ 5,000 compared to half-yearly"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero section with curved design */}
      <div className="relative overflow-hidden">
        <div className="bg-black h-64 md:h-80">
          <Image
            src="/SignUp.jpg"
            alt="Pricing"
            width={1200}
            height={400}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
              Select Your Membership
            </h1>
          </div>
        </div>
        {/* Curved edge */}
        <div className="h-16 bg-gray-50 relative -mt-8 rounded-t-3xl"></div>
      </div>

      {/* Content section */}
      <div className="px-4 py-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-5">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`h-full flex flex-col overflow-hidden border-0 shadow-lg transform transition-all duration-300 hover:scale-105 ${
                selectedPlan === plan.id
                  ? "ring-2 ring-offset-2 ring-gray-700"
                  : ""
              }`}
            >
              <CardHeader className={`${plan.color} text-white pb-6 px-4`}>
                <div className="flex items-center justify-between">
                  <div className="bg-white/20 p-2 rounded-full mt-2">
                    {plan.icon}
                  </div>
                  {selectedPlan === plan.id && (
                    <div className="bg-white text-blue-600 rounded-full p-1">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-xl mt-3">{plan.name}</h3>
                <p className="text-3xl font-extrabold mt-2">{plan.price}</p>
              </CardHeader>

              <CardContent className="flex-grow pb-6">
                <ul className="space-y-3">
                  {plan.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="mr-2 text-green-500">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-0 pb-6">
                <Button
                  className={`w-full cursor-pointer ${
                    selectedPlan === plan.id
                      ? `${plan.color.replace(
                          "bg-gradient-to-br",
                          ""
                        )} text-white`
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {selectedPlan === plan.id ? "Selected" : "Select Plan"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Proceed Button - Now Bigger */}
        <div className="mt-12 text-center">
          <Button
            disabled={!selectedPlan}
            className={`${
              selectedPlan ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            onClick={() => {
              if (selectedPlan) {
                router.push("/checkout");
              }
            }}
          >
            {selectedPlan ? "Proceed to Payment" : "Select a Plan to Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
}
