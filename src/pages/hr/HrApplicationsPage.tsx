import { useState } from 'react';
import { useGetApplicationsQuery, useUpdateApplicationStatusMutation } from '../../api/apiSlice';
import { COMMITTEES } from '../../api/mockData';
import ApplicationsTable from '../../components/hr/ApplicationsTable';
import Spinner from '../../components/Spinner';

export default function HrApplicationsPage() {
  const { data, isLoading, error } = useGetApplicationsQuery();
  const [updateStatus] = useUpdateApplicationStatusMutation();
  const [committee, setCommittee] = useState('all');

  if (isLoading) return <Spinner />;
  if (error || !data) return <p className="text-red-600">Something went wrong.</p>;

  const rows = committee === 'all' ? data : data.filter((a) => a.committee === committee);

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Applications</h1>
        <select
          value={committee}
          onChange={(e) => setCommittee(e.target.value)}
          className="rounded border px-3 py-1 text-sm"
          aria-label="Filter by committee"
        >
          <option value="all">All committees</option>
          {COMMITTEES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <ApplicationsTable
        applications={rows}
        onChange={(id, status) => updateStatus({ id, status })}
      />
    </section>
  );
}
