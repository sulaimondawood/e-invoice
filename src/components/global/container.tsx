import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

export const Container = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={cn("w-full max-w-[1440px] mx-auto px-4", className)}>
      {children}
    </div>
  );
};
