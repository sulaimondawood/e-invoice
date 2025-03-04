import { z } from "zod";

export const invoiceSchema = z.object({
  name: z.string().min(1, "Invoice name is required"),
  invoiceNo: z.number().min(1, "Invoice number is required"),
  businessName: z.string().min(2, "Business name is required"),
  businessEmail: z.string().email("Invalid email format"),
  businessAddress: z.string().min(2, "Business address is required"),
  clientName: z.string().min(2, "Client name is required"),
  clientEmail: z.string().email("Invalid email format"),
  clientAddress: z.string().min(2, "Client address is required"),
  date: z.string().date("Invalid email format"),
  dueDate: z.string().min(1, "Due date is required"),
  currency: z.enum(["USD", "EUR", "CAD", "NGN"]),
  status: z.enum(["PAID", "NOT_PAID"]).default("NOT_PAID"),
  description: z.string().min(2, "Description is required"),
  quantity: z.number().min(1, "Quantity is required"),
  amount: z.number().min(1, "Amount is required - Fill in quantity and rate"),
  rate: z.number().min(1, "Quantity is required"),
});
