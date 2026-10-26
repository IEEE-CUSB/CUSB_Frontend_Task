import { Link } from 'react-router-dom';

export default function HrDashboardPage() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">HR dashboard</h1>
      <p className="mb-4 text-gray-500">Nothing here yet.</p>
      <Link to="/hr/applications" className="text-blue-700 hover:underline">
        Go to applications
      </Link>
    </section>
  );
}
