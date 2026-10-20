import { HomeHighlightsList } from "./HomeHighlightsList";
import { ContentToolbar } from "@widgets/home/content-toolbar";
import { TripStoryGallery } from "@widgets/home/trip-story-gallery";


export function HomePageContent() {
  return (
    <main className="overflow-clip relative bg-white">
      <ContentToolbar/>
      <HomeHighlightsList />
      <TripStoryGallery />
    </main>
  );
}
