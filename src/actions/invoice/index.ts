"use server";
import { parseWithZod } from "@conform-to/zod";
import { userAuthenticated } from "@/helpers/session";
import { invoiceSchema } from "@/lib/zod/schema";
import { prisma } from "@/lib/db/prisma";

const createInvoiceAction = async (
  previousState: unknown,
  formData: FormData
) => {
  await userAuthenticated();

  const submission = parseWithZod(formData, { schema: invoiceSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.invoice.create({
    data: {
      businessAddress: submission.value.businessAddress,
      businessEmail: submission.value.businessEmail,
      businessName: submission.value.businessName,
      clientAddress: submission.value.clientAddress,
      clientEmail: submission.value.clientEmail,
      clientName: submission.value.clientName,
      currency: submission.value.currency,
      date: submission.value.date,
      description: submission.value.description,
      dueDate: submission.value.dueDate,
      invoiceNo: submission.value.invoiceNo,
      name: submission.value.name,
      quantity: submission.value.quantity,
      amount: submission.value.amount,
      rate: submission.value.rate,
      status: submission.value.status,
      draft: false,
    },
  });
};

export default createInvoiceAction;
