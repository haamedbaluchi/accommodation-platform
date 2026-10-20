import Image from 'next/image';
import { SUGGESTED_CITIES } from '../../model/profile.constants';


interface ProfileSuggestedCitiesProps {
  selectedCity: string;
  onSelect: (city: string) => void;
}

export function ProfileSuggestedCities({
  selectedCity,
  onSelect,
}: ProfileSuggestedCitiesProps) {
  return (
    <div className="flex justify-start gap-3 overflow-x-auto pb-1 no-scrollbar">
      {SUGGESTED_CITIES.map((city) => (
        <button
          key={city.id}
          type="button"
          onClick={() => onSelect(city.value)}
          className={`shrink-0 flex items-center gap-1 rounded-full px-1 py-1 pl-3 text-xs font-bold transition-colors ${
            selectedCity === city.value
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'bg-accent text-text-main hover:bg-gray-50 hover:text-gray-500'
          }`}
        >
          <div className="h-6 w-6 overflow-hidden rounded-full bg-gray-200">
            <Image
              src="/images/masjed_shakh.svg"
              width={24}
              height={24}
              alt={city.value}
            />
          </div>

          <span>{city.value}</span>
        </button>
      ))}
    </div>
  );
}
