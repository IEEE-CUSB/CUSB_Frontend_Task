import { Link, useParams } from 'react-router-dom';
import { useGetEventQuery } from '../api/apiSlice';
import Spinner from '../components/Spinner';

export default function EventDetailsPage() {
  const { id } = useParams();
  const { data: event, isLoading, error } = useGetEventQuery(Number(id));

  if (isLoading) return <Spinner />;
  if (error || !event) return <p className="text-red-600">Event not found.</p>;

  const spotsLeft = event.capacity - event.registered;

  return (
    <article>
      <Link to="/events" className="text-sm text-blue-700 hover:underline">
        Back to events
      </Link>
      <h1 className="mt-2 text-3xl font-bold">{event.title}</h1>
      <p className="mt-1 text-gray-600">
        {event.category} · {event.date}
      </p>
      <p className="mt-4">
        {spotsLeft > 0 ? `${spotsLeft} spots left` : 'This event is full.'}
      </p>
    </article>
  );
}
