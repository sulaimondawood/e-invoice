import { Container } from "@/components/global/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { OnboardingForm } from "./_components/form";

const Onboarding = () => {
  return (
    <div className="h-screen w-full ">
      <header className="bg-[#F4F5F6] py-6 px-6 border border-b ">
        <Container>
          <Link href={"/"} className="flex gap-2 items-center">
            <div className="relative size-7">
              <Image src={"/logo.png"} alt="logo" fill />
            </div>
            <p className="font-bold text-2xl">Invoicing.</p>
          </Link>
        </Container>
      </header>
      <Container>
        <div className="mt-10 w-full max-w-[400px] mx-auto space-y-5">
          <div className="max-w-md mx-auto text-center space-y-3">
            <h1 className="font-besley text-center font-semibold text-3xl">
              You&apos;re Almost There!
            </h1>
            <p className="text-gray-600">
              Just a few more steps to go! Complete the onboarding process to
              unlock your full experience and get started seamlessly.
            </p>
          </div>
          <OnboardingForm />
        </div>
      </Container>
    </div>
  );
};

export default Onboarding;
