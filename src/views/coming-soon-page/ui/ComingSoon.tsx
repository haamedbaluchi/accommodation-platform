import { BackHomeButton } from "./internal/BackHomeButton";
import { ComingSoonHeader } from "./internal/ComingSoonHeader";
import { ComingSoonIllustration } from "./internal/ComingSoonIllustration";

export function ComingSoon() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 sm:px-6">
      <div className="flex w-full max-w-5xl flex-col items-center text-center">
        <ComingSoonHeader />

        <div className="mt-8 sm:mt-10">
          <ComingSoonIllustration />
        </div>

        <div className="mt-10 sm:mt-14">
          <BackHomeButton />
        </div>
      </div>
    </main>
  );
}
