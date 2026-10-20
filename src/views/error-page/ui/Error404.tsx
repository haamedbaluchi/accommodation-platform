import { ErrorActions } from "./internal/ErrorActions";
import { Error404Header } from "./internal/Error404Header";
import { Error404Illustration } from "./internal/Error404Illustration";


export function Error404() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 sm:px-6">
      <div className="flex w-full max-w-3xl flex-col items-center text-center">
        <Error404Header />

        <div className="mt-8 sm:mt-10">
          <Error404Illustration />
        </div>

        <div className="mt-10 sm:mt-14">
          <ErrorActions />
        </div>
      </div>
    </main>
  );
}