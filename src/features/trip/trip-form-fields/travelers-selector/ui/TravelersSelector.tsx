'use client'
import { ContactsChip } from './ContactsChip';
import { useTravelersSelectorLogic } from '../model/useTravelersSelectorLogin';
import { FormContactSelect } from './FormContactSelect';
import { CounterSection } from '@shared/ui/counter';

export function TravelersSelector() {
  const { 
    count, 
    changeCount, 
    inputValue, 
    setInputValue, 
    friends, 
    inputRef, 
    handleAddFriend, 
    handleKeyDown 
  } = useTravelersSelectorLogic();

  return (
    <div className="flex flex-col gap-8 px-4">
      <section>
        <CounterSection
          counterTitle={'جمعاً چند نفریم؟'}
          count={count}
          changeCount={changeCount}
        />
      </section>

      <section className="flex flex-col gap-4">
        <div>
          <h4 className="font-bold text-base sm:text-lg md:text-xl text-text-main">
            می‌خوای رفیقاتم برنامه رو ببینن؟ 👀
          </h4>
          <span className="font-normal text-xs sm:text-sm md:text-base text-text-foreground">
            بذار اونا هم در جریان برنامه‌ریزی باشن.
          </span>
        </div>
        <FormContactSelect
          value={inputValue}
          setValue={setInputValue}
          inputRef={inputRef}
          onAdd={handleAddFriend}
          onKeyDown={handleKeyDown}
        />
        <ContactsChip contacts={friends} />
      </section>
    </div>
  );
}
