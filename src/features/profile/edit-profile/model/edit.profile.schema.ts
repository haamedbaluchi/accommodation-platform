import * as v from 'valibot';

export const editProfileSchema = v.object({
  name: v.pipe(v.string(), v.minLength(2, 'نام باید حداقل ۲ کاراکتر باشد')),

  family_name: v.pipe(
    v.string(),
    v.minLength(2, 'نام خانوادگی باید حداقل ۲ کاراکتر باشد'),
  ),

  username: v.optional(v.string()),
  email: v.optional(
    v.pipe(
      v.string(),
      v.trim(),
      v.email('لطفاً یک آدرس ایمیل معتبر وارد کنید.'),
    ),
  ),
  city: v.pipe(v.string(), v.minLength(2, 'مبدا سفر الزامی است')),

  social_media_link: v.optional(v.string()),

  about: v.optional(v.pipe(v.string(), v.maxLength(500, 'حداکثر ۵۰۰ کاراکتر'))),

  avatar: v.optional(v.instance(File)),
  cover: v.optional(v.any()),
});

export type EditProfileFormValues = v.InferOutput<typeof editProfileSchema>;
// avatar: v.optional(v.any()),
