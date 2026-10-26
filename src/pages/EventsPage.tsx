import { Link } from 'react-router-dom';
import { useGetEventsQuery } from '../api/apiSlice';
import Spinner from '../components/Spinner';

export default function EventsPage() {
  const { data: events, isLoading, error } = useGetEventsQuery();

  if (isLoading) return <Spinner />;
  if (error || !events) return <p className="text-red-600">Could not load events.</p>;

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Events</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {events.map((event) => (
          <li key={event.id} className="rounded border bg-white p-4">
            <p className="text-xs text-gray-500">{event.category}</p>
            <h2 className="font-semibold">
              <Link to={`/events/${event.id}`} className="text-blue-700 hover:underline">
                {event.title}
              </Link>
            </h2>
            <p className="mt-1 text-sm text-gray-600">{event.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
