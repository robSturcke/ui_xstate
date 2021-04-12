import { Machine } from 'xstate';

export interface ForceSchema {
  states: {
    light: {};
    dark: {};
  };
}

export type ForceEvents = { type: 'CORRUPT' } | { type: 'REDEEM' };

export interface ForceContext {}

export const forceMachine = Machine<ForceContext, ForceSchema, ForceEvents>(
  {
    id: 'force',
    initial: 'light',
    context: {},
    states: {
      light: {
        on: {
          CORRUPT: 'dark'
        }
      },
      dark: {
        activities: ['theDarknessGrows'],
        on: {
          REDEEM: 'light'
        }
      }
    }
  },
  {}
);