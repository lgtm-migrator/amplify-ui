function loadStories() {
  require('./stories/Button.stories');
  require('./stories/Checkbox.stories');
  require('./stories/ConfirmResetPassword.stories');
  require('./stories/ConfirmSignIn.stories');
  require('./stories/ConfirmSignUp.stories');
  require('./stories/ConfirmVerifyUser.stories');
  require('./stories/Divider.stories');
  require('./stories/ErrorMessage.stories');
  require('./stories/FederatedProviderButton.stories');
  require('./stories/ForceNewPassword.stories');
  require('./stories/Heading.stories');
  require('./stories/Icon.stories');
  require('./stories/Label.stories');
  require('./stories/PasswordField.stories');
  require('./stories/PhoneNumberField.stories');
  require('./stories/Radio.stories');
  require('./stories/RadioGroup.stories');
  require('./stories/ResetPassword.stories');
  require('./stories/SetupTOTP.stories');
  require('./stories/SignIn.stories');
  require('./stories/SignUp.stories');
  require('./stories/Tabs.stories');
  require('./stories/TextField.stories');
  require('./stories/VerifyUser.stories');
}

const stories = [
  './stories/Button.stories',
  './stories/Checkbox.stories',
  './stories/ConfirmResetPassword.stories',
  './stories/ConfirmSignIn.stories',
  './stories/ConfirmSignUp.stories',
  './stories/ConfirmVerifyUser.stories',
  './stories/Divider.stories',
  './stories/ErrorMessage.stories',
  './stories/FederatedProviderButton.stories',
  './stories/ForceNewPassword.stories',
  './stories/Heading.stories',
  './stories/Icon.stories',
  './stories/Label.stories',
  './stories/PasswordField.stories',
  './stories/PhoneNumberField.stories',
  './stories/Radio.stories',
  './stories/RadioGroup.stories',
  './stories/ResetPassword.stories',
  './stories/SetupTOTP.stories',
  './stories/SignIn.stories',
  './stories/SignUp.stories',
  './stories/Tabs.stories',
  './stories/TextField.stories',
  './stories/VerifyUser.stories',
];

module.exports = {
  loadStories,
  stories,
};
