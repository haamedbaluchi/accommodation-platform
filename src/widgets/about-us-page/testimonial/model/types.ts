
export interface Testimonial {
  id: string;
  quote: string;
  authorName?: string;
  authorRole?: string;
  avatarUrl?: string;

  avatarRingClassName?: string;

  isTeaser?: boolean;
}

export type TestimonialColumn = Testimonial[];