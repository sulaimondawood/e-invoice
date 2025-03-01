import { InvoiceFilters } from "@/components/invoice/invoice-filters";
import { TableActions } from "@/components/invoice/table-actions";
import { Button } from "@/components/reuseables/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ROUTES } from "@/constants/route";
import { Plus, Upload } from "lucide-react";
import Link from "next/link";
import React from "react";

const Invoice = () => {
  return (
    <div>
      <header className="my-5 bg-white py-5 px-7 shadow-md rounded-md flex justify-between items-center">
        <h1 className="text-xl font-semibold">Create an invoice</h1>
        <aside className="flex gap-4">
          <Button>
            <Link
              className="flex items-center justify-center gap-2"
              href={ROUTES.createInvoice}
            >
              <Plus size={20} />
              Add invoice
            </Link>
          </Button>
          <Button className="flex items-center gap-2 bg-transparent text-black hover:bg-gray-50 border-black border">
            <Upload size={20} />
            <p>Upload invoice</p>
          </Button>
        </aside>
      </header>
      <InvoiceFilters />

      <section className="mt-10 bg-white border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="py-4">Invoice ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Dawood</TableCell>
              <TableCell>3000</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>01-03-2025</TableCell>
              <TableCell className="text-right">
                <TableActions />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  );
};

export default Invoice;
