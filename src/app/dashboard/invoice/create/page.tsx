import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";

const CreateInvoice = () => {
  return (
    <div className="bg-white mt-5 p-6 border rounded-lg">
      <header>
        <h1 className="text-lg font-besley">
          Invoice - <span className="font-bold">Invoice 001</span>
        </h1>
      </header>
      <form>
        <section className="mt-10 grid grid-cols-2 gap-10">
          <div>
            <h1 className="font-semibold">From</h1>
            <div className="mt-2 space-y-4">
              <Input placeholder="Name" type="text" className="h-12" />
              <Input placeholder="Email" type="email" className="h-12" />
              <Input placeholder="Address" type="text" className="h-12" />
            </div>
          </div>
          <div>
            <h1 className="font-semibold">To</h1>
            <div className="mt-2 space-y-4">
              <Input placeholder="Client name" className="h-12" />
              <Input placeholder="Client email" type="email" className="h-12" />
              <Input
                placeholder="Client address"
                type="text"
                className="h-12"
              />
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Date</h1>
            <Popover>
              <PopoverTrigger></PopoverTrigger>
              <PopoverContent>
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
          </div>
        </section>
      </form>
    </div>
  );
};

export default CreateInvoice;
