import * as React from 'react';
import { BaseIconProps } from './types';

interface MixerVerticalIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const MixerVerticalIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: MixerVerticalIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5 1.5a.5.5 0 00-1 0V7c0 .017 0 .033.002.05a2.5 2.5 0 000 4.9A.506.506 0 004 12v1.5a.5.5 0 001 0V12c0-.017 0-.033-.002-.05a2.5 2.5 0 000-4.9A.507.507 0 005 7V1.5zm6 0a.5.5 0 00-1 0V3c0 .017 0 .033.002.05a2.5 2.5 0 000 4.9A.507.507 0 0010 8v5.5a.5.5 0 001 0V8c0-.017 0-.033-.002-.05a2.5 2.5 0 000-4.9A.507.507 0 0011 3V1.5zM4.5 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM9 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`MixerVerticalIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default MixerVerticalIcon;
