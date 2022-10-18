import { Defaults, Overrides } from '../types';

const Footer = () => null;
const FormFields = () => null;
const Header = () => null;

const ConfirmResetPassword: Defaults['ConfirmResetPassword'] = () => {
  return null;
};
ConfirmResetPassword.Footer = Footer;
ConfirmResetPassword.FormFields = FormFields;
ConfirmResetPassword.Header = Header;

const ConfirmSignIn: Defaults['ConfirmSignIn'] = () => {
  return null;
};
ConfirmSignIn.Footer = Footer;
ConfirmSignIn.FormFields = FormFields;
ConfirmSignIn.Header = Header;

const ConfirmSignUp: Defaults['ConfirmSignUp'] = () => {
  return null;
};
ConfirmSignUp.Footer = Footer;
ConfirmSignUp.FormFields = FormFields;
ConfirmSignUp.Header = Header;

const ConfirmVerifyUser: Defaults['ConfirmVerifyUser'] = () => {
  return null;
};
ConfirmVerifyUser.Footer = Footer;
ConfirmVerifyUser.FormFields = FormFields;
ConfirmVerifyUser.Header = Header;

const ForceNewPassword: Defaults['ForceNewPassword'] = () => {
  return null;
};
ForceNewPassword.Footer = Footer;
ForceNewPassword.FormFields = FormFields;
ForceNewPassword.Header = Header;

const ResetPassword: Defaults['ResetPassword'] = () => {
  return null;
};
ResetPassword.Footer = Footer;
ResetPassword.FormFields = FormFields;
ResetPassword.Header = Header;

const SetupTOTP: Defaults['SetupTOTP'] = () => {
  return null;
};
SetupTOTP.Footer = Footer;
SetupTOTP.FormFields = FormFields;
SetupTOTP.Header = Header;

const SignIn: Defaults['SignIn'] = () => {
  return null;
};
SignIn.Footer = Footer;
SignIn.FormFields = FormFields;
SignIn.Header = Header;

const SignUp: Defaults['SignUp'] = () => {
  return null;
};
SignUp.Footer = Footer;
SignUp.FormFields = FormFields;
SignUp.Header = Header;

const VerifyUser: Defaults['VerifyUser'] = () => {
  return null;
};
VerifyUser.Footer = Footer;
VerifyUser.FormFields = FormFields;
VerifyUser.Header = Header;

export const DEFAULTS: Defaults = {
  ConfirmResetPassword,
  ConfirmSignIn,
  ConfirmSignUp,
  ConfirmVerifyUser,
  ForceNewPassword,
  ResetPassword,
  SetupTOTP,
  SignIn,
  SignUp,
  VerifyUser,
};

const OverrideConfirmResetPassword: Overrides['ConfirmResetPassword'] = () =>
  null;

export const OVERRIDES: Overrides = {
  ConfirmResetPassword: OverrideConfirmResetPassword,
};

const InvalidSignIn = 'Not a component' as unknown as Overrides['SignIn'];

export const INVALID_SIGN_IN_OVERRIDES: Overrides = {
  SignIn: InvalidSignIn,
};

export const INVALID_OVERRIDES = 'INVALID_OVERRIDES' as Overrides;
