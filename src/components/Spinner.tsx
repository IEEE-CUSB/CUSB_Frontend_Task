export default function Spinner({ label = 'Loading…' }: { label?: string }) {
  return (
    <div role="status" className="py-8 text-center text-gray-500">
      {label}
    </div>
  );
}
