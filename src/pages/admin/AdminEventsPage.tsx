import { useDeleteEventMutation, useGetEventsQuery } from '../../api/apiSlice';
import EventsTable from '../../components/admin/EventsTable';
import Spinner from '../../components/Spinner';

export default function AdminEventsPage() {
  const { data: events, isLoading, error } = useGetEventsQuery();
  const [deleteEvent] = useDeleteEventMutation();

  if (isLoading) return <Spinner />;
  if (error || !events) return <p className="text-red-600">Could not load events.</p>;

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Manage events</h1>
      <EventsTable events={events} onDelete={(id) => deleteEvent(id)} />
    </section>
  );
}
