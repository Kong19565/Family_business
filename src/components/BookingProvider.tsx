"use client";

import { createContext, useContext, useMemo, useState } from "react";

interface BookingState {
  tourId: string;
  setTourId: (id: string) => void;
  /** Select a tour and scroll the booking panel into view. */
  chooseTour: (id: string) => void;
}

const BookingContext = createContext<BookingState | null>(null);

export function BookingProvider({
  initialTourId,
  children,
}: {
  initialTourId: string;
  children: React.ReactNode;
}) {
  const [tourId, setTourId] = useState(initialTourId);

  const value = useMemo<BookingState>(
    () => ({
      tourId,
      setTourId,
      chooseTour: (id) => {
        setTourId(id);
        document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
      },
    }),
    [tourId],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking(): BookingState {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside <BookingProvider>");
  return ctx;
}

export function BookTourButton({
  tourId,
  className,
  children,
}: {
  tourId: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { chooseTour } = useBooking();
  return (
    <button type="button" className={className} onClick={() => chooseTour(tourId)}>
      {children}
    </button>
  );
}
