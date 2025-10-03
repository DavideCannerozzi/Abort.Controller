import { useEffect, useState } from "react";

export interface AlbumDataProps {
  userId: number;
  id: number;
  title: string;
}

export const useFetch = () => {
  const [data, setData] = useState<AlbumDataProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums",
          { signal: controller.signal }
        );
        const albums = await response.json();
        setData(albums);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name === "AbortError") return;
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, []);

  return { data, loading, error };
};
