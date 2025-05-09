'use server';

import { Form, Button } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';

export default function MealshareForm({ userId }: { userId: number }) {
  async function handleSubmit(formData: FormData) {
    'use server';

    const amount = Number(formData.get('amount'));
    const type = formData.get('type') as 'GIVE' | 'REQUEST';

    const currentUser = await prisma.user.findUnique({
      where: { id: userId },
      select: { mealCount: true },
    });

    if (!currentUser) return;

    const newMealCount = type === 'GIVE' ? currentUser.mealCount - amount : currentUser.mealCount + amount;

    await prisma.user.update({
      where: { id: userId },
      data: { mealCount: newMealCount },
    });

    await prisma.mealShare.create({
      data: { userId, amount, type },
    });
  }

  return (
    <form action={handleSubmit} className="mt-3">
      <Form.Group className="mb-2">
        <Form.Label>Meal Amount</Form.Label>
        <Form.Control name="amount" type="number" min={1} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select name="type" defaultValue="GIVE">
          <option value="GIVE">Give</option>
          <option value="REQUEST">Request</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit">Submit</Button>
    </form>
  );
}
