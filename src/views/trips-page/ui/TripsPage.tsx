import { TabBar } from '@shared/ui';
import { navLinks } from '@shared/constants';
import { TripsList } from '@widgets/trip/trips-list';
import { TripsHeader } from '@widgets/trip/trips-header';
import { Sidebar } from '@widgets/layout/sidebar';

export function TripsPage() {
  return (
    <div className="flex flex-col sm:flex-row h-screen w-full">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-y-auto no-scrollbar sm:custom-scrollbar pb-14 sm:pb-0">
        <TripsHeader />
        <TripsList />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden justify-center px-4 pb-4 pointer-events-none">
        <TabBar
          items={navLinks}
          tabClassName="flex flex-col gap-1 w-18 xs:w-27"
          className="pointer-events-auto backdrop-blur-3xl backdrop-saturate-150"
        />
      </div>
    </div>
  );
}
