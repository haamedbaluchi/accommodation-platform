import { Loader } from '@shared/ui';

export function ProfileLoading() {
  return (
    <main className="flex h-full flex-1 items-center justify-center">
      <Loader size={7} />
    </main>
  );
}