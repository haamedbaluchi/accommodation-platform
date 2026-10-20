import type { FC } from "react";
import type { ShowcaseFeature } from "../model/types";

interface FeatureChecklistProps {
  readonly features: readonly ShowcaseFeature[];
}

const CheckIcon: FC = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="12" fill="#2563EB" />
    <path
      d="M7 12.5l3 3 7-7"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FeatureChecklist: FC<FeatureChecklistProps> = ({ features }) => {
  return (
    <ul className="flex flex-col gap-3">
      {features.map((feature) => (
        <li key={feature.id} className="flex items-center gap-2">
          <CheckIcon />
          <i className="text-sm font-medium leading-6 text-text-main sm:text-base">
            {feature.label}
          </i>
        </li>
      ))}
    </ul>
  );
};

FeatureChecklist.displayName = "FeatureChecklist";