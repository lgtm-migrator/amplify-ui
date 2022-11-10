import React from 'react';

import { Logger } from 'aws-amplify';
import { deleteUser, translate } from '@aws-amplify/ui';

import { useAuth } from '../../../internal';
import { Flex } from '../../../primitives';
import {
  DefaultWarning,
  DefaultError,
  DefaultSubmitButton,
} from './defaultComponents';
import { DeleteUserProps, DeleteUserState } from './types';

const logger = new Logger('DeleteUser');

function DeleteUser({
  onSuccess,
  onError,
  handleDelete,
}: DeleteUserProps): JSX.Element | null {
  const [state, setState] = React.useState<DeleteUserState>('IDLE');
  const [errorMessage, setErrorMessage] = React.useState<string>(null);

  // translations
  const deleteAccountText = translate('Delete Account');

  const { user, isLoading } = useAuth();

  const startConfirmation = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setState('IS_CONFIRMING');
  };

  const runDeleteUser = React.useCallback(async () => {
    setState('IN_PROGRESS');
    try {
      if (handleDelete) {
        /*
         * run custom delete handler, if provided. We pass `user` so that
         * developer can do whichever cleanup with the user object they wish.
         */
        await handleDelete(user);
      } else {
        // else, run default deleteUser function.
        await deleteUser();
      }
      setState('DONE');
      onSuccess?.();
    } catch (e) {
      const error = e as Error;
      setState('IDLE');
      setErrorMessage(error.message);
      onError?.(error);
    }
  }, [handleDelete, onError, onSuccess, user]);

  // called when end user cancels account deletion confirmation
  const handleCancel = React.useCallback(() => {
    setState('IDLE');
  }, []);

  const handleConfirmDelete = React.useCallback(() => {
    runDeleteUser();
  }, [runDeleteUser]);

  // Return null if Auth.getCurrentAuthenticatedUser is still in progress
  if (isLoading) {
    return null;
  }

  /** Return null if user isn't authenticated in the first place */
  if (!user) {
    logger.warn('<DeleteUser /> requires user to be authenticated.');
    return null;
  }

  // Return null if delete user was successful
  if (state === 'DONE') {
    return null;
  }

  return (
    <Flex direction="column">
      <DefaultSubmitButton
        isDisabled={state === 'IS_CONFIRMING'}
        onClick={startConfirmation}
      >
        {deleteAccountText}
      </DefaultSubmitButton>
      {state === 'IS_CONFIRMING' || state === 'IN_PROGRESS' ? (
        <DefaultWarning
          onCancel={handleCancel}
          isInProgress={state === 'IN_PROGRESS'}
          onConfirmDelete={handleConfirmDelete}
        />
      ) : null}
      {errorMessage ? <DefaultError>{errorMessage}</DefaultError> : null}
    </Flex>
  );
}

export default DeleteUser;
