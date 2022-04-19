import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { useDeprecationWarning } from '../../../hooks/useDeprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconCalendarViewDay } from '@aws-amplify/ui-react';` → `import { MdCalendarViewDay } from 'react-icons/md';`
 */
export const IconCalendarViewDay = (props) => {
  const { className, ...rest } = props;
  useDeprecationWarning({
    shouldWarn: true,
    message: `Built-in icons are being deprecated in the next major release. You can use the react-icons (https://react-icons.github.io/react-icons) package with the Material Icon set in place of these icons or any other React Icon library.
import { IconCalendarViewDay } from '@aws-amplify/ui-react'; → import { MdCalendarViewDay } from 'react-icons/md';`,
  });
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 17H21V19H3V17ZM19 12V13H5V12H19ZM21 10H3V15H21V10ZM3 6H21V8H3V6Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
