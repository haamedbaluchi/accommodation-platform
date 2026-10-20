import { InspirationPage } from '@views/inspiration-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الهام سفر',
  description: 'صفحه الهام صفر',
};


export default function Page() {
  return <InspirationPage />;
}



