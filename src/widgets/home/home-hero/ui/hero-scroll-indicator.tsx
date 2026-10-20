import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';

export function HeroScrollIndicator() {
  return (
    <>
      <div className="relative z-30 -mt-8 h-12 w-full">
        <div
          className="sm:hidden h-full w-full bg-white"
          style={{
            clipPath:
              'polygon(0% 100%, 100% 100%, 100.000% 35.503%, 93.750% 39.175%, 87.500% 43.359%, 81.250% 47.742%, 75.000% 51.994%, 68.750% 55.795%, 62.500% 58.862%, 56.250% 60.962%, 50.000% 61.939%, 43.750% 61.719%, 37.500% 60.319%, 31.250% 57.843%, 25.000% 54.479%, 18.750% 50.477%, 12.500% 46.140%, 6.250% 41.792%, 0.000% 37.759%, 0% 0%)',
          }}
        />
      </div>
      <div className="sm:hidden flex items-center justify-center -mt-4 rounded-full p-2">
        <ChevronDoubleDownIcon className="h-6 w-6 text-neutral-6" />
      </div>
    </>
  );
}
