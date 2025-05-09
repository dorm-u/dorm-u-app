'use server';

import { prisma } from '@/lib/prisma';

export default async function handleMealshareSubmit(userId: number, formData: FormData) {
  const amount = Number(formData.get('amount'));
  const type = formData.get('type') as 'GIVE' | 'REQUEST';

  const currentUser = await prisma.user.findUnique({
    where: { id: userId },
    select: { mealCount: true },
  });

  if (!currentUser) return;

  const newMealCount = type === 'GIVE'
    ? currentUser.mealCount - amount
    : currentUser.mealCount + amount;

  await prisma.user.update({
    where: { id: userId },
    data: { mealCount: newMealCount },
  });

  await prisma.mealShare.create({
    data: { userId, amount, type },
  });
}
