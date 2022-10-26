import React from 'react';

import { authenticatorTextUtil } from '@aws-amplify/ui';

import { Button, ErrorMessage } from '../../../primitives';
import { DefaultHeader, DefaultFooter, DefaultFormFields } from '../../common';
import { DefaultConfirmResetPasswordComponent } from '../types';
import { styles } from './styles';

const {
  getResetYourPasswordText,
  getSubmitText,
  getSubmittingText,
  getResendCodeText,
} = authenticatorTextUtil;

const ConfirmResetPassword: DefaultConfirmResetPasswordComponent = ({
  error,
  fields,
  Footer,
  FormFields,
  Header,
  isPending,
  resendCode,
}) => {
  return (
    <>
      <Header>{getResetYourPasswordText()}</Header>
      <FormFields fields={fields} isPending={isPending} />
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      <Button
        style={styles.buttonPrimary}
        textStyle={styles.buttonPrimaryLabel}
      >
        {isPending ? getSubmittingText() : getSubmitText()}
      </Button>
      <Button
        onPress={resendCode}
        style={styles.buttonSecondary}
        textStyle={styles.buttonSecondaryLabel}
      >
        {getResendCodeText()}
      </Button>
      <Footer />
    </>
  );
};

ConfirmResetPassword.Footer = DefaultFooter;
ConfirmResetPassword.FormFields = DefaultFormFields;
ConfirmResetPassword.Header = DefaultHeader;

ConfirmResetPassword.displayName = 'ConfirmResetPassword';
export default ConfirmResetPassword;
