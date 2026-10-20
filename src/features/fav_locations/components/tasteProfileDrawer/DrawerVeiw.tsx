import { CaruserContainer } from './CaruserContainer';
import { Header } from './Header';

export function DrawerVeiw() {
  return (
    <div className="max-w-7xl h-223 rounded-t-3xl px-5 py-3">
      <Header />
      <CaruserContainer />
    </div>
  );
}
