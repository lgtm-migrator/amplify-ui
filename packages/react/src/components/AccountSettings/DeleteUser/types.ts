import { AmplifyUser } from '@aws-amplify/ui';

export interface DeleteUserWarningProps {
  /** called when end user cancels account deletion */
  onCancel: () => void;
  /** called when user acknowledges account deletion */
  onConfirmDelete: () => void;
  /** whether account deletion is in progress */
  isDisabled?: boolean;
}

export type DeleteUserState = 'IDLE' | 'CONFIRMING' | 'DELETING' | 'DONE';

export interface DeleteUserProps {
  /** custom delete user service override */
  handleDelete?: (user: AmplifyUser) => Promise<void> | void;

  /** callback for successful user deletion */
  onSuccess?: () => void;

  /** callback for unsuccessful user deletion  */
  onError?: (error: Error) => void;
}
