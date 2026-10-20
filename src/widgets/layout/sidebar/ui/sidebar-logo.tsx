import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function SidebarLogo() {
  return (
    <Link href="/" className="mx-auto block" aria-label="صفحه اصلی">
      <Image src="/images/logos/boomro-logo.png" alt="بومرو" width={34} height={36} />
    </Link>
  );
}
