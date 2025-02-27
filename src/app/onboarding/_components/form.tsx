import { onboardForm } from "@/actions/onboard";
import { Button } from "@/components/reuseables/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export const OnboardingForm = async () => {
  return (
    <div>
      <form action={onboardForm} className="space-y-4">
        <div>
          <Label htmlFor="fName" className="text-gray-600">
            First name
          </Label>
          <Input type="text" id="fName" name="fName" minLength={2} required />
        </div>
        <div>
          <Label htmlFor="lName" className="text-gray-600">
            Last name
          </Label>
          <Input type="text" id="lName" name="lName" required minLength={2} />
        </div>
        <div>
          <Label htmlFor="address" className="text-gray-600">
            Address
          </Label>
          <Input
            type="text"
            id="address"
            name="address"
            minLength={5}
            required
          />
        </div>
        <Button className="min-w-[180px]" type="submit">
          Let&apos;s Go
        </Button>
      </form>
    </div>
  );
};
