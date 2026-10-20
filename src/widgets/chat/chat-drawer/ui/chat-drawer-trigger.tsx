import { Button } from '@shared/ui';
import { ArrowDown, MenuIcon } from '@shared/assets/icons';

export function ChatDrawerTrigger() {
  return (
    <>
      <button
        type="button"
        aria-label="باز کردن لیست گفتگوها"
        className="
          absolute right-12.5 top-17
          hidden h-9 w-7
          cursor-pointer items-center justify-center
          rounded-l-full
          bg-text-muted-foreground
          text-text-main
          hover:bg-accent
          md:flex
          lg:right-14.5 lg:top-20 lg:h-12 lg:w-9
          xl:right-14.5
        "
      >
        <ArrowDown
          className="h-5 w-5 rotate-90"
          aria-hidden="true"
        />
      </button>

      <Button
        variant="ghost"
        size="icon"
        rounded="full"
        aria-label="باز کردن لیست گفتگوها"
        className="flex md:hidden"
      >
        <MenuIcon
          className="h-5 w-5 **:stroke-text-foreground"
          aria-hidden="true"
        />
      </Button>
    </>
  );
}