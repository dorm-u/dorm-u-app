'use client';

import { Form, Button } from 'react-bootstrap';
import handleMealshareSubmit from '@/lib/mealshare-actions';

export default function MealshareForm({ userId }: { userId: number }) {
  return (
    <form
      action={async (formData) => {
        await handleMealshareSubmit(userId, formData);
      }}
      className="mt-3"
    >
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
