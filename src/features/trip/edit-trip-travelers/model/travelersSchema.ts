import { array, InferOutput, number, object, optional, string } from 'valibot';

export const travelersSchema = object({
  travelerCount: optional(number(), 1),
  friends: optional(array(string()), []),
});

export type TravelersFormInput=InferOutput<typeof travelersSchema>
