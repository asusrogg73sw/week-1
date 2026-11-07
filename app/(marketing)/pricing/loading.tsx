export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-live="polite"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 py-16 text-foreground"
    >
      {/* Background Effects using theme primary color */}
      <div className="absolute left-1/4 top-10 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 w-full max-w-3xl text-center">

        {/* Animated Loader */}
        <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-muted border-t-primary" />
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-blue-600 shadow-lg shadow-primary/30" />
        </div>

        {/* Loading Text */}
        <h1 className="mt-8 text-3xl font-bold tracking-tight md:text-4xl">
          Loading
          <span className="text-primary"> Experience...</span>
        </h1>

        <p className="mt-4 text-sm text-muted-foreground md:text-base">
          Please wait while we prepare something amazing for you.
        </p>

        {/* Loading Progress Animation */}
        <div className="mx-auto mt-8 h-1.5 w-48 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-primary to-blue-500" />
        </div>

        {/* Skeleton Cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-card/70 p-6 text-left shadow-sm backdrop-blur-sm"
            >
              <div className="h-12 w-12 animate-pulse rounded-xl bg-muted" />
              <div className="mt-6 h-5 w-3/4 animate-pulse rounded bg-muted" />
              <div className="mt-4 h-3 w-full animate-pulse rounded bg-muted" />
              <div className="mt-2 h-3 w-5/6 animate-pulse rounded bg-muted" />
              <div className="mt-7 h-10 w-full animate-pulse rounded-xl bg-muted" />
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs tracking-widest text-muted-foreground/60">
          POWERED BY CREATIVITY & INNOVATION
        </p>

      </div>

      {/* Screen Reader Text */}
      <span className="sr-only">Loading, please wait...</span>
    </main>
  );
}