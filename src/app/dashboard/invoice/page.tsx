import { InvoiceFilters } from "@/components/invoice/invoice-filters";
import { Button } from "@/components/reuseables/button";
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

      <section></section>
    </div>
  );
};

export default Invoice;
