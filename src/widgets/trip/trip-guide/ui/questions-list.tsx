import { Chip } from '@shared/ui';
import { ReactNode } from 'react';

interface QuestionItem {
  value: string;
  icon: ReactNode;
}

interface QuestionsListProps {
  questions: QuestionItem[];
}

export function QuestionsList({ questions }: QuestionsListProps) {
  return (
    <div className="w-full flex gap-2 md:gap-3 flex-wrap">
      {questions.map((question) => (
        <Chip
          key={question.value}
          text={question.value}
          icon={question.icon}
          className="shrink-0 bg-white"
        />
      ))}
    </div>
  );
}
