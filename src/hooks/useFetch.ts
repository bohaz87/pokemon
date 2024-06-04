import { useState } from "react";

export function usePending<T>(fn: () => Promise<T>) {
  const [pending, setPending] = useState(true);
  const [data, setData] = useState<null | T>(null);
  const [error, setError] = useState<null | string>(null);

  setPending(true);
  fn()
    .then((data) => {
      setData(data);
      setPending(false);
    })
    .catch((e) => setError(e.toString()));

  return [pending, data, error];
}
