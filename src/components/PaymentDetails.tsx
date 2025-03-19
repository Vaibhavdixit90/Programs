import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CheckCircle, XCircle } from "lucide-react";

const PaymentDetails = () => {
  return (
    <div className="overflow-auto">
      <main className="p-6">
        {/* Subscription List */}
        <Card className="mt-5">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="mt-5">
              <CardTitle className="font-bold text-2xl">
                Subscription List
              </CardTitle>
              <CardDescription>List of all your subscriptions</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Course Name</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Next Payment Date</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Canceled Transactions */}
                <TableRow>
                  <TableCell>2293</TableCell>
                  <TableCell>Sukshma Dhrashta - L2 - Monthly EMI</TableCell>
                  <TableCell className="font-medium">₹8,350.00</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-600">
                      <XCircle className="w-4 h-4" /> Not Active
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2042</TableCell>
                  <TableCell>Sukshma Dhrashta - L2 - Monthly EMI</TableCell>
                  <TableCell className="font-medium">₹5,000.00</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-600">
                      <XCircle className="w-4 h-4" /> Not Active
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1729</TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    Sukshma Dhrashta - L2 - Monthly EMI
                  </TableCell>
                  <TableCell className="font-medium">₹1,000.00</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-600">
                      <XCircle className="w-4 h-4" /> Not Active
                    </span>
                  </TableCell>
                </TableRow>

                {/* Active Transactions */}
                <TableRow>
                  <TableCell>2301</TableCell>
                  <TableCell>Sukshma Dhrashta - L2 - Monthly EMI</TableCell>
                  <TableCell className="font-medium">₹10,000.00</TableCell>
                  <TableCell>2025-04-12</TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-600">
                      <CheckCircle className="w-4 h-4" /> Active
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1984</TableCell>
                  <TableCell>Sukshma Dhrashta - L2 - Monthly EMI</TableCell>
                  <TableCell className="font-medium">₹2,500.00</TableCell>
                  <TableCell>2024-12-20</TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-600">
                      <CheckCircle className="w-4 h-4" /> Active
                    </span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Order list  */}
        <Card className="mt-5">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="mt-5">
              <CardTitle className="font-bold text-2xl">Order List</CardTitle>
              <CardDescription>
                Your recent order history is listed below
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Course Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Canceled Transactions */}
                <TableRow>
                  <TableCell>2293</TableCell>
                  <TableCell>Sukshma Dhrashta - L2 - Monthly EMI</TableCell>
                  <TableCell>2025-03-13 10:59:14</TableCell>
                  <TableCell className="font-medium text-red-500">
                    -₹8,350.00
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-600">
                      <XCircle className="w-4 h-4" /> Canceled
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2042</TableCell>
                  <TableCell>Sukshma Dhrashta - L2 - Monthly EMI</TableCell>
                  <TableCell>2024-12-16 13:15:30</TableCell>
                  <TableCell className="font-medium text-red-500">
                    -₹5,000.00
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-600">
                      <XCircle className="w-4 h-4" /> Canceled
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1729</TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    Sukshma Dhrashta - L2 - Monthly EMI
                  </TableCell>
                  <TableCell>2024-09-10 12:14:14</TableCell>
                  <TableCell className="font-medium text-red-500">
                    -₹1,000.00
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-600">
                      <XCircle className="w-4 h-4" /> Canceled
                    </span>
                  </TableCell>
                </TableRow>

                {/* Completed Transactions */}
                <TableRow>
                  <TableCell>2301</TableCell>
                  <TableCell>Sukshma Dhrashta - L2 - Monthly EMI</TableCell>
                  <TableCell>2025-03-12 09:45:00</TableCell>
                  <TableCell className="font-medium text-green-500">
                    +₹10,000.00
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-600">
                      <CheckCircle className="w-4 h-4" /> Completed
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1984</TableCell>
                  <TableCell>Sukshma Dhrashta - L2 - Monthly EMI</TableCell>
                  <TableCell>2024-11-20 18:30:22</TableCell>
                  <TableCell className="font-medium text-green-500">
                    +₹2,500.00
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-600">
                      <CheckCircle className="w-4 h-4" /> Completed
                    </span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PaymentDetails;
