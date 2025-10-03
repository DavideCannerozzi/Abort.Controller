import type { AlbumDataProps } from "../../hooks/useFetch";

interface AlbumProps {
  album: AlbumDataProps;
}

export default function Card({ album }: AlbumProps) {
  return (
    <div>
      <p>{album.title}</p>
    </div>
  );
}
