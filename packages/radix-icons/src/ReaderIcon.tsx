import * as React from 'react';
import { BaseIconProps } from './types';

interface ReaderIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ReaderIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ReaderIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.2 1h-.023c-.308 0-.573 0-.79.02-.231.023-.459.071-.67.201a1.5 1.5 0 00-.496.495c-.13.212-.178.44-.2.67C2 2.604 2 2.87 2 3.177V11.823c0 .308 0 .573.02.79.023.231.071.459.201.67a1.5 1.5 0 00.495.496c.212.13.44.178.67.2.218.021.483.021.791.021H10.823c.308 0 .573 0 .79-.02.231-.023.459-.071.67-.201a1.5 1.5 0 00.496-.495c.13-.212.178-.44.2-.67.021-.218.021-.483.021-.791V3.177c0-.308 0-.573-.02-.79a1.519 1.519 0 00-.201-.67 1.5 1.5 0 00-.495-.496 1.519 1.519 0 00-.67-.2A8.997 8.997 0 0010.823 1H4.2zm-.961 1.074c.028-.018.085-.043.242-.058C3.645 2.001 3.863 2 4.2 2h6.6c.337 0 .555 0 .72.016.156.015.213.04.241.058a.5.5 0 01.165.165c.018.028.043.085.058.242.015.164.016.382.016.719v8.6c0 .337 0 .555-.016.72-.015.156-.04.213-.058.241a.5.5 0 01-.165.165c-.028.018-.085.043-.242.058A8.534 8.534 0 0110.8 13H4.2c-.337 0-.555 0-.72-.016-.156-.015-.213-.04-.241-.058a.5.5 0 01-.165-.165c-.018-.028-.043-.085-.058-.242A8.558 8.558 0 013 11.8V3.2c0-.337 0-.555.016-.72.015-.156.04-.213.058-.241a.5.5 0 01.165-.165zM5 10a.5.5 0 000 1h3a.5.5 0 000-1H5zm-.5-2.5A.5.5 0 015 7h5a.5.5 0 010 1H5a.5.5 0 01-.5-.5zM5 4a.5.5 0 000 1h5a.5.5 0 000-1H5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ReaderIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ReaderIcon;
