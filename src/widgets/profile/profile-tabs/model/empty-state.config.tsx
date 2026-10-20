export const emptyStateConfig = {
  trips: {
    title: 'چمدونت هنوز خالیه!',
    description:
      'بومرو منتظره تا بهترین مسیرها رو بر اساس سلیقه و بودجه‌ات بهت پیشنهاد بده. مقصدت رو بگو، برنامه‌ریزیش با ما!',
    imageUrl: '/images/profile/suitcase.png',
    buttonText: 'برنامه‌ریزی اولین سفر',
  },

  favorites: {
    title: 'لیست آرزوهای تو کاملاً خالیه!',
    description:
      'مهم نیست کوچیک باشه یا بزرگ؛ اولین آرزوت رو بنویس. هوش مصنوعی بومرو بهت کمک میکنه قدم به قدم بهش نزدیک شی.',
    imageUrl: '/images/profile/wish.png',
    buttonText: 'نوشتن لیست آرزوها',
  },

  reviews: {
    title: 'صدای تجربه‌ات را به دیگران برسون!',
    description:
      'همون لحظه‌ی خاص، همون حس قشنگ، همون چالشی که توش بودی... حالا نوبت توئه که دیگران را ترغیب کنی.',
    imageUrl: '/images/profile/history.png',
    buttonText: 'به اشتراک گذاری تجربه',
  },
} as const;