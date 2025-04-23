import React from "react";
import { MailCheck } from "lucide-react";

const EmailVerification = () => {
  return (
    <section className="flex items-center justify-center h-screen w-full bg-blue-50/10">
      <div className="px-4 w-full sm:w-[438px] mx-auto text-center">
        <div className=" flex items-center justify-center mx-auto bg-blue-100 size-20 rounded-full">
          <MailCheck className="text-blue-600 size-8" />
        </div>
        <h1 className="text-[26px] leading-[36px] font-medium text-prm-black">
          Check your inbox
        </h1>
        <p className="pt-4 pb-10 text-[#36454F] text-[15px] leading-[21px] font-normal">
          A verification email has been sent to your email Please check your
          email and click on the link provided to complete your account
          registration.
        </p>
      </div>
    </section>
  );
};

export default EmailVerification;
