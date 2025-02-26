import { prisma } from "@/lib/db/prisma";

export async function getUser(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      onboarded: true,
      email: true,
      firstName: true,
      lastName: true,
    },
  });

  return user;
}
