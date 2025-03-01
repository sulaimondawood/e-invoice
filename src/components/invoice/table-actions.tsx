import React from "react";
import { Ellipsis } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

export const TableActions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis size={20} className="text-gray-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href={""}>Delete</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={""}>Edit</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={""}>Send Reminder</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Download</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
