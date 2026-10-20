import { NavDrawerButton } from '@features/home/navigation-drawer';
import { FaqSection } from '@widgets/faq';
import { Footer } from '@widgets/layout/footer';
import { HeaderPage } from '@widgets/layout/header';
import { UserNavigation } from '@widgets/user/user-navigation';

export function QuestionsPage() {
  return (
    <div className="w-full min-h-screen">
      <HeaderPage
        leading={<NavDrawerButton variant="text" />}
        trailing={<UserNavigation variant='blue'/>}
      />

      {/* <HeaderLogo /> */}

      <FaqSection />

      <Footer />
    </div>
  );
}
