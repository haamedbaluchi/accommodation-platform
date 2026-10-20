export const PROFILE_STEPS = [
  {
    id: 1,
    title: 'اطلاعات شخصی',
    fields: [
      'name',
      'family_name',
      'username',
      'city',
      'social_media_link',
      'about',
    ],
  },

  {
    id: 2,
    title: 'سفرها',
    fields: [],
  },

  {
    id: 3,
    title: 'شبکه اجتماعی',
    fields: ['instagram', 'telegram'],
  },

  {
    id: 4,
    title: 'تصاویر',
    fields: ['avatar', 'cover'],
  },
] as const;
