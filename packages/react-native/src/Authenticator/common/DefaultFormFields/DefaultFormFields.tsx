import React, { Fragment } from 'react';
import { View } from 'react-native';

import { getErrors } from '@aws-amplify/ui';
import { DefaultComponents } from '../../Defaults';
import { TextFieldOptionsType } from '../../hooks';
import { FieldErrors } from './FieldErrors';
import { styles } from './styles';
import { PasswordField, TextField } from '../../../primitives';

const DefaultFormFields: DefaultComponents<TextFieldOptionsType>[keyof DefaultComponents]['FormFields'] =
  ({ fields = [], isPending, validationErrors }) => {
    const fieldStyle = styles.field;
    const formFields = fields.map(({ name, type, ...field }) => {
      const errors = validationErrors
        ? getErrors(validationErrors?.[name])
        : [];

      const hasError = errors?.length > 0;

      const Field = type === 'password' ? PasswordField : TextField;

      return (
        <Fragment key={name}>
          <Field
            {...field}
            disabled={isPending}
            error={hasError}
            key={name}
            keyboardType={type === 'phone' ? 'phone-pad' : undefined}
            style={fieldStyle}
          />
          <FieldErrors errors={errors} style={styles.error} />
        </Fragment>
      );
    });
    return <View>{formFields}</View>;
  };

DefaultFormFields.displayName = 'FormFields';

export default DefaultFormFields;
