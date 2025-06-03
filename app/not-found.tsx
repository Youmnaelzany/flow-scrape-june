import Link from "next/link";

import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">Not Found</h1>
        <h2 className="mb-4 text-2xl font-semibold">
          Could not find requested resource
        </h2>
        <p className="mb-8 max-w-md text-muted-foreground">
          Don't worry, it happens to the best of us! The page you are looking
          for might have been removed, had its name changed, or is temporarily
          unavailable.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="flex items-center justify-center rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>
      </div>
      <footer className="mt-12 text-center text-sm text-muted-foreground">
        If you believe this is an error, please contact support or try again
        later.
      </footer>
    </div>
  );
}
