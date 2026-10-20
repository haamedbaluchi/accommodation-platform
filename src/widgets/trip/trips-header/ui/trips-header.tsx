import { TripsHeaderTitle } from './internal/trips-header-title';
import { TripsHeaderControls } from './internal/trips-header-controls';
import { HeaderPage } from '@widgets/layout/header';

export function TripsHeader() {
  return (
    <HeaderPage
      className="shadow-none md:shadow-header"
      leading={<TripsHeaderTitle />}
      trailing={<TripsHeaderControls />}
    />
  );
}
