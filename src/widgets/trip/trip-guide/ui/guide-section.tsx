import Image from 'next/image';
import { SpeechIcon } from '@shared/assets/icons';
import LampIcon from '@shared/assets/icons/lamp.svg?url';
import { LabelSection } from './label-section';
import { QuestionsList } from './questions-list';
import ChatInterface from './chat-interface';
import { questions } from '../model/qustions.data';

export default function GuideSection() {
  return (
    <div className="w-full flex flex-col gap-3 sm:gap-5 md:gap-7 lg:gap-9">
      <div className="flex flex-col gap-3">
        <LabelSection
          label="چی می‌تونی از بومرو بپرسی؟"
          description="بومرو تو این کارها کنارت هست:"
          icon={
            <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8">
              <Image src={LampIcon} alt="ایده" fill />
            </div>
          }
        />
        <QuestionsList questions={questions} />
      </div>

      <div>
        <LabelSection
          label="چطور با بومرو حرف بزنم؟"
          description="هرچی واضح‌تر بگی، برنامه‌ای که می‌گیری دقیق‌تر و شخصی‌تر می‌شه."
          icon={
            <SpeechIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
          }
        />
        <ChatInterface />
      </div>
    </div>
  );
}
