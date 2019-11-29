import * as React from 'react';
import { BaseIconProps } from './types';

interface RenameIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const RenameIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: RenameIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.5 1a.5.5 0 000 1c.922 0 1.54.23 1.92.564.373.325.58.802.58 1.436v3H5.75a.5.5 0 000 1H7v3c0 .634-.207 1.11-.58 1.436-.38.334-.998.564-1.92.564a.5.5 0 000 1c1.078 0 1.96-.27 2.58-.811.162-.142.302-.3.42-.47.118.17.258.328.42.47.62.541 1.502.811 2.58.811a.5.5 0 000-1c-.922 0-1.54-.23-1.92-.564C8.206 12.111 8 11.634 8 11V8h1.25a.5.5 0 000-1H8V4c0-.634.207-1.11.58-1.436C8.96 2.23 9.577 2 10.5 2a.5.5 0 000-1c-1.078 0-1.96.27-2.58.811-.162.142-.302.3-.42.47a2.588 2.588 0 00-.42-.47C6.46 1.27 5.577 1 4.5 1z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`RenameIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default RenameIcon;
