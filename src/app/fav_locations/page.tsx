import { ComingSoon } from "@views/coming-soon-page";

export default function page() {
  return (
    //     <HeaderFavoritesPage />
    //     <FavoritesPage />
    <div className="flex h-screen w-full">
      {/* <Sidebar /> */}
      <div className="flex flex-1 flex-col overflow-y-auto custom-scrollbar">
        <ComingSoon />
      </div>
    </div>
  );
}
