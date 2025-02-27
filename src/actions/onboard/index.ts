"use server";

import { userAuthenticated } from "@/helpers/session";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export async function onboardForm(formData: FormData) {
  const { user } = await userAuthenticated();

  try {
    await prisma.user.update({
      where: {
        id: user?.id,
      },
      data: {
        firstName: formData.get("fName")?.toString(),
        lastName: formData.get("lName")?.toString(),
        address: formData.get("address")?.toString(),
        onboarded: true,
      },
    });
    redirect("/dashboard");
  } catch (error) {
    console.error(error);
  }
}
