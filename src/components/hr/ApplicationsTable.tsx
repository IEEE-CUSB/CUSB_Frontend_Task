import type { Application, ApplicationStatus } from '../../types';
import StatusBadge from '../StatusBadge';

interface Props {
  applications: Application[];
  onChange: (id: number, status: ApplicationStatus) => void;
}

export default function ApplicationsTable({ applications, onChange }: Props) {
  if (applications.length === 0) {
    return <p className="py-6 text-center text-gray-500">No applications found.</p>;
  }

  return (
    <div className="overflow-x-auto rounded border bg-white">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Applicant</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Email</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Committee</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Applied</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Status</th>
            <th className="px-4 py-2 text-right font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {applications.map((app) => (
            <tr key={app.id}>
              <td className="px-4 py-2">{app.applicantName}</td>
              <td className="px-4 py-2 text-gray-600">{app.email}</td>
              <td className="px-4 py-2">{app.committee}</td>
              <td className="px-4 py-2 text-gray-600">{app.appliedAt}</td>
              <td className="px-4 py-2">
                <StatusBadge status={app.status} />
              </td>
              <td className="px-4 py-2 text-right">
                <button
                  onClick={() => onChange(app.id, 'accepted')}
                  className="mr-2 rounded bg-green-600 px-3 py-1 text-white hover:bg-green-700"
                >
                  Accept
                </button>
                <button
                  onClick={() => onChange(app.id, 'rejected')}
                  className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
