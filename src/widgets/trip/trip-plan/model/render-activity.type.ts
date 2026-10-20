import { ItineraryItem } from '@entities/trip';
import { ReactNode } from 'react';

export type RenderActivity = (activity: ItineraryItem) => ReactNode;
