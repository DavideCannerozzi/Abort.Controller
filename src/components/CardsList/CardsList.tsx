import type { AlbumDataProps } from "../../hooks/useFetch";
import Card from "../Card/Card";

interface AlbumsListProps {
  albums: AlbumDataProps[];
}

export default function CardsList({ albums }: AlbumsListProps) {
  return (
    <div>
      {albums.map((album) => (
        <Card key={album.id} album={album} />
      ))}
    </div>
  );
}
