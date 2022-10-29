import React from 'react';
import { translate } from '@aws-amplify/ui';
import { humanFileSize } from '@aws-amplify/ui';
import { TrackerProps } from '../types';
import {
  Card,
  Flex,
  View,
  Image,
  Text,
  Button,
  TextField,
  Loader,
} from '../../../../primitives';
import { CloseIcon, EditIcon, fileIcon } from '../Previewer/PreviewerIcons';
import { FileState } from './FileState';
export function Tracker({
  file,
  hasImage,
  url,
  onChange,
  onPause,
  onResume,
  onCancel,
  onDelete,
  isLoading,
  isPaused,
  isSuccess,
  isError,
  errorMessage,
  name,
  percentage,
}: TrackerProps): JSX.Element {
  const [isEditing, setIsEditing] = React.useState(false);
  if (!file) return null;

  const { size } = file;

  const icon = hasImage ? (
    <Image alt="" maxHeight="100%" height="100%" src={url} />
  ) : (
    <View className="amplify-fileuploder__img-placeholder">{fileIcon}</View>
  );

  return (
    <Card
      variation="outlined"
      padding="0"
      className="amplify-fileuploader-file"
    >
      <Flex direction="row" padding="xs medium" gap="small" alignItems="center">
        <View className="amplify-fileuploader__img">{icon}</View>
        {isEditing ? (
          <Flex direction="row" flex="1" gap="small" alignItems="center">
            <View flex="1">
              <TextField
                width="100%"
                label="file name"
                size="small"
                variation="quiet"
                labelHidden
                onChange={onChange}
                value={name}
              />
            </View>
            <Button
              size="small"
              variation="primary"
              onClick={() => setIsEditing(false)}
            >
              Save
            </Button>
            <Button
              size="small"
              variation="link"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
          </Flex>
        ) : (
          <>
            <Flex
              direction="column"
              className="amplify-fileuploader__file-content"
              flex="1"
              gap="0"
            >
              <Flex
                direction="row"
                className="amplify-fileuploader__file-content"
                gap="xxs"
              >
                <Text
                  as="span"
                  fontWeight="bold"
                  className="amplify-fileuploader__filename"
                >
                  {name}
                </Text>
                <Button
                  onClick={() => setIsEditing(true)}
                  size="small"
                  variation="link"
                >
                  <EditIcon fontSize="medium" />
                </Button>
                <Text as="span" color="font.tertiary" marginInlineStart="small">
                  {humanFileSize(size, true)}
                </Text>
              </Flex>
              <FileState
                error={isError}
                errorMessage={errorMessage}
                success={isSuccess && !isError}
                paused={isPaused}
                loading={isLoading}
              />
            </Flex>
            {isLoading && (
              <>
                {isPaused ? (
                  <Button onClick={onResume} size="small" variation="link">
                    {translate('Resume')}
                  </Button>
                ) : (
                  <Button onClick={onPause} size="small" variation="link">
                    {translate('pause')}
                  </Button>
                )}
              </>
            )}
            {isSuccess && !isError && (
              <Button size="small" onClick={onDelete}>
                Delete
              </Button>
            )}
            {!isSuccess && !isLoading && (
              <Button size="small" onClick={onCancel}>
                <Text>
                  <CloseIcon />
                </Text>
              </Button>
            )}
          </>
        )}
      </Flex>
      <Flex direction="column" gap="0" alignItems="flex-end">
        <Loader
          className="amplify-fileuploader-loader"
          variation="linear"
          percentage={percentage}
          isDeterminate
        />
      </Flex>
    </Card>
  );
}
