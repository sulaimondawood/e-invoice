"use client";

import { Button } from "@/components/reuseables/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { prisma } from "@/lib/db/prisma";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { FormEvent } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

export const OnboardingForm = () => {
  const { data: session } = useSession();
  const { pending } = useFormStatus();

  async function onboardForm(e: FormEvent<HTMLFormElement>, userId: string) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          firstName: formData.get("fName")?.toString(),
          lastName: formData.get("lName")?.toString(),
          address: formData.get("address")?.toString(),
          onboarded: true,
        },
      });
      toast.success("Welcome onboard!");
      redirect("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Onboarding could not be completed");
    }
  }
  return (
    <div>
      <form
        onSubmit={(e) => onboardForm(e, session?.user?.id as string)}
        className="space-y-4"
      >
        <div>
          <Label htmlFor="fName" className="text-gray-600">
            First name
          </Label>
          <Input type="text" id="fName" name="fName" required />
        </div>
        <div>
          <Label htmlFor="lName" className="text-gray-600">
            Last name
          </Label>
          <Input type="text" id="lName" name="lName" />
        </div>
        <div>
          <Label htmlFor="address" className="text-gray-600">
            Address
          </Label>
          <Input type="text" id="address" name="address" required />
        </div>
        <Button className="min-w-[180px]" type="submit">
          Let&apos;s Go
        </Button>
      </form>
    </div>
  );
};
