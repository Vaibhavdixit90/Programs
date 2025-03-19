"use client";
import { useState } from "react";
import { BadgeDollarSign, PlusCircle, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Wallet() {
  const [showTransfer, setShowTransfer] = useState(false);
  const [showRecharge, setShowRecharge] = useState(false);

  return (
    <div className="overflow-auto">
      <main className="p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Balance Card */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-primary/10 pb-2">
              <CardTitle className="flex items-center gap-2 text-lg mt-5">
                <BadgeDollarSign className="h-5 w-5" />
                Balance
              </CardTitle>
              <CardDescription>Available funds in your wallet</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold">₹8,507.00</p>
                  <p className="text-xs font-bold mt-2">Updated: Just Now</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transfer Card */}
          <Card className="overflow-hidden flex flex-col justify-between">
            <div>
              <CardHeader className="bg-indigo-500/10 pb-2">
                <CardTitle className="flex items-center gap-2 text-lg mt-5">
                  <Send className="h-5 w-5" />
                  Transfer
                </CardTitle>
                <CardDescription>Send money to other accounts</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 flex-grow">
                <p className="text-sm text-muted-foreground">
                  Transfer funds securely.
                </p>
              </CardContent>
            </div>
            <CardFooter>
              <Button
                className="w-full bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
                onClick={() => setShowTransfer(true)}
              >
                <Send className="mr-2 h-4 w-4" /> Transfer Now
              </Button>
            </CardFooter>
          </Card>

          {/* Recharge Card */}
          <Card className="overflow-hidden flex flex-col justify-between">
            <div>
              <CardHeader className="bg-emerald-500/10 pb-2">
                <CardTitle className="flex items-center gap-2 text-lg mt-5">
                  <PlusCircle className="h-5 w-5" />
                  Recharge
                </CardTitle>
                <CardDescription>Add money to your wallet</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 flex-grow">
                <p className="text-sm text-muted-foreground">
                  Securely recharge your wallet.
                </p>
              </CardContent>
            </div>
            <CardFooter>
              <Button
                className="w-full bg-emerald-600 hover:bg-emerald-700 cursor-pointer"
                onClick={() => setShowRecharge(true)}
              >
                <PlusCircle className="mr-2 h-4 w-4" /> Recharge Now
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Transfer Modal */}
        <Dialog open={showTransfer} onOpenChange={setShowTransfer}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Transfer Money</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Label>Amount</Label>
              <Input type="number" placeholder="Enter amount" />
              <Label>Receiver&apos;s Email</Label>
              <Input type="email" placeholder="Enter email" />
              <Label>Note</Label>
              <Input type="text" placeholder="Optional" />
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                Transfer
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Recharge Modal */}
        <Dialog open={showRecharge} onOpenChange={setShowRecharge}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Recharge Wallet</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Label>Amount</Label>
              <Input type="number" placeholder="Enter amount" />
              <Label>Note</Label>
              <Input type="text" placeholder="Optional" />
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 cursor-pointer">
                Recharge
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        {/* Recent Transactions */}
        <Card className="mt-5">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="mt-5">
              <CardTitle className="font-bold text-2xl">
                Recent Transactions
              </CardTitle>
              <CardDescription>Your recent wallet activity</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Note</TableHead>
                  <TableHead className="text-right">Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Debit Transactions */}
                <TableRow>
                  <TableCell className="font-medium text-red-500">
                    -₹8,350.00
                  </TableCell>
                  <TableCell>2025-03-13 10:59:14</TableCell>
                  <TableCell>2293</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-red-50">
                      Debit
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-red-500">
                    -₹5,000.00
                  </TableCell>
                  <TableCell>2024-12-16 13:15:30</TableCell>
                  <TableCell>2042</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-red-50">
                      Debit
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-red-500">
                    -₹1,000.00
                  </TableCell>
                  <TableCell>2024-09-10 12:14:14</TableCell>
                  <TableCell>1729</TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    Transferred to bhushan@tattvabodhaevents.com
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-red-50">
                      Debit
                    </Badge>
                  </TableCell>
                </TableRow>

                {/* Credit Transactions */}
                <TableRow>
                  <TableCell className="font-medium text-green-500">
                    +₹10,000.00
                  </TableCell>
                  <TableCell>2025-03-12 09:45:00</TableCell>
                  <TableCell>2301</TableCell>
                  <TableCell>Salary Credited</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-green-50">
                      Credit
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-green-500">
                    +₹2,500.00
                  </TableCell>
                  <TableCell>2024-11-20 18:30:22</TableCell>
                  <TableCell>1984</TableCell>
                  <TableCell>Refund Received</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-green-50">
                      Credit
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
