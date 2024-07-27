/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, ReactNode } from "react";
import User from "./User";

interface UseFetchResult {
  data: User | null;
  isPending: boolean;
  error: ReactNode | null;
}

const useFetch = (url: string): UseFetchResult => {
  const [data, setData] = useState<User | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<ReactNode | null>(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Error fetching users data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
