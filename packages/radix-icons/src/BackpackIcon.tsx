import * as React from 'react';
import { BaseIconProps } from './types';

interface BackpackIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const BackpackIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BackpackIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M9 3H6v1h3V3zM5 3v1H3a1 1 0 00-1 1v2c0 .888.386 1.687 1 2.236V11.5A1.5 1.5 0 004.5 13h6a1.5 1.5 0 001.5-1.5V9.236c.614-.55 1-1.348 1-2.236V5a1 1 0 00-1-1h-2V3a1 1 0 00-1-1H6a1 1 0 00-1 1zm4 2h3v2a1.997 1.997 0 01-2 2H8v-.5a.5.5 0 00-1 0V9H5a1.991 1.991 0 01-1.209-.406A1.997 1.997 0 013 7V5h6zm-2 5H5c-.35 0-.687-.06-1-.17v1.67a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V9.83c-.313.11-.65.17-1 .17H8v.5a.5.5 0 01-1 0V10z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BackpackIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BackpackIcon;
