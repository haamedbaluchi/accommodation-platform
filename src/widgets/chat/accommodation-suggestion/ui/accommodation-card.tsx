// import { SparklesIcon } from "@heroicons/react/24/solid";
// import { AccommodationCardProps } from "../model/types";
// import { AccommodationHeader } from "./accommodation-header";
// import { AccommodationAmenities } from "./accommodation-amenities";
// import { AccommodationGallery } from "./accommodation-gallery";
// import { AccommodationActions } from "./accommodation-actions";

// export function AccommodationCard(props: AccommodationCardProps) {
//   return (
//     <article className="w-full overflow-hidden rounded-[24px] border border-neutral-200 bg-white p-4 shadow-sm md:p-5">
//       <div className="flex flex-col md:flex-row gap-5">
        
//         <div className="flex flex-1 flex-col order-2 md:order-1">
//           <AccommodationHeader {...props} />
          
//           {/* بخش "چرا پیشنهادش کردم؟" در عکس */}
//           <div className="mt-3 rounded-xl bg-neutral-50 p-3 border border-dashed border-neutral-200">
//              <p className="text-[13px] text-neutral-600 flex items-center gap-1">
//                 <SparklesIcon className="size-4 text-amber-500" />
//                 <strong>چرا پیشنهادش کردم؟</strong>
//                 {props.description.slice(0, 100)}...
//              </p>
//           </div>

//           <div className="mt-4">
//              <AccommodationAmenities amenities={props.amenities} />
//           </div>
//         </div>

//         {/* بخش تصاویر (چپ - طبق عکس) */}
//         <div className="w-full md:w-[240px] shrink-0 order-1 md:order-2">
//            <AccommodationGallery images={props.images} title={props.title} />
//         </div>
//       </div>

//       <div className="mt-5 pt-4 border-t border-neutral-100">
//         <AccommodationActions detailsHref={props.detailsHref} reserveHref={props.reserveHref} />
//       </div>
//     </article>
//   );
// }
import { SparklesIcon } from '@heroicons/react/24/solid';

import { AccommodationCardProps } from '../model/types';

import { AccommodationHeader } from './accommodation-header';
import { AccommodationAmenities } from './accommodation-amenities';
import { AccommodationGallery } from './accommodation-gallery';
import { AccommodationActions } from './accommodation-actions';

export function AccommodationCard(props: AccommodationCardProps) {
  return (
    <div className="@container w-full">
      <article className="w-full overflow-hidden rounded-[24px] border border-neutral-200 bg-white p-4 shadow-sm @min-[680px]:p-5">
        <div className="flex flex-col gap-5 @min-[680px]:flex-row">
          <div className="order-2 flex min-w-0 flex-1 flex-col @min-[680px]:order-1">
            <AccommodationHeader {...props} />

            <div className="mt-3 rounded-xl border border-dashed border-neutral-200 bg-neutral-50 p-3">
              <p className="flex items-start gap-1 text-[13px] leading-6 text-neutral-600">
                <SparklesIcon className="mt-1 size-4 shrink-0 text-amber-500" />

                <span className="min-w-0">
                  <strong className="font-bold">
                    چرا پیشنهادش کردم؟
                  </strong>{' '}
                  {props.recommendationReason ??
                    `${props.description.slice(0, 100)}...`}
                </span>
              </p>
            </div>

            <div className="mt-4">
              <AccommodationAmenities amenities={props.amenities} />
            </div>
          </div>

          <div className="order-1 w-full shrink-0 @min-[680px]:order-2 @min-[680px]:w-[240px]">
            <AccommodationGallery
              images={props.images}
              title={props.title}
            />
          </div>
        </div>

        <div className="mt-5 border-t border-neutral-100 pt-4">
          <AccommodationActions
            detailsHref={props.detailsHref}
            reserveHref={props.reserveHref}
          />
        </div>
      </article>
    </div>
  );
}

