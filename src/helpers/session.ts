import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

export const userAuthenticated = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }
};
