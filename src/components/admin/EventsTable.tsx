import type { EventItem } from '../../types';

interface Props {
  events: EventItem[];
  onDelete: (id: number) => void;
}

export default function EventsTable({ events, onDelete }: Props) {
  if (events.length === 0) {
    return <p className="py-6 text-center text-gray-500">No events found.</p>;
  }

  return (
    <div className="overflow-x-auto rounded border bg-white">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Title</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Category</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Date</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Registered</th>
            <th className="px-4 py-2 text-right font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {events.map((event) => (
            <tr key={event.id}>
              <td className="px-4 py-2">{event.title}</td>
              <td className="px-4 py-2">{event.category}</td>
              <td className="px-4 py-2 text-gray-600">{event.date}</td>
              <td className="px-4 py-2">
                {event.registered} / {event.capacity}
              </td>
              <td className="px-4 py-2 text-right">
                <button
                  onClick={() => {
                    if (window.confirm(`Delete "${event.title}"?`)) onDelete(event.id);
                  }}
                  className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
