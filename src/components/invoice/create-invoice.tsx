"use client";

import { Button } from "@/components/ui/button";
import { Button as FormButton } from "@/components/reuseables/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { formatDate } from "@/utils";
import { ArrowLeft, Calendar1Icon } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateInvoiceForm = () => {
  const [date, setDate] = useState<Date>();
  const router = useRouter();

  return (
    <div className="bg-white mt-5 p-6 border rounded-lg">
      <header>
        <Button onClick={() => router.back()} variant={"outline"}>
          <ArrowLeft />
          <p>Back</p>
        </Button>
        <div className="mt-4 text-lg font-besley flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <h1>Invoice</h1>
            <Input
              type="text"
              className="shadow-none rounded-none border-x-0 border-t-0 border-b border-b-black ring-0 focus:ring-0 focus-visible:ring-0 w-[150px]"
              placeholder="Invoice name"
            />
          </div>
          <Button variant={"outline"} className="h-12">
            Save as Draft
          </Button>
        </div>
      </header>
      <form className="mt-5">
        <div className="w-[30%] space-y-2">
          <label htmlFor="invoiceN">Invoice No</label>
          <Input placeholder="INV001" type="text" className="h-12" />
        </div>
        <section className="mt-10 grid grid-cols-2 gap-10">
          <aside>
            <h1 className="font-semibold">From Business</h1>
            <div className="mt-2 space-y-4">
              <Input placeholder="Name" type="text" className="h-12" />
              <Input placeholder="Email" type="email" className="h-12" />
              <Input placeholder="Address" type="text" className="h-12" />
            </div>
          </aside>
          <aside>
            <h1 className="font-semibold">To Client</h1>
            <div className="mt-2 space-y-4">
              <Input placeholder="Client name" className="h-12" />
              <Input placeholder="Client email" type="email" className="h-12" />
              <Input
                placeholder="Client address"
                type="text"
                className="h-12"
              />
            </div>
          </aside>
          <aside className="space-y-4">
            <div>
              <h1 className="font-semibold mb-2">Date</h1>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex justify-start items-center gap-3 text-gray-500 min-w-[200px] h-12"
                  >
                    <Calendar1Icon />
                    {date ? formatDate(date) : "Select a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="single"
                    onSelect={(date) => setDate(date || new Date())}
                    selected={date}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <h1 className="font-semibold mb-2">Due date</h1>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select due date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Due on Receipt</SelectItem>
                  <SelectItem value="15">Net 15</SelectItem>
                  <SelectItem value="30">Net 30</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </aside>
          <aside className="space-y-4">
            <div>
              <h1 className="font-semibold mb-2">Select currency</h1>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue
                    placeholder="Select your currency"
                    defaultValue="USD"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">
                    United States Dollar - USD
                  </SelectItem>
                  <SelectItem value="EUR">Euro - EUR</SelectItem>
                  <SelectItem value="CAD">Canadian Dollar - CAD</SelectItem>
                  <SelectItem value="NGN">Nigerian Naira - NGN</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label htmlFor="quantity">Quantity</label>
                <Input
                  id="quantity"
                  placeholder="0"
                  type="number"
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="rate">Rate</label>
                <Input
                  id="rate"
                  placeholder="0"
                  type="number"
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <label>Amount</label>
                <Input
                  placeholder="0"
                  type="number"
                  className="h-12"
                  disabled
                />
              </div>
            </div>
          </aside>
          <aside className="space-y-2">
            <label htmlFor="desc" className="font-semibold mb-2 ">
              Description
            </label>
            <Textarea placeholder="Enter description" className="h-[150px]" />
          </aside>
          <aside className="px-10 space-y-5">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold">Subtotal</h1>
              <p>$5.00</p>
            </div>
            <div className="border-t pt-4 flex items-center justify-between">
              <h1 className="font-semibold">Total</h1>
              <p>$5.00</p>
            </div>
            <div className="flex justify-end items-start gap-5">
              <Button variant={"outline"} className="h-12">
                Save as Draft
              </Button>
              <FormButton>Send Invoice</FormButton>
            </div>
          </aside>
        </section>
      </form>
    </div>
  );
};

export default CreateInvoiceForm;
