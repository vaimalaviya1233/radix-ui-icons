import * as React from 'react';
import { BaseIconProps } from './types';

interface DeviceSpeakerIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const DeviceSpeakerIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DeviceSpeakerIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M17 4.5H8A1.5 1.5 0 006.5 6v13A1.5 1.5 0 008 20.5h9a1.5 1.5 0 001.5-1.5V6A1.5 1.5 0 0017 4.5z"
          stroke={color}
        />
        <path d="M12.5 17.5a3 3 0 100-6 3 3 0 000 6z" stroke={color} />
        <path d="M12.5 8a.5.5 0 100-1 .5.5 0 000 1z" fill={color} />
      </svg>
    );
  }

  console.error(`DeviceSpeakerIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DeviceSpeakerIcon;
