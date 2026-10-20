import Image from 'next/image';
import { TeamMember } from '../model/types';

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="w-[220px] shrink-0 md:w-[250px]">
      <div className="relative aspect-[0.82] overflow-hidden rounded-[24px] bg-neutral-100">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 220px, 250px"
          className="object-cover"
        />
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-base font-bold text-neutral-800">{member.name}</h3>

        <p dir="ltr" className="mt-1 text-sm font-medium text-neutral-500">
          {member.role}
        </p>
      </div>
    </article>
  );
}
