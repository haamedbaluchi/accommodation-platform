import { TripCardRoot } from './TripCardRoot';
import { TripCardInfo } from './TripCardInfo';
import { TripCardContent } from './TripCardContent';
import { TripCardAvatars } from './TripCardAvatars';
import { TripCardBackground } from './TripCardBackground';

export const TripCard = Object.assign(TripCardRoot, {
  Background: TripCardBackground,
  Content: TripCardContent,
  Info: TripCardInfo,
  Avatars: TripCardAvatars,
});