import React from 'react';
import { Card, Flex, Text, Button } from '../../../primitives';

import { DeleteUserWarningProps } from './types';

export const DefaultConfirmation = ({
  onCancel,
  onConfirmDelete,
}: DeleteUserWarningProps): JSX.Element => {
  return (
    <Card>
      <Flex direction="column">
        <Text color="font.error">
          Deleting your account is not reversable. You will lose access to your
          account and all data associated with it.
        </Text>
        <Flex direction="row">
          <Button variation="link" onClick={onCancel}>
            Cancel
          </Button>
        </Flex>
        <Button variation="primary" onClick={onConfirmDelete}>
          Delete my account
        </Button>
      </Flex>
    </Card>
  );
};
