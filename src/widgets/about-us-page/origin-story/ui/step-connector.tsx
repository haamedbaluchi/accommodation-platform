import type { FC } from "react";

export const StepConnector: FC = () => {
  return (
    <div
      aria-hidden="true"
      className="hidden flex-1 items-center self-center px-2 lg:flex h-20 max-w-35"
    >
      <div className="w-full border-t-2 border-dashed border-gray-300 h-full" />
    </div>
  );
};

StepConnector.displayName = "StepConnector";