"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export const InvoiceFilters = () => {
  return (
    <div className="w-fit flex items-center gap-3">
      <Select>
        <SelectTrigger className="bg-white py-5 px-5 ring-0 focus:ring-0 text-black data-[placeholder]:text-black">
          <SelectValue placeholder="Successful" />
        </SelectTrigger>
        <SelectContent className="text-black">
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="active">Active</SelectItem>
        </SelectContent>
      </Select>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="border py-2 px-5 rounded-lg bg-white outline-none ring-0 focus:ring-0">
            Date
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Today</DropdownMenuItem>
            <DropdownMenuItem>Lastweek</DropdownMenuItem>
            <DropdownMenuItem>One month</DropdownMenuItem>
            <DropdownMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none ring-0 focus:ring-0">
                  Custom Date
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <Calendar />
                </DropdownMenuContent>
              </DropdownMenu>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <form action="" className="flex items-center gap-3 ">
        <Input
          placeholder="Enter invoice Id"
          className="w-[300px] bg-white py-5"
        />
        <Button type="submit" className="py-5">
          <Plus size={20} color="#ffffff" />
        </Button>
      </form>
    </div>
  );
};
