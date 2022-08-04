import { createMachine } from 'xstate';

import { AuthEvent, SignOutContext } from '../../../types';
import { Auth } from 'aws-amplify';

export const signOutActor = createMachine<SignOutContext, AuthEvent>(
  {
    initial: 'pending',
    id: 'signOutActor',
    states: {
      pending: {
        tags: ['pending'],
        invoke: {
          src: 'signOut',
          onDone: 'resolved',
          onError: 'rejected',
        },
      },
      resolved: { type: 'final' },
      rejected: { type: 'final' },
      stopped: { type: 'final' },
    },
    on: {
      CLEAN: 'stopped',
    },
  },
  {
    services: {
      signOut: () => Auth.signOut(/* global? */),
    },
  }
);
