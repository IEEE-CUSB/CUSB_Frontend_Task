import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="py-12 text-center">
      <h1 className="text-4xl font-bold text-blue-800">IEEE Cairo University Student Branch</h1>
      <p className="mx-auto mt-4 max-w-xl text-gray-600">
        Workshops, events and communities for engineering students.
      </p>
      <Link
        to="/events"
        className="mt-6 inline-block rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Browse events
      </Link>
    </section>
  );
}
