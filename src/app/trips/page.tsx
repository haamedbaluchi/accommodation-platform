import type { Metadata } from 'next';
import {TripsPage} from "@views/trips-page"

export const metadata: Metadata = {
  title: 'سفر های من',
  description: 'صفحه سفرهای کاربر',
};

export default function Page() {
  return <TripsPage />;
}
