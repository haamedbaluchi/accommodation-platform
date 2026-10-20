import { EventArtist } from '../model/types';

export function EventArtists({ artists }: { artists: EventArtist[] }) {
  if (!artists.length) {
    return (
      <p className="text-sm text-text-foreground font-yekta">هنرمندی ثبت نشده است.</p>
    );
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      {artists.map((artist) => (
        <div key={artist.id} className="flex items-center gap-3">
          {artist.avatar ? (
            <img
              src={artist.avatar}
              alt={artist.name}
              className="size-11 rounded-full object-cover"
            />
          ) : (
            <div className="size-11 rounded-full bg-text-muted-foreground" />
          )}

          <div className="flex flex-col font-yekta">
            <span className="text-sm font-bold text-text-main">{artist.name}</span>
            <span className="text-xs text-text-foreground">{artist.role}</span>
          </div>
        </div>
      ))}
    </div>
  );
}