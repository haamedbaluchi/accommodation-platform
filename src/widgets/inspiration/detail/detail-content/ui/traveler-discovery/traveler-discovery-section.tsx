import { SparklesIcon } from "@heroicons/react/24/outline";
import { Traveler } from "../../model/types";
import { TravelerProfileCardView } from "./traveler-profile-card";

type TravelerDiscoveryCardProps = {
  traveler: Traveler;
};

export function TravelerDiscoveryCard({ traveler }: TravelerDiscoveryCardProps) {
  return (
    <section className="flex flex-col gap-4 px-7 py-5">
      <h2 className="flex items-center gap-2 text-xl font-bold text-text-main">
        <SparklesIcon className="size-5 text-amber-400" />
        این مسیر را چه کسی کشف کرده؟
      </h2>

      <TravelerProfileCardView
        traveler={traveler}
        // followSlot={<FollowTravelerButton travelerId={traveler.id} />}
      />
    </section>
  );
}