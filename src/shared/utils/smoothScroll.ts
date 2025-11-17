const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

type SmoothScrollOptions = {
  duration?: number;
  offset?: number;
};

export const smoothScrollToElement = (
  element: HTMLElement,
  options: SmoothScrollOptions = {},
) => {
  if (typeof window === "undefined") {
    return;
  }

  const { duration = 800, offset = 0 } = options;

  const start = window.scrollY;
  const rect = element.getBoundingClientRect();
  const destination = Math.max(
    0,
    Math.min(
      rect.top + start - offset,
      document.documentElement.scrollHeight - window.innerHeight,
    ),
  );

  if (duration <= 0) {
    window.scrollTo({ top: destination, behavior: "auto" });
    return;
  }

  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    const nextPosition = start + (destination - start) * eased;

    window.scrollTo({ top: nextPosition, behavior: "auto" });

    if (progress < 1) {
      window.requestAnimationFrame(animate);
    }
  };

  window.requestAnimationFrame(animate);
};


