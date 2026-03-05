import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <h1 className="font-display text-8xl font-bold text-brand mb-4">404</h1>
      <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-brand hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
