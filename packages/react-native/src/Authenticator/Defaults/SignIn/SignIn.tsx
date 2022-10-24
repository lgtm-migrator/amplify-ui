import React from 'react';
import { Text } from 'react-native';

import { SignInComponent } from './types';
import { DefaultFooter } from '../../common/DefaultFooter';
import { DefaultHeader } from '../../common/DefaultHeader';

const SignIn: SignInComponent = () => {
  return <Text>SignIn</Text>;
};

SignIn.Header = DefaultHeader;
SignIn.Footer = DefaultFooter;
SignIn.FormFields = function FormFields() {
  return null;
};

SignIn.displayName = 'SignIn';
export default SignIn;
