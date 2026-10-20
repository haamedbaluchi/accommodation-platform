import { TripPlan } from "@entities/trip";
import { AttractionPoint } from "../model/types";


export function extractAttractionPoints(tripPlan: TripPlan | null): AttractionPoint[] {
  if (!tripPlan?.days?.length) return [];

  const points: AttractionPoint[] = [];

  for (const day of tripPlan.days) {
    const activities = day.activities ?? [];

    for (const activity of activities) {
      if (activity.isAttraction !== true) continue;
      if (!activity.coordinates) continue;

      points.push({
        id: activity.id,
        title: activity.title,
        coordinates: activity.coordinates,
        category: activity.category,
        imageUrl: activity.imageUrl,
        shortAddress: activity.shortAddress,
        mapLink: activity.mapLink,
        dayNumber: day.dayNumber,
      });
    }
  }

  return points;
}