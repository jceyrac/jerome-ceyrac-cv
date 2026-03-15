export function SkeletonLoader() {
  return (
    <div data-ocid="cv.loading_state" className="min-h-screen">
      {/* Hero skeleton */}
      <div className="min-h-screen flex items-center max-w-6xl mx-auto px-6 pt-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full">
          <div className="flex-1 space-y-4">
            <div className="h-3 w-32 bg-muted rounded animate-pulse" />
            <div className="h-14 w-3/4 bg-muted rounded animate-pulse" />
            <div className="h-14 w-1/2 bg-muted rounded animate-pulse" />
            <div className="h-4 w-full bg-muted/60 rounded animate-pulse mt-6" />
            <div className="h-4 w-5/6 bg-muted/60 rounded animate-pulse" />
            <div className="h-4 w-4/6 bg-muted/60 rounded animate-pulse" />
            <div className="flex gap-4 mt-8">
              <div className="h-10 w-28 bg-primary/20 rounded-full animate-pulse" />
              <div className="h-10 w-28 bg-muted/40 rounded-full animate-pulse" />
            </div>
          </div>
          <div className="w-64 h-64 rounded-full bg-muted animate-pulse" />
        </div>
      </div>

      {/* Section skeletons */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="max-w-6xl mx-auto px-6 py-20 space-y-6">
          <div className="h-3 w-24 bg-primary/30 rounded animate-pulse" />
          <div className="space-y-3">
            <div className="h-4 w-full bg-muted/50 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-muted/50 rounded animate-pulse" />
            <div className="h-4 w-4/6 bg-muted/50 rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}
