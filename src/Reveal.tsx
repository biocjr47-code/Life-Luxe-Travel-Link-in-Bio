import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * The page's one authored motion moment: content settles upward as
 * it enters the viewport.
 *
 * Two deliberate choices:
 *  - It renders VISIBLE on the server and only hides itself once the
 *    observer is attached. A reveal that starts hidden in SSR output
 *    leaves the whole page blank if JavaScript never arrives.
 *  - The observer STAYS attached, and `is-in` comes off again when
 *    the element leaves. Dropping the class returns it to opacity 0,
 *    so re-entering replays the rise — the entrance reads the same
 *    scrolling up as scrolling down. (It used to unobserve after the
 *    first fire; the one-shot version made a page feel dead on the
 *    way back up.)
 *
 * The -12% bottom margin means the reset happens once the element is
 * clear of the fold, not the instant its last pixel crosses it, so a
 * small scroll wobble at the boundary cannot flicker it.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    setArmed(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        setShown(Boolean(entry?.isIntersecting));
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`${armed ? "reveal" : ""} ${shown ? "is-in" : ""} ${className}`}
      style={delay && armed ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
