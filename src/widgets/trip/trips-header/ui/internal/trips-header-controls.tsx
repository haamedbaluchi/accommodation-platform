import {TripsHeaderAuth} from './trips-header-auth';
import { TripsHeaderNewTrip } from './trips-header-new-trip';
import { TripsHeaderTeamButton } from './trips-header-team-button';

export function TripsHeaderControls() {
  return (
    <>
      {/* <TripsHeaderTeamButton /> */}
      <TripsHeaderNewTrip />
      <TripsHeaderAuth />
    </>
  );
}
