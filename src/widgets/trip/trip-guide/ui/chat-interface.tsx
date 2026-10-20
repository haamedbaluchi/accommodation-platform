import { Divider } from '@shared/ui';
import { BotMessage } from './bot-message';
import { UserMessage } from './user-message';

export default function ChatInterface() {
  return (
    <div className="w-full py-3 flex flex-col gap-1 lg:gap-3 font-yekta">
      <div className="flex flex-col gap-2.25">
        <Divider text="بگو از کجا و چند روز" />
        <BotMessage text="بگو از کجا می‌خوای بری و چند روز؟" />
        <UserMessage text="می‌خوام ۳ روز برم اصفهان از تهران." />
      </div>

      <div className="flex flex-col gap-2.25">
        <Divider text="سلیقه‌ت رو بگو" />
        <BotMessage text="سلیقه‌ت رو بهم بگو" />
        <UserMessage text="جاهای تاریخی دوست دارم، خرید و پاساژنه." />
      </div>
      <div className="flex flex-col gap-2.25">
        <Divider text="بپرس چی می‌خوای" />
        <BotMessage text="حالا بگو دقیقاً چی می‌خوای برات آماده کنم؟" />
        <UserMessage text="برام برنامه روز به روز بساز با رستوران و کافه." />
      </div>
    </div>
  );
}
