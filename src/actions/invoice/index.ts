"use server";
import { parseWithZod } from "@conform-to/zod";
import { userAuthenticated } from "@/helpers/session";
import { invoiceSchema } from "@/lib/zod/schema";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import { BASE_ROUTES } from "@/constants/route";

const createInvoiceAction = async (
  previousState: unknown,
  formData: FormData
) => {
  const userSession = await userAuthenticated();

  const submission = parseWithZod(formData, { schema: invoiceSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  console.log(submission.value.date);

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
      amount: Number(formData.get("amount")) || 0,
      rate: submission.value.rate,
      status: submission.value.status,
      draft: false,
      userId: userSession.user?.id,
    },
  });

  redirect(BASE_ROUTES.invoice);
};

export default createInvoiceAction;
