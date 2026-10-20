import { BudgetSelector } from '@features/trip/trip-form-fields/budget-selector';
import { TravelersSelector } from '@features/trip/trip-form-fields/travelers-selector';
import { Divider } from '@shared/ui';

export function CompanionsAndBudgetStep() {
  return (
    <div className="flex flex-col gap-3 md:gap-8 mt-2 md:mt-5 mb-2 md:mb-4">
      <div>
        <Divider text="همسفرها" className='my-1 md:my-2 px-4' />
        <TravelersSelector />
      </div>
      <div>
        <Divider text="بودجه" className='my-1 md:my-2 px-4' />
        <BudgetSelector />
      </div>
    </div>
  );
}
