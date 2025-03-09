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
import { formatCurrency, formatDate } from "@/utils";
import { ArrowLeft, Calendar1Icon } from "lucide-react";
import React, { ChangeEvent, Fragment, useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import createInvoiceAction from "@/actions/invoice";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { invoiceSchema } from "@/lib/zod/schema";

const CreateInvoiceForm = () => {
  const [date, setDate] = useState<Date>();
  const router = useRouter();
  const [data, action] = useActionState(createInvoiceAction, undefined);
  const [quantityRate, setQuantityRate] = useState<{
    quantity: string;
    rate: string;
  }>({ quantity: "", rate: "" });
  const [currency, setCurrency] = useState("NGN");

  const handleQuantityRateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuantityRate({
      ...quantityRate,
      [name]: value,
    });
  };
  const calculateTotal = Math.ceil(
    Number(quantityRate.quantity) * Number(quantityRate.rate)
  );

  const [form, fields] = useForm({
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    lastResult: data,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: invoiceSchema });
    },
  });

  return (
    <div className="bg-white mt-5 p-6 border rounded-lg">
      <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
        <header className="mb-5">
          <Button
            type="button"
            onClick={() => router.back()}
            variant={"outline"}
          >
            <ArrowLeft />
            <p>Back</p>
          </Button>
          <div className="mt-4 text-lg font-besley flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <h1>Invoice</h1>
              <div className="flex flex-col">
                <Input
                  type="text"
                  className="shadow-none rounded-none border-x-0 border-t-0 border-b border-b-black ring-0 focus:ring-0 focus-visible:ring-0 w-[150px]"
                  placeholder="Invoice name"
                  name={fields.name.name}
                  key={fields.name.key}
                  defaultValue={fields.name.initialValue}
                />
              </div>
              <p className="mt-3 text-red-500 text-xs">{fields.name.errors}</p>
            </div>
            <Button variant={"outline"} className="h-12">
              Save as Draft
            </Button>
          </div>
        </header>
        <Fragment>
          <input
            type="hidden"
            name={fields.date.name}
            value={date ? date.toISOString() : ""}
          />

          <div className="w-[30%] space-y-2">
            <label htmlFor="invoiceN">Invoice No</label>
            <Input
              placeholder="INV001"
              type="text"
              className="h-12"
              name={fields.invoiceNo.name}
              key={fields.invoiceNo.key}
              defaultValue={fields.invoiceNo.initialValue}
            />
            <p className="text-red-500 text-xs">{fields.invoiceNo.errors}</p>
          </div>
          <section className="mt-10 grid grid-cols-2 gap-10">
            <aside>
              <h1 className="font-semibold">From Business</h1>
              <div className="mt-2 space-y-4">
                <Input
                  placeholder="Name"
                  type="text"
                  className="h-12"
                  name={fields.businessName.name}
                  key={fields.businessName.key}
                  defaultValue={fields.businessName.initialValue}
                />
                <p className="text-red-500 text-xs">
                  {fields.businessName.errors}
                </p>

                <Input
                  placeholder="Email"
                  type="email"
                  className="h-12"
                  name={fields.businessEmail.name}
                  key={fields.businessEmail.key}
                  defaultValue={fields.businessEmail.initialValue}
                />
                <p className="text-red-500 text-xs">
                  {fields.businessEmail.errors}
                </p>

                <Input
                  placeholder="Address"
                  type="text"
                  className="h-12"
                  name={fields.businessAddress.name}
                  key={fields.businessAddress.key}
                  defaultValue={fields.businessAddress.initialValue}
                />
                <p className="text-red-500 text-xs">
                  {fields.businessAddress.errors}
                </p>
              </div>
            </aside>
            <aside>
              <h1 className="font-semibold">To Client</h1>
              <div className="mt-2 space-y-4">
                <Input
                  placeholder="Client name"
                  className="h-12"
                  name={fields.clientName.name}
                  key={fields.clientName.key}
                  defaultValue={fields.clientName.initialValue}
                />
                <p className="text-red-500 text-xs">
                  {fields.clientName.errors}
                </p>

                <Input
                  placeholder="Client email"
                  type="email"
                  className="h-12"
                  name={fields.clientEmail.name}
                  key={fields.clientEmail.key}
                  defaultValue={fields.clientEmail.initialValue}
                />
                <p className="text-red-500 text-xs">
                  {fields.clientEmail.errors}
                </p>

                <Input
                  placeholder="Client address"
                  type="text"
                  className="h-12"
                  name={fields.clientAddress.name}
                  key={fields.clientAddress.key}
                  defaultValue={fields.clientAddress.initialValue}
                />
                <p className="text-red-500 text-xs">
                  {fields.clientAddress.errors}
                </p>
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
                <p className="mt-2 text-red-500 text-xs">
                  {fields.date.errors}
                </p>
              </div>
              <div>
                <h1 className="font-semibold mb-2">Due date</h1>
                <Select
                  name={fields.dueDate.name}
                  key={fields.dueDate.key}
                  defaultValue={fields.dueDate.initialValue}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select due date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Due on Receipt</SelectItem>
                    <SelectItem value="15">Net 15</SelectItem>
                    <SelectItem value="30">Net 30</SelectItem>
                  </SelectContent>
                </Select>
                <p className="mt-2 text-red-500 text-xs">
                  {fields.dueDate.errors}
                </p>
              </div>
            </aside>
            <aside className="space-y-4">
              <div>
                <h1 className="font-semibold mb-2">Select currency</h1>
                <Select
                  name={fields.currency.name}
                  key={fields.currency.key}
                  onValueChange={(value) => setCurrency(value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue
                      placeholder="Select your currency"
                      defaultValue="NGN"
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
                <p className="text-red-500 text-xs">{fields.currency.errors}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label htmlFor="quantity">Quantity</label>
                  <Input
                    id="quantity"
                    placeholder="0"
                    type="number"
                    className="h-12"
                    name={fields.quantity.name}
                    key={fields.quantity.key}
                    value={quantityRate.quantity}
                    onChange={(e) => handleQuantityRateChange(e)}
                  />
                  <p className="text-red-500 text-xs">
                    {fields.quantity.errors}
                  </p>
                </div>
                <div className="space-y-2">
                  <label htmlFor="rate">Rate</label>
                  <Input
                    id="rate"
                    placeholder="0"
                    type="number"
                    className="h-12"
                    name={fields.rate.name}
                    key={fields.rate.key}
                    value={quantityRate.rate}
                    onChange={(e) => handleQuantityRateChange(e)}
                  />
                  <p className="text-red-500 text-xs">{fields.rate.errors}</p>
                </div>
                <div className="space-y-2">
                  <label>Amount</label>
                  <Input
                    placeholder="0"
                    type="text"
                    className="h-12"
                    disabled
                    name={fields.amount.name}
                    key={fields.amount.key}
                    defaultValue={formatCurrency({
                      value: calculateTotal,
                      currency: currency as "USD" | "EUR" | "NGN" | "CAD",
                    })}
                  />
                  <p className="text-red-500 text-xs">{fields.amount.errors}</p>
                </div>
              </div>
            </aside>
            <aside className="space-y-2">
              <label htmlFor="desc" className="font-semibold mb-2 ">
                Description
              </label>
              <Textarea
                placeholder="Enter description"
                className="h-[150px]"
                name={fields.description.name}
                key={fields.description.key}
                defaultValue={fields.description.initialValue}
              />
              <p className="text-red-500 text-xs">
                {fields.description.errors}
              </p>
            </aside>
            <aside className="px-10 space-y-5">
              {/* <div className="flex items-center justify-between">
              <h1 className="font-semibold">Subtotal</h1>
              <p>$5.00</p>
            </div> */}
              <div className="border-t pt-4 flex items-center justify-between">
                <h1 className="font-semibold">Total</h1>
                <p>
                  {formatCurrency({
                    value: calculateTotal,
                    currency: currency as "USD" | "EUR" | "NGN" | "CAD",
                  })}
                </p>
              </div>
              <div className="flex justify-end items-start gap-5">
                <Button variant={"outline"} className="h-12">
                  Save as Draft
                </Button>
                <FormButton>Send Invoice</FormButton>
              </div>
            </aside>
          </section>
        </Fragment>
      </form>
    </div>
  );
};

export default CreateInvoiceForm;
