'use client';

import { memo } from 'react';
import { AuthControlProps } from '../model/auth-control.types';
import { useAuthControl } from '../model/useAuthControl';

export const AuthControl = memo(
  ({
    guest,
    authenticated,
  }: AuthControlProps) => {
    const {
      isAuthenticated,
      openAuthModal,
      fullName,
      avatarUrl,
    } = useAuthControl();

    if (isAuthenticated) {
      return authenticated({
        fullName,
        avatarUrl,
      });
    }

    return guest({
      openAuthModal,
    });
  },
);

AuthControl.displayName = 'AuthControl';