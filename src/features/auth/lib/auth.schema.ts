import * as v from 'valibot';
import { normalizePhone } from './phone/normalize-phone';

export const authSchema = v.object({
  phone: v.pipe(
    v.string(),
    v.transform((input) => normalizePhone(input)),
    v.regex(/^9\d{9}$/, 'شماره موبایل معتبر نیست'),
  ),

  otp: v.pipe(
    v.string(),
    v.minLength(6, 'کد تایید باید ۶ رقم باشد'),
    v.maxLength(6, 'کد تایید باید ۶ رقم باشد'),
  ),

  username: v.pipe(v.string(), v.minLength(2, 'نام باید حداقل ۲ کاراکتر باشد')),

  lastName: v.optional(v.string()),

  city: v.pipe(v.string(), v.nonEmpty('لطفا استان خود را انتخاب کنید')),

  gender: v.optional(v.string()),

  avatar_url: v.pipe(
    v.string(),
    v.nonEmpty('لطفا تصویر پروفایل را انتخاب کنید'),
  ),
});

export type AuthFormType = v.InferOutput<typeof authSchema>;
