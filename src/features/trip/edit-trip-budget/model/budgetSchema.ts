import { InferOutput, object, pipe, array, number, minValue, maxValue, length } from 'valibot';

export const BUDGET_MIN = 0;
export const BUDGET_MAX = 100;
export const BUDGET_DEFAULT: [number, number] = [0, 50];

export const budgetSchema = object({
  budgetRange: pipe(
    array(pipe(number(), minValue(BUDGET_MIN), maxValue(BUDGET_MAX))),
    length(2, 'بازه بودجه باید شامل حداقل و حداکثر باشد'),
  ),
});

export type BudgetFormInputs = InferOutput<typeof budgetSchema>;