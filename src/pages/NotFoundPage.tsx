import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="py-12 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <Link to="/" className="mt-4 inline-block text-blue-700 hover:underline">
        Go home
      </Link>
    </section>
  );
}
