// import { AccommodationAmenity } from "../model/types";

// type AccommodationAmenitiesProps = {
//   amenities: AccommodationAmenity[];
// };

// export function AccommodationAmenities({ amenities }: AccommodationAmenitiesProps) {
//   if (!amenities.length) return null;

//   return (
//     <div className="flex flex-wrap gap-2">
//       {amenities.map((item) => (
//         <div
//           key={item.id}
//           className="flex items-center gap-2 rounded-xl border border-stone-100 bg-white px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
//         >
//           <div className="flex items-center justify-center text-amber-600 size-5">
//             {item.icon}
//           </div>
//           <span className="text-[11px] font-medium text-neutral-600 lg:text-[13px]">
//             {item.label}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }
import { AccommodationAmenity } from '../model/types';

type AccommodationAmenitiesProps = {
  amenities: AccommodationAmenity[];
};

export function AccommodationAmenities({
  amenities,
}: AccommodationAmenitiesProps) {
  if (!amenities.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {amenities.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-2 rounded-xl border border-stone-100 bg-white px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
        >
          <div className="flex size-5 shrink-0 items-center justify-center text-amber-600">
            {item.icon}
          </div>

          <span className="text-[11px] font-medium text-neutral-600 lg:text-[13px]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
