import { useState, useEffect } from "react";

// Denna hook genererar ett värde som beräknas på klienten efter att sidan har laddats.
export default function useClientOnlyRandom <T>(fn: () => T, fallback?: T): T | undefined {
  const [value, setValue] = useState<T | undefined>(fallback);

  useEffect(() => {
    // Generera värdet när klienten är redo
    setValue(fn());
  }, []); // Den här effekten körs bara på klienten efter första rendern

  return value; // Returnera värdet när det är klart, eller undefined om inte klart än
}
