import { Event } from '@prisma/client';
import Link from 'next/link';

interface EventItemProps extends Event {
  isOwner: boolean;
}

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const EventItem = ({ id, name, description, location, month, day, year, host, isOwner}:EventItemProps) => (
  <tr>
    <td>{day}</td>
    <td>{name}</td>
    <td>{description}</td>
    <td>{location}</td>
    <td>{host}</td>
    {isOwner && <td>
      <Link href={`/editevent${id}`}>Edit</Link>
      </td>}
  </tr>
);

export default EventItem;
