import { cn } from '@shared/lib';
import { SidebarLogo } from './sidebar-logo';
import { SidebarFooter } from './sidebar-footer';
import { SidebarNavigation } from './sidebar-navigation';

interface SidebarProps {
  className?: string;
};

export function Sidebar({ className="" }: SidebarProps) {
  return (
    <aside
      id="sidebar"
      className={cn(
        'hidden h-screen max-h-screen w-12 flex-col justify-between',
        'overflow-y-auto bg-background py-4 shadow-sidebar',
        'custom-scrollbar dir-ltr sm:flex xl:w-14 z-50',
        className,
      )}
    >

      <div className="flex flex-col gap-4 xl:gap-5">
        <SidebarLogo />
        <SidebarNavigation />
      </div>

      <SidebarFooter />
    </aside>
  );
}