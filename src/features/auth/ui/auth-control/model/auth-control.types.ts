import { ReactNode } from 'react';

export type AuthControlRenderProps = {
  openAuthModal: () => void;
};

export type AuthenticatedRenderProps = {
  fullName: string;
  avatarUrl?: string;
};

export interface AuthControlProps {
  guest: (props: AuthControlRenderProps) => ReactNode;

  authenticated: (
    props: AuthenticatedRenderProps,
  ) => ReactNode;
}