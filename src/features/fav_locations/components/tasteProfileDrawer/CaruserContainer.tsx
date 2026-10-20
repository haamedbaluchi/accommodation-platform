import { useFavoritesStore } from '../store/useFavoritesStore';
import { CafeCard } from './CafeCard';
import { CityCard } from './CityCard';
import {
  cafesAndRestaurantsMock,
  natureDestinationsMock,
  popularCitiesMock,
} from './mock/mockData';
import { PlaceCard } from './PlaceCard';

export function CaruserContainer() {
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const handleToggleLocation = (
    e: React.MouseEvent, 
    place: any,
    defaultTag: string,
    icon: string,
  ) => {
    e.preventDefault(); 

    e.stopPropagation();

    toggleFavorite({
      id: place.title,
      title: place.title,
      location: place.subTitle || 'ایران',
      imageSrc: place.imageSrc || '/images/default.jpg',
      tags: place.tags || [{ label: defaultTag, icon }],
      visitorsCount: 1200,
      isVisited: false,
    });
  };
  return (
    <div className="flex flex-col w-full font-yekta">
      <h3 className="text-text-main font-bold text-xl mt-4 mb-4">
        طبیعت و ماجراجویی 🌲🏕️
      </h3>
      <div className="flex gap-3 w-full snap-x snap-mandatory pb-4 scroll-row">
        {natureDestinationsMock.map((place) => (
          <div
            key={`${place.title}-${place.subTitle}`}
            className="snap-start shrink-0"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleToggleLocation(e, place, 'طبیعت‌گردی', '🌲');
            }}
          >
            <PlaceCard place={place} />
          </div>
        ))}
      </div>

      <h3 className="text-text-main font-bold text-xl mt-4 mb-4">
        کافه و شکم‌گردی☕🍔
      </h3>
      <div className="flex gap-3 w-full snap-x snap-mandatory pb-4 scroll-row">
        {cafesAndRestaurantsMock.map((place) => (
          <div
            key={`${place.title}-${place.subTitle}`}
            className="snap-start shrink-0"
            onClick={(e) => handleToggleLocation(e, place, 'کافه گردی', '☕')}
          >
            <CafeCard place={place} />
          </div>
        ))}
      </div>

      <h3 className="text-text-main font-bold text-xl mt-4 mb-4">
        شهرهای پرطرفدار 🏙️✈️
      </h3>
      <div className="flex gap-3 w-full snap-x snap-mandatory pb-4 scroll-row">
        {popularCitiesMock.map((place) => (
          <div
            key={`${place.title}-${place.subTitle}`}
            className="snap-start shrink-0"
            onClick={(e) => handleToggleLocation(e, place, 'شهر گردی', '✈️')}
          >
            <CityCard place={place} />
          </div>
        ))}
      </div>
    </div>
  );
}
