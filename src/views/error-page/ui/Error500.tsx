import { ErrorActions } from "./internal/ErrorActions";
import { Error500Header } from "./internal/Error500Header";
import { Error500Illustration } from "./internal/Error500Illustration";

export function Error500() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 sm:px-6">
      <div className="flex w-full max-w-3xl flex-col items-center text-center">
        <Error500Header />

        <div className="mt-8 sm:mt-3 2xl:mt-10">
          <Error500Illustration />
        </div>

        <div className="mt-10 sm:mt-5 2xl:mt-14">
          <ErrorActions />
        </div>
      </div>
    </main>
  );
}