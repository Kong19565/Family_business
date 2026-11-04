"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

/** Sticky actions on small screens. Hidden while the booking form is on screen. */
export default function MobileBar({ bookLabel, lineUrl, lineLabel }: { bookLabel: string; lineUrl: string; lineLabel: string }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("book");
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting));
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-line bg-background/95 p-3 backdrop-blur md:hidden">
      <a href="#book" className="btn btn-primary flex-1">
        {bookLabel}
      </a>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={lineLabel}
        className="btn btn-line !px-4"
      >
        <MessageCircle className="h-5 w-5" aria-hidden /> LINE
      </a>
    </div>
  );
}
