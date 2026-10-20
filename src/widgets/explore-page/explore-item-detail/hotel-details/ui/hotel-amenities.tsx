import { HotelAmenity } from '../model/types';

export function HotelAmenities({ amenities }: { amenities?: HotelAmenity[] }) {
  if (!amenities?.length) {
    return (
      <p className="text-sm text-text-foreground font-yekta">
        امکاناتی ثبت نشده است.
      </p>
    );
  }

  return (
    <div>
      <h3 className='text-text-main font-bold mt-1 mb-3'>امکانات اقامتگاه</h3>
      <div className="flex items-center gap-2 flex-wrap w-full">
        {amenities.map((amenity) => (
          <span
            key={amenity.id}
            className="flex items-center gap-1.5 rounded-full bg-text-muted-foreground px-3 py-1.5 text-xs font-medium text-text-main font-yekta"
          >
            {amenity.icon && <span>{amenity.icon}</span>}
            {amenity.label}
          </span>
        ))}
      </div>
    </div>
  );
}
