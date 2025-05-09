import { Form } from 'react-bootstrap';

export default function MealCountDisplay({ count }: { count: number }) {
  return (
    <Form.Control
      type="number"
      value={count}
      readOnly
      className="text-center my-2"
    />
  );
}
