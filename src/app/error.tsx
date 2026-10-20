'use client';

import { Error500 } from "@views/error-page";



type Props = {
  error: Error;
  reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
  return <Error500 />;
}
